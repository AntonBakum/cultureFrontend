import { SxProps } from "@mui/material";

export const card: SxProps = {
  borderRadius: '30px',
  width: "320px",
  height: "500px",
  overflowY: "auto",
  margin: "10px",
  border: "2px solid #505256",
  "&:hover": {
    boxShadow: 20,
  },
};
export const cardContent: SxProps = {
  display: "flex",
  flexDirection: "column",
  rowGap: "10px",
  justifyContent: "çenter",
  alignItems: "flex-start",
  minHeight: '300px',
  maxHeight: "300px",
  overflowY: 'auto'
};

export const cardHelpText: SxProps = {
  color: "#505256",
  fontSize: "12px",
  fontWeight: 700,
};

export const description: SxProps = { color: "#505256", fontSize: "14px" };

export const numberOfSupporters: SxProps = {
  width: 56,
  height: 56,
  fontSize: "20px",
  bgcolor: "#EEF7FF",
  color: "#0284FE",
  marginRight: "10px",
};

export const initiativeNumber: SxProps = {
  fontSize: "16px",
  fontWeight: 700,
  color: "#0284FE",
};

export const cardHeaders: SxProps = {
  display: "flex",
  justifyContent: "space-between",
};

export const initiativeName: SxProps = {
  fontSize: "16px",
  fontWeight: 600,
};

export const numberOfSupportersContainer: SxProps = {
  display: "flex",
  alignItems: "center",
  mb: "20px",
};
