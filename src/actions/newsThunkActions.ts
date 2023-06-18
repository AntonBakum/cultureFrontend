import { createAsyncThunk } from "@reduxjs/toolkit";
import { newsService } from "../services";
import {
  NewsModel,
  NewsPaginationModel,
  NewsTransportationModel,
} from "../models";

export const getNewsThunkAction = createAsyncThunk(
  "news/getNewsThunkAction",
  async (model: NewsPaginationModel) => {
    const news = await newsService.getNews(model);
    return news;
  }
);

export const createNewsThunkAction = createAsyncThunk(
  "news/createNewsThunkAction",
  async (newToCreate: NewsTransportationModel) => {
    const formData = new FormData();
    formData.append("content", newToCreate.content);
    formData.append("title", newToCreate.title);
    formData.append("userId", newToCreate.userId.toString());
    formData.append("publicationDate", newToCreate.creationDate);
    if (newToCreate.image) {
      formData.append("image", newToCreate.image);
    }
    const newId = await newsService.createNews(formData);

    const news: NewsModel = {
      id: newId,
      userId: newToCreate.userId,
      title: newToCreate.title,
      content: newToCreate.content,
      publicationDate: newToCreate.creationDate,
    };

    return news;
  }
);

export const getPostByIdThunkAction = createAsyncThunk(
  "news/getPostById",
  async (id: number) => {
    const post = newsService.getPostById(id);
    return post;
  }
);
