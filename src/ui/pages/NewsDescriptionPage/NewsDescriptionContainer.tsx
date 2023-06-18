import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import { NewsDescriptionPage } from "./NewsDescriptionPage";
import { useParams } from "react-router-dom";
import { getPostByIdThunkAction } from "../../../actions";

export const NewsDescriptionContainer = () => {
  const { id } = useParams();
  const postId = +(id ?? "");
  const stateModel = useAppSelector((state: RootState) => {
    return state.news.news[postId];
  });
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPostByIdThunkAction(postId));
  }, [dispatch, postId]);
  return <NewsDescriptionPage post={stateModel} />;
};
