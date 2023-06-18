import { SxProps } from "@mui/material";

export const homepageNavigationElement: SxProps = {
  display: "flex",
  textDecoration: "none",
  flexDirection: "column",
  alignItems: "center",
  width: "300px",
  height: "400px",
  margin: "10px",
  border: "2px solid #0284FE",
  cursor: "pointer",
  ":hover": {
    boxShadow: 20,
  },
};

export const homeIcon: SxProps = {
  fontSize: "32px",
  color: "#505256",
  marginTop: "30px",
};

export const pageDescription: SxProps = {
  mt: "100px",
  fontWeight: 600,
};
