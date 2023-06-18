import { SxProps } from "@mui/material";

export const headerToolbar: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: 'center',
};

export const navbarButton: SxProps = {
  backgroundColor: "#0f9200",
  color: "white",
  fontSize: "18px",
  padding: "20px",
  maxHeight: "40px",
  "&:hover": {
    marginBottom: "3px",
    textDecoration: "underline",
  },
};

export const loginButton: SxProps = {
  backgroundColor: "white",
  color: "#0f9200",
  fontSize: "18px",
  minWidth: "150px",
  maxHeight: "80px",
  "&:hover": {
    color: "white",
    backgroundColor: "#0f9200",
    border: "2px solid ",
  },
};

export const hotLine: SxProps = {
  fontSize: "18px",
  marginLeft: "50px",
  marginRight: "30px",
  color: '#505256',
  fontWeight: 700
};

export const userInformationContainer: SxProps = {
  display: "flex",
  alignItems: "center",
};
