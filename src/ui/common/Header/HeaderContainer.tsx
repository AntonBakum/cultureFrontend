import React from "react";
import HeaderFragment from "./HeaderFragment";
import { localStorageService } from "../../utils";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import { logoutUserAction } from "../../../slices/userSlice";
import { useNavigate } from "react-router";

export const HeaderContainer = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuthenticated =
    useAppSelector((state: RootState) => {
      return state.user.isAuthenticated;
    }) || localStorageService.isAuthenticated;
  return (
    <HeaderFragment
      isAuthenticated={isAuthenticated}
      onLogoutButtonClick={() => {
        localStorageService.clearLocalStorage();
        dispatch(logoutUserAction());
        navigate("/login");
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      }}
    />
  );
};
