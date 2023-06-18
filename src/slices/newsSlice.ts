import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createNewsThunkAction,
  getNewsThunkAction,
  getPostByIdThunkAction,
} from "../actions";
import { NewsModel, NewsPaginationModel } from "../models";

interface State {
  news: { [key: number]: NewsModel };
  ids?: number[];
  pagination: NewsPaginationModel;
}

const initialState: State = {
  news: {},
  ids: [],
  pagination: {
    page: 1,
    pageSize: 2,
    searchString: "",
  },
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    changePage: (state) => {
      state.pagination.page++;
    },
    changeSearchString: (state, action: PayloadAction<string>) => {
      state.pagination.searchString = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getNewsThunkAction.fulfilled,
        (state, action: PayloadAction<NewsModel[]>) => {
          if (action.payload) {
            action.payload.forEach((news) => {
              state.news[news.id] = {
                id: news.id,
                userId: news.userId,
                title: news.title,
                content: news.content,
                publicationDate: news.publicationDate,
                image: news.image,
                authorName: news.authorName,
              };
            });
            const payloadIds = action.payload.map((news) => news.id);
            state.ids = state.ids
              ?.filter((id) => !payloadIds.includes(id))
              .concat(payloadIds);
            console.log(state.ids);
          }
        }
      )
      .addCase(
        createNewsThunkAction.fulfilled,
        (state, action: PayloadAction<NewsModel>) => {
          state.news[action.payload.id] = {
            id: action.payload.id,
            userId: action.payload.userId,
            title: action.payload.title,
            content: action.payload.content,
            publicationDate: action.payload.publicationDate,
            image: action.payload.image,
            authorName: action.payload.authorName,
          };
          state.ids?.push(action.payload.id);
        }
      )
      .addCase(
        getPostByIdThunkAction.fulfilled,
        (state, action: PayloadAction<NewsModel>) => {
          if (action.payload) {
            state.news[action.payload.id] = action.payload;
          }
        }
      );
  },
});

export const { changePage, changeSearchString } = newsSlice.actions;
export default newsSlice.reducer;
