import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import { shallowEqual } from "react-redux";
import { Box, Typography } from "@mui/material";

export const useTopInitiatives = (): JSX.Element[] => {
  const topInitiatives = useAppSelector(
    (state: RootState) =>
      state.initiatives.topIds?.map(
        (id) => state.initiatives.topInitiatives[id]
      ),
    shallowEqual
  );
  const numberOfTopInitiatives = topInitiatives?.reduce(
    (sum, initiative) => sum + initiative.numberOfSupporters,
    0
  );
  const topInitiativesBar = topInitiatives?.map((initiative) => {
    const barWidth =
      (initiative.numberOfSupporters / (numberOfTopInitiatives ?? 1)) * 500;

    const bar = (
      <Box sx={{ display: "flex", justifyContent: "flex-start" }} key={initiative.id}>
        <Typography align="left">{`${initiative.title} Автор: ${initiative.username}`}</Typography>
        <Box sx={{ width: barWidth, backgroundColor: "red", height: '40px' }}>Test</Box>;
      </Box>
    );
    return bar;
  });
  return topInitiativesBar ?? [];
};
