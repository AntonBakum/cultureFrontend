import React, { useEffect, useState } from "react";
import LoginPage from "./LoginPage";
import { loginUserThunkAction } from "../../../actions";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useNavigate } from "react-router";
import { RootState } from "../../../app/store";
import { LoginModel } from "../../../models";
import { localStorageService } from "../../utils";

export const LoginPageContainer = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const [showPassword, changePasswordStatus] = useState<boolean>(true);
  const isAuthenticated = useAppSelector(
    (state: RootState) => state.user.isAuthenticated
  ) || localStorageService.isAuthenticated;
  const navigate = useNavigate()
  useEffect(() => {
    isAuthenticated && navigate('/')
  }, [isAuthenticated, navigate])
  const props = {
    isPasswordHidden: showPassword,
    onPasswordFieldClick: () => changePasswordStatus(!showPassword),
    onSubmit: (loginData: LoginModel) => {
      dispatch(loginUserThunkAction(loginData));
    },
  };
  return <LoginPage {...props} />;
};
