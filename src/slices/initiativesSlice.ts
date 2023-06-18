import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getInitiativesThunkAction,
  createInitiativeThunkAction,
  getTopInitiativesThunkAction,
  supportInitiativeThunkAction,
  deleteInitiativeThunkAction,
  updateInitiativeThunkAction,
} from "../actions";
import {
  InitiativeModel,
  SupportersUpdatingModel,
  TopInitiativeModel,
} from "../models";
import {
  InitiativeByIdModel,
  UpdateInitiativeModel,
} from "../models/initiativesModels";
import { getInitiativeThunkAction } from "../actions/initiativesThunkActions";
import { date } from "yup";

export interface State {
  initiatives: { [key: number]: InitiativeModel };
  ids?: number[];
  topInitiatives: { [key: number]: TopInitiativeModel };
  topIds?: number[];
}

const initialState: State = {
  initiatives: {},
  topInitiatives: {},
};

export const initiativesSlice = createSlice({
  name: "initiatives",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getInitiativesThunkAction.fulfilled,
        (state, action: PayloadAction<InitiativeModel[]>) => {
          if (action.payload) {
            action.payload.forEach((initiative) => {
              state.initiatives[initiative.id] = initiative;
            });
            state.ids = action.payload.map((initiative) => initiative.id);
          }
        }
      )
      .addCase(
        getTopInitiativesThunkAction.fulfilled,
        (state, action: PayloadAction<TopInitiativeModel[]>) => {
          if (action.payload) {
            action.payload.forEach((topInitiative) => {
              state.topInitiatives[topInitiative.id] = topInitiative;
            });
            state.topIds = action.payload.map(
              (topInitiative) => topInitiative.id
            );
          }
        }
      )
      .addCase(
        createInitiativeThunkAction.fulfilled,
        (state, action: PayloadAction<InitiativeModel>) => {
          if (action.payload.id) {
            state.initiatives[action.payload.id] = action.payload;
            state.ids?.push(action.payload.id);
          }
        }
      )
      .addCase(
        supportInitiativeThunkAction.fulfilled,
        (state, action: PayloadAction<SupportersUpdatingModel>) => {
          state.initiatives[action.payload.initiativeId].numberOfSupporters =
            action.payload.numberOfSupporters;
        }
      )
      .addCase(
        deleteInitiativeThunkAction.fulfilled,
        (state, action: PayloadAction<number>) => {
          if (
            action.payload &&
            state.initiatives[action.payload] !== undefined
          ) {
            delete state.initiatives[action.payload];
          }
        }
      )
      .addCase(
        updateInitiativeThunkAction.fulfilled,
        (state, action: PayloadAction<UpdateInitiativeModel>) => {
          if (
            action.payload &&
            state.initiatives[action.payload.id] !== undefined
          ) {
            state.initiatives[action.payload.id].title = action.payload.title;
            state.initiatives[action.payload.id].description =
              action.payload.description;
          }
        }
      )
      .addCase(
        getInitiativeThunkAction.fulfilled,
        (state, action: PayloadAction<InitiativeByIdModel[]>) => {
          action.payload.forEach((item) => {
            const id = item.id;
            state.initiatives[id] = {
              id,
              title: item.title,
              creationDate: item.date,
              description: item.description,
            };
          });
        }
      );
  },
});

export default initiativesSlice.reducer;
