import { createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "../services";
import jwt_decode from "jwt-decode";
import { UserModel } from "../slices/userSlice";
import {
  DecodedTokenModel,
  LoginModel,
  RegistrationModel,
  UserUpdateModel,
} from "../models";
import { localStorageService } from "../ui";
import { AxiosError } from "axios";
import { updateUserResponseAction } from "../simpleActions";

export const loginUserThunkAction = createAsyncThunk(
  "user/loginUserThunkAction",
  async (loginData: LoginModel) => {
    const tokens = await userService.loginUser(loginData);
    localStorageService.setLocalStorageItem("accessToken", tokens.token);
    localStorageService.setLocalStorageItem("refreshToken", tokens.refreshToken);
    const decodedToken: DecodedTokenModel = jwt_decode(tokens.token);
    Object.keys(decodedToken).forEach((claim: string) => {
      localStorageService.setLocalStorageItem(
        claim,
        decodedToken[claim as keyof DecodedTokenModel].toString()
      );
    });
    const user: UserModel = {
      id: parseInt(decodedToken.Id, 10),
      email: decodedToken.email,
    };
    return user;
  }
);

export const getUserInformationThunkAction = createAsyncThunk(
  "user/getUserInformation",
  async (id: number) => {
    const userInfo = await userService.getUserInformation(id);

    return userInfo;
  }
);

export const updateUserInformationThunkAction = createAsyncThunk(
  "users/updateUser",
  (model: UserUpdateModel, { dispatch }) => {
    userService
      .updateUserAsync(model)
      .then((response) =>
        dispatch(
          updateUserResponseAction({
            ...response,
            id: model.id,
            email: model.email,
            phone: model.phone,
            nickname: model.nickname,
          })
        )
      )
      .catch((error: AxiosError) =>
        console.log(`${error.code} ${error.message}`)
      );
  }
);

export const registerUserThunkAction = createAsyncThunk(
  "users/auth/registerUser",
  async (model: RegistrationModel) => {
    const tokens = await userService.registrateUser(model);
    localStorageService.setLocalStorageItem("accessToken", tokens.token);
    localStorageService.setLocalStorageItem("refreshToken", tokens.refreshToken);
    const decodedToken: DecodedTokenModel = jwt_decode(tokens.token);
    Object.keys(decodedToken).forEach((claim: string) => {
      localStorageService.setLocalStorageItem(
        claim,
        decodedToken[claim as keyof DecodedTokenModel].toString()
      );
    });
    const user: UserModel = {
      id: parseInt(decodedToken.Id, 10),
      email: decodedToken.email,
    };
    return user;
  }
);
