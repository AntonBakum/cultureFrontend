import axios, { AxiosError } from "axios";
import { NewsModel, NewsPaginationModel } from "../models";
import { axiosInstance } from "./axiosInstance";
import { getNewsThunkAction } from "../actions";

export const getNews = async (
  model: NewsPaginationModel
): Promise<NewsModel[]> =>
  axiosInstance
    .get(`${process.env.REACT_APP_API_URL}/api/news`, {
      params: model,
    })
    .then((response) => response.data);

export const createNews = async (news: FormData): Promise<number> =>
  axiosInstance
    .post(`${process.env.REACT_APP_API_URL}/api/news/create-news`, news)
    .then((response) => {
      getNewsThunkAction({page: 1, pageSize: 3})
      return response.data;
    });

export const getPostById = async (id: number): Promise<NewsModel> => {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/api/news/${id}`)
    .then((r) => r.data)
    .catch((error: AxiosError) => console.log(error.cause));
};
