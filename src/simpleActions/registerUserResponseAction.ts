import { createAction } from "@reduxjs/toolkit";
import { Response, TokenModel } from "../models";

export const registerUserResponseAction = createAction<Response<TokenModel>>(
  "users/auth/registerUserResponse"
);
