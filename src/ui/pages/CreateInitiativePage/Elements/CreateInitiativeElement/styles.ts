import { SxProps } from "@mui/material";

export const formElementsContainer: SxProps = {
    minHeight: "500px",
    maxHeight: "550px",
    overflowY: 'auto',
    width: "420px",
    display: "flex",
    flexDirection: "column",
    rowGap: "15px",
    alignItems: "center",
    padding: "36px",
    marginBottom: '20px',
    mt: '100px'
  };
  
  export const formElement: SxProps = {
    marginBottom: "35px",
  };
  
  export const multilineFormElement: SxProps = {
    marginTop: "15px",
    '& .MuiOutlinedInput-root': {
        minHeight: '100px',
    }
  }
  
export const initiativeForm = { minWidth: "400px", marginBottom: "15px" };

export const inputsContainer: SxProps = {
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",
  };
  