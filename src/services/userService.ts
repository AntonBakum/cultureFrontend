import axios, { AxiosError } from "axios";
import {
  LoginModel,
  RegistrationModel,
  TokenModel,
  UserInfoModel,
  UserUpdateModel,
  Response,
} from "../models";
import { axiosInstance } from "./axiosInstance";

export const loginUser = async (userData: LoginModel): Promise<TokenModel> =>
  axios
    .post(`${process.env.REACT_APP_API_URL}/api/auth/login`, userData)
    .then((response) => response.data);

export const registrateUser = async (
  userData: RegistrationModel
): Promise<TokenModel> =>
  axios
    .post(`${process.env.REACT_APP_API_URL}/api/Auth/register-user`, userData)
    .then((response) => response.data);

export const getUserInformation = async (id: number): Promise<UserInfoModel> =>
  axiosInstance
    .get(`${process.env.REACT_APP_API_URL}/api/User/get-user/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) =>
      console.log(`${error.status} ${error.cause}`)
    );

export const updateUserAsync = async (
  model: UserUpdateModel
): Promise<Response<string>> => {
  return axios
    .patch(
      `${process.env.REACT_APP_API_URL}/api/User/update-user/${model.id}`,
      {
        Name: model.name,
        Email: model.email,
        Phone: model.phone,
        Nickname: model.nickname,
      }
    )
    .then((response) => {
      return {
        data: response.data,
        statusCode: response.status,
      };
    });
};
  
// export const registerUserAsync = async (
//   model: RegistrationModel
// ): Promise<Response<TokenModel>> => {
//   return axios
//     .post(`${process.env.REACT_APP_API_URL}/api/Auth/register-user/`, {
//       Name: model.name,
//       Email: model.email,
//       Password: model.password,
//     })
//     .then((response) => {
//       return {
//         data: response.data,
//         statusCode: response.status,
//       };
//     });
// };
