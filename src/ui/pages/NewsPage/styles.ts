import { SxProps } from "@mui/material";

export const mainContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#f6f6f6",
};

export const contentContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "center",
  width: '100%',
  position: 'relative',
};

export const searchFieldContainer: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flexStart",
  minWidth: "0px",
  top: '0px',
  position: 'sticky',
  zIndex: 2
};

export const searchItemsContainer: SxProps = {
  display: "flex",
  alignItems: "center",
  ml: "55px",
  mt: "30px",
  minWidth: "0px",
  flexBasis: "1000px",
  width: '100%',
  background: 'white',
  borderRadius: '30px',
  border: "2px solid #0284FE",
};

export const searchIcon: SxProps = {
  fontSize: "32px",
  color: "#505256",
  marginRight: "10px",
  pt: "20px",
};

export const newsContainer: SxProps = {
  display: "flex",
  justifyContent: "center",
  flex: 1,
  flexWrap: "wrap",
  mt: "30px",
};

export const KeyboardDoubleArrowDownIcon: SxProps = {
  fontSize: "64px",
  color: "#0284FE",
};
