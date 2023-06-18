import React from "react";
import HomePage from "./HomePage";
import { localStorageService } from "../../utils";
import { useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";

export const HomePageContainer = (): JSX.Element => {
  const isAuthenticated =
    useAppSelector((state: RootState) => {
      return state.user.isAuthenticated;
    }) || localStorageService.isAuthenticated;
  return <HomePage isAuthenticated={isAuthenticated} />;
};
