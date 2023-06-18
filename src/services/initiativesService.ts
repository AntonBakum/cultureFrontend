import axios from "axios";
import {
  InitiativeModel,
  InitiativeTransportationModel,
  SupportersModel,
  TopInitiativeModel,
} from "../models";
import { axiosInstance } from "./axiosInstance";
import { InitiativeByIdModel, UpdateInitiativeModel } from "../models/initiativesModels";

export const getAllInitiatives = async (): Promise<InitiativeModel[]> =>
  axiosInstance
    .get(`${process.env.REACT_APP_API_URL}/api/initiatives`)
    .then((response) => response.data);

export const getTopInitiatives = async (): Promise<TopInitiativeModel[]> =>
  axiosInstance
    .get(`${process.env.REACT_APP_API_URL}/api/initiatives/top-initiatives`)
    .then((response) => response.data);

export const createInitiative = async (
  initiative: InitiativeTransportationModel
): Promise<number> =>
  axiosInstance
    .post(
      `${process.env.REACT_APP_API_URL}/api/initiatives/create-initiative`,
      initiative
    )
    .then((response) => response.data);

export const supportInitiative = async (id: number, model: SupportersModel) =>
  axiosInstance.patch(
    `${process.env.REACT_APP_API_URL}/api/initiatives/support-initiative/${id}`,
    model
  );

export const deleteInitiativeAsync = async (id: number) =>
  axiosInstance.delete(
    `${process.env.REACT_APP_API_URL}/api/initiatives/delete-initiative/${id}`
  );

export const updateInitiativeAsync = async (model: UpdateInitiativeModel) => {
  axiosInstance.patch(
    `${process.env.REACT_APP_API_URL}/api/initiatives/update-initiative/${model.id}`,
    {
      Title: model.title,
      Description: model.description,
    }
  );
};

export const getInitiativeByIdAsync = async (id: number): Promise<InitiativeByIdModel[]> => {
  return axiosInstance.get(
    `${process.env.REACT_APP_API_URL}/api/initiatives/update-initiative/${id}`
  ).then((response) => response.data);
};
