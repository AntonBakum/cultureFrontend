import React, { useEffect } from "react";
import NewsPage from "./NewsPage";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import { shallowEqual } from "react-redux";
import { getNewsThunkAction } from "../../../actions";
import { changePage, changeSearchString } from "../../../slices/newsSlice";

export const NewsPageContainer = (): JSX.Element => {
  const newsState = useAppSelector(
    (state: RootState) => state.news,
    shallowEqual
  );
  const news = newsState.ids?.map((id) => newsState.news[id]);
  const pagination = newsState.pagination;
  const searchString = pagination.searchString;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getNewsThunkAction(pagination));
  }, [dispatch, pagination]);

  return (
    <>
      <NewsPage
        news={news}
        onAddNewsButtonClick={() => dispatch(changePage())}
        searchString={searchString ?? ""}
        onSearchStringClick={() => dispatch(changeSearchString(""))}
        onSearchStringChange={(search: string) =>
          dispatch(changeSearchString(search))
        }
        cleaningNeaded={searchString !== ""}
        onSearchButtonClick={() => dispatch(getNewsThunkAction(pagination))}
      />
    </>
  );
};
