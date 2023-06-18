import { createAsyncThunk } from "@reduxjs/toolkit";
import { initiativesService } from "../services";
import {
  InitiativeModel,
  InitiativeTransportationModel,
  SupportersModel,
  SupportersUpdatingModel,
} from "../models";
import { UpdateInitiativeModel } from "../models/initiativesModels";

export const getInitiativesThunkAction = createAsyncThunk(
  "initiatives/getInitiativesThunkAction",
  async () => {
    const initiatives = await initiativesService.getAllInitiatives();
    return initiatives;
  }
);

export const getTopInitiativesThunkAction = createAsyncThunk(
  "initiatives/getTopInitiativesThunkAction",
  async () => {
    const initiatives = await initiativesService.getTopInitiatives();
    return initiatives;
  }
);

export const createInitiativeThunkAction = createAsyncThunk(
  "initiatives/createInitiativeThunkAction",
  async (initiative: InitiativeTransportationModel) => {
    const initiativeId = await initiativesService.createInitiative(initiative);
    const newInitiative: InitiativeModel = {
      id: initiativeId,
      username: initiative.username,
      title: initiative.title,
      numberOfSupporters: initiative.numberOfSupporters,
      creationDate: initiative.creationDate,
      description: initiative.description,
    };
    return newInitiative;
  }
);

export const supportInitiativeThunkAction = createAsyncThunk(
  "initiatives/supportInitiativeThunkAction",
  async ({ id, model }: { id: number; model: SupportersModel }) => {
    await initiativesService.supportInitiative(id, model);
    const updatedInitiative: SupportersUpdatingModel = {
      initiativeId: id,
      numberOfSupporters: model.numberOfSupporters,
    };
    return updatedInitiative;
  }
);

export const deleteInitiativeThunkAction = createAsyncThunk(
  "initiatives/deleteInitiativeThunkAction",
  async (id: number) => {
    await initiativesService.deleteInitiativeAsync(id);
    return id;
  }
);

export const updateInitiativeThunkAction = createAsyncThunk(
  "initiatives/updateInitiativeThunkAction",
  async (model: UpdateInitiativeModel) => {
    await initiativesService.updateInitiativeAsync(model);
    return model;
  }
);

export const getInitiativeThunkAction = createAsyncThunk(
  "initiatives/updateInitiativeThunkAction",
  async (id: number) => {
    const data = await initiativesService.getInitiativeByIdAsync(id);
    return data;
  }
);
