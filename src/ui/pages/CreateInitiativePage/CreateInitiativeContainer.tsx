import React, { useState } from "react";
import CreateInitiativePage from "./CreateInitiativePage";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import { formatDate, localStorageService } from "../../utils";
import {
  createInitiativeThunkAction,
  createNewsThunkAction,
} from "../../../actions";
import {
  InitiativeTransportationModel,
  NewsTransportationModel,
} from "../../../models";

export const CreateInitiativePageContainer = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [photo, uploadPhoto] = useState<File | null>(null);
  const userId: number = useAppSelector((state: RootState) => state.user.id) ?? +(localStorageService.getLocalStorageItem("Id") ?? '');
  const currentDate = new Date();
  const props = {
    userId,
    creationDate: formatDate(currentDate),
    newsImage: photo,
    onNewsSubmit: (newsData: NewsTransportationModel) =>
      dispatch(createNewsThunkAction(newsData)),
    onInitiativeSubmit: (initiative: InitiativeTransportationModel) =>
      dispatch(createInitiativeThunkAction(initiative)),
    onImageUpload: (photoToUpload: File) => uploadPhoto(photoToUpload),
  };
  return <CreateInitiativePage {...props} />;
};
