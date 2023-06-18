import { SxProps } from "@mui/material";

export const pageContainer: SxProps = {
  display: "flex",
  width: "100%",
  boxSizing: "border-box",
  justifyContent: "flex-start",
  position: "relative",
  backgroundColor: "#f6f6f6",
  height: "100%",
  marginLeft: "15px",
};

export const initiativesContainer: SxProps = {
  display: "flex",
  justifyContent: "center",
  flex: 1,
  flexWrap: "wrap",
  mr: "30px",
  backgroundColor: "#EEF7FF",
  border: "3px solid #0284FE",
  boxSizing: "border-box",
  position: "relative",
};

export const circularProgress: SxProps = {
  position: "absolute",
  margin: "auto",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
};

export const topInitiatives: SxProps = {
  position: "relative",
  minWidth: "690px",
  height: "500px",
  display: "flex",
  flexDirection: "column",
  rowGap: "20px",
  mt: "50px",
  alignItems: "center",
  mr: "50px",
  backgroundColor: "#EEF7FF",
  border: "3px solid #0284FE",
  boxSizing: "border-box",
};
