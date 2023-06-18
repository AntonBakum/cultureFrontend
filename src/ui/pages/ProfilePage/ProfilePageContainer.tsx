import { useEffect, useReducer, useState } from "react";
import ProfilePage, { User } from "./ProfilePage";
import {
  getUserInformationThunkAction,
  updateUserInformationThunkAction,
} from "../../../actions";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import { localStorageService } from "../../utils";

const enum ActionType {
  changeEmailAction,
  changePhoneAction,
  changeNameAction,
  changeNickNameAction,
  changeProfileElement,
  cleanupAction,
}

interface LocalState {
  email?: string;
  phone?: string;
  name?: string;
  nickname?: string;
  profileElement: string;
}

const initialState: LocalState = {
  profileElement: "1",
};

const reducer = (
  state: LocalState,
  action: { type: ActionType; payload?: string }
): LocalState => {
  switch (action.type) {
    case ActionType.changeEmailAction:
      return {
        ...state,
        email: action.payload ?? "",
      };
    case ActionType.changeNickNameAction:
      return {
        ...state,
        nickname: action.payload ?? "",
      };
    case ActionType.changePhoneAction:
      return {
        ...state,
        phone: action.payload ?? "",
      };
    case ActionType.changeNameAction:
      return {
        ...state,
        email: action.payload ?? "",
      };
    case ActionType.changeProfileElement:
      return {
        ...state,
        profileElement: action.payload ?? "",
      };
    case ActionType.cleanupAction:
      return {
        ...initialState,
      };
    default:
      return {
        ...state,
      };
  }
};

export const ProfilePageContainer = () => {
  const dispatch = useAppDispatch();
  const [localState, localDispatch] = useReducer(reducer, initialState);

  const stateModel = useAppSelector((state: RootState) => {
    return state.user;
  });

  useEffect(() => {
    dispatch(
      getUserInformationThunkAction(
        +(localStorageService.getLocalStorageItem("Id") as string)
      )
    );
  }, [dispatch]);

  const userId =
    stateModel.id === 0 || stateModel.id === undefined
      ? +(localStorageService.getLocalStorageItem("Id") as string)
      : stateModel.id;

  const phone = localState.phone ?? stateModel.phone;

  const name = localState.name ?? stateModel.name;

  const nickname = localState.nickname ?? stateModel.nickName;

  const email = localState.email ?? stateModel.email;

  const userInformation: User = {
    id: userId,
    email,
    phone: phone ?? "Додайте ваш телефон",
    name,
    nickName: nickname ?? "Введіть свій юзернейм",
  };

  const props = {
    selectedItem: localState.profileElement,
    userInfo: userInformation,
    changeSelectedItem: (newItem: string) =>
      localDispatch({
        type: ActionType.changeProfileElement,
        payload: newItem,
      }),
    onPhoneChange: (phone: string) =>
      localDispatch({
        type: ActionType.changePhoneAction,
        payload: phone,
      }),
    onEmailChange: (email: string) =>
      localDispatch({
        type: ActionType.changeEmailAction,
        payload: email,
      }),
    onNickNameChange: (nickName: string) =>
      localDispatch({
        type: ActionType.changeNickNameAction,
        payload: nickName,
      }),
    onNameChange: (name: string) =>
      localDispatch({
        type: ActionType.changeNameAction,
        payload: name,
      }),
    onUpdateUserButtonClick: () =>
      dispatch(
        updateUserInformationThunkAction({
          id: userId,
          email,
          name,
          phone,
          nickname: nickname,
        })
      ),
    onCleanDataButtonClick: () =>
      localDispatch({ type: ActionType.cleanupAction }),
  };

  return <ProfilePage {...props} />;
};
