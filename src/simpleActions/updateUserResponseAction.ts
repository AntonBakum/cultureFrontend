import { createAction } from "@reduxjs/toolkit";
import { Response } from "../models";

interface PayloadModel extends Response<string> {
  id: number;
  email?: string;
  name?: string;
  phone?: string;
  nickname?: string;
}

export const updateUserResponseAction = createAction<PayloadModel>(
  "users/updateUserResponse"
);
