import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#f6f6f6",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "16px",
        },
      },
      variants: [
        {
          props: { variant: "text" },
          style: {
            color: "#505256",
            textTransform: "none",
            "&:hover": {
              color: "#191919",
              backgroundColor: "transparent",
              fontWeight: 700,
            },
          },
        },
        {
          props: { variant: "contained" },
          style: {
            textTransform: "none",
            backgroundColor: "#0284FE",
            "&:hover": {
              backgroundColor: "#0284FE",
              fontWeight: 700,
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            textTransform: "none",
            backgroundColor: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#FFFFF",
              fontWeight: 700,
            },
          },
        },
      ],
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#191919',
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '14px'
        }
      }
    }
  },
});

export { theme };
