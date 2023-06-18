import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import {
  getUserInformationThunkAction,
  loginUserThunkAction,
  registerUserThunkAction,
} from "../actions";
import { UserInfoModel } from "../models";
import { updateUserResponseAction } from "../simpleActions";

export interface UserModel {
  id: number;
  email: string;
  name?: string;
  nickName?: string;
  phone?: string;
}

interface State {
  id: number;
  email: string;
  phone?: string;
  nickName?: string;
  name?: string;
  isAuthenticated: boolean;
}

const initialState: State = {
  id: 0,
  email: "",
  isAuthenticated: false,
};

const updateCurrentUser = (
  id: number,
  email: string,
  name?: string,
  oldUserInfo?: State,
  phone?: string,
  nickName?: string,
  isAuthenticated?: boolean
): State => {
  return {
    id,
    name: name ?? oldUserInfo?.name ?? "",
    email: email ?? oldUserInfo?.email ?? "",
    phone: phone ?? oldUserInfo?.phone ?? "",
    nickName: nickName ?? oldUserInfo?.nickName ?? "",
    isAuthenticated: isAuthenticated ?? oldUserInfo?.isAuthenticated ?? false,
  };
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUserAction(state) {
      state = {
        id: 0,
        email: "",
        isAuthenticated: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        loginUserThunkAction.fulfilled,
        (state, action: PayloadAction<UserModel>) => {
          if (action.payload) {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.isAuthenticated = true;
          }
        }
      )
      .addCase(
        getUserInformationThunkAction.fulfilled,
        (state, action: PayloadAction<UserInfoModel>) => {
          state.email = action.payload.email;
          state.name = action.payload.name;
          state.nickName = action.payload.userName;
          state.id = action.payload.id;
          state.phone = action.payload.phone;
          state.isAuthenticated = true;
        }
      )
      .addCase(updateUserResponseAction, (state, action) => {
        const payload = action.payload;
        if (payload.data) {
          state = {
            id: action.payload.id ?? state.id,
            email: payload.email ?? state.email,
            nickName: payload.nickname ?? state.nickName,
            phone: payload.phone ?? state.phone,
            isAuthenticated: true,
          };
        }
      })
      .addCase(
        registerUserThunkAction.fulfilled,
        (state, action: PayloadAction<UserModel>) => {
          if (action.payload) {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.isAuthenticated = true;
          }
        }
      )
      .addMatcher(
        isAnyOf(
          getUserInformationThunkAction.fulfilled,
          loginUserThunkAction.fulfilled
        ),
        (_, action) => {
          console.log(action.type);
        }
      );
  },
});

export const { logoutUserAction } = userSlice.actions;

export default userSlice.reducer;
