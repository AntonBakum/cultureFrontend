import React, { useEffect, useState } from "react";
import RegistrationPage from "./RegistrationPage";
import { RegistrationModel } from "../../../models";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { registerUserThunkAction } from "../../../actions";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../app/store";
import { localStorageService } from "../../utils";

export const RegistrationPageContainer = (): JSX.Element => {
  const dispatch = useAppDispatch();
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
    onSubmit: (registrationData: RegistrationModel) =>
      dispatch(registerUserThunkAction(registrationData)),
  };
  return <RegistrationPage {...props} />;
};
