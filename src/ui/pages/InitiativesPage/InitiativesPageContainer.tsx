import React, { useEffect } from "react";
import {
  getInitiativesThunkAction,
  getTopInitiativesThunkAction,
  supportInitiativeThunkAction,
} from "../../../actions";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import InitiativesPage from "./InitiativesPage";
import { shallowEqual } from "react-redux";
import { SupportersModel } from "../../../models";
import { Item } from "./Elements";
import { localStorageService } from "../../utils";

export const InitiativesPageContainer = (): JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getInitiativesThunkAction());
    dispatch(getTopInitiativesThunkAction());
  }, [dispatch]);
  const initiativesState = useAppSelector(
    (state: RootState) => state.initiatives,
    shallowEqual
  );
  const isAuthenticated = useAppSelector(
    (state: RootState) => state.user.isAuthenticated
  );
  const initiatives = initiativesState.ids?.map(
    (id) => initiativesState.initiatives[id]
  );
  const topInitiativesDataset = initiativesState.topIds
    ?.map((id) => initiativesState.topInitiatives[id])
    .map((item) => {
      return {
        value: item.numberOfSupporters,
        label: `${item.title} ${item.creationDate}`,
      } as Item;
    });
  const userId: number = +(localStorageService.getLocalStorageItem("Id") ?? '');
  const props = {
    initiatives,
    userId,
    topInitiativesDataset,
    isAuthenticated,
    onSupportInitiativeButtonClick: (id: number, model: SupportersModel) =>
      dispatch(supportInitiativeThunkAction({ id, model })),
  };
  return <InitiativesPage {...props} />;
};
