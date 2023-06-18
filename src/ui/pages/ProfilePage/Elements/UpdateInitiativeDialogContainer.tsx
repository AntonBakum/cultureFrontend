import { useEffect, useReducer } from "react";
import { UpdateInitiativeDialog } from "./UpdateInitiativeDialog";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { RootState } from "../../../../app/store";
import { localStorageService } from "../../../utils";
import { getInitiativeThunkAction } from "../../../../actions/initiativesThunkActions";

const enum ActionType {
  changeTitleAction,
  changeDescriptionAction,
  cleanupAction,
}

interface LocalState {
  title?: string;
  description?: string;
}

const initialState: LocalState = {};

const reducer = (
  state: LocalState,
  action: { type: ActionType; payload?: string }
): LocalState => {
  switch (action.type) {
    case ActionType.changeDescriptionAction:
      return {
        ...state,
        description: action.payload ?? "",
      };
    case ActionType.changeTitleAction:
      return {
        ...state,
        title: action.payload ?? "",
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

export const UpdateInitiativeDialogContainer = () => {
  const [localState, localDispatch] = useReducer(reducer, initialState);
  const dispatch = useAppDispatch();
  const userId: number =
    useAppSelector((state: RootState) => state.user.id) ??
    +(localStorageService.getLocalStorageItem("Id") ?? "");
  useEffect(() => {
    dispatch(getInitiativeThunkAction(userId));
  });
  const props = {
    isOpen: true,
    title: localState.title,
    text: localState.description,
    onTitleChange: (title: string) =>
      localDispatch({ type: ActionType.changeTitleAction, payload: title }),
    onDescriptionChange: (description: string) =>
      localDispatch({
        type: ActionType.changeTitleAction,
        payload: description,
      }),
    onSendClick: () => console.log("test"),
    onExitClick: () =>
      localDispatch({
        type: ActionType.cleanupAction,
      }),
  };
  return <UpdateInitiativeDialog {...props} />;
};
