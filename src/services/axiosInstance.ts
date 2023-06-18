import axios from "axios";
import jwt_decode from "jwt-decode";
import { localStorageService } from "../ui";
import { DecodedTokenModel, TokenModel } from "../models";
import dayjs from "dayjs";

let accessToken = localStorageService.getTokenFromStorage();
let refreshToken = localStorageService.getRefreshToken();

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { Authorization: `Bearer ${accessToken}` },
});

axiosInstance.interceptors.request.use(async (request) => {
  if (accessToken !== undefined && refreshToken !== undefined) {
    accessToken = localStorageService.getTokenFromStorage();
    request.headers.Authorization = `Bearer ${accessToken}`;
  }

  const decodedToken: DecodedTokenModel = jwt_decode(accessToken ?? "");

  const isExpired = dayjs.unix(decodedToken.exp).diff(dayjs()) < 1;
  if (!isExpired) return request;

  const response: TokenModel = await axios.post(
    `${process.env.REACT_APP_API_URL}/api/auth/refresh-token`,
    { Token: accessToken, RefreshToken: refreshToken }
  );

  localStorageService.setLocalStorageItem("accessToken", response.token);
  localStorageService.setLocalStorageItem(
    "refreshToken",
    response.refreshToken
  );
  request.headers.Authorization = `Bearer ${accessToken}`;
  return request;
});
