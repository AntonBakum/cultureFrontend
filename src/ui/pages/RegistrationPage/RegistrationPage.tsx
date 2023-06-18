import { Email, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { registrationValidationSchema } from "./registrationValidationSchema";
import * as styles from "./styles";
import { RegistrationModel } from "../../../models";

interface Props {
  isPasswordHidden: boolean;
  onPasswordFieldClick: () => void;
  onSubmit: (registrationData: RegistrationModel) => void;
}

const RegistrationPage = (props: Props): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Box sx={styles.loginPageContainer}>
      <Paper sx={styles.formElementsContainer} elevation={3}>
        <Typography variant="h4" sx={{ marginBottom: "35px" }}>
          Реєстрація
        </Typography>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={registrationValidationSchema}
          onSubmit={(registrationData: RegistrationModel) =>
            props.onSubmit(registrationData)
          }
        >
          {(formProps) => (
            <form
              onSubmit={formProps.handleSubmit}
              style={styles.registrationForm}
            >
              <Box sx={styles.inputsContainer}>
                <TextField
                  id="name"
                  label="ПІБ"
                  onChange={formProps.handleChange}
                  value={formProps.values.name}
                  error={
                    formProps.touched.name && Boolean(formProps.errors.name)
                  }
                  helperText={formProps.touched.name && formProps.errors.name}
                />
                <TextField
                  id="email"
                  label="Електронна пошта"
                  onChange={formProps.handleChange}
                  value={formProps.values.email}
                  error={
                    formProps.touched.email && Boolean(formProps.errors.email)
                  }
                  helperText={formProps.touched.email && formProps.errors.email}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email sx={{ color: "#505256" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  id="password"
                  type={props.isPasswordHidden ? "password" : "text"}
                  label="Придумайте пароль (від 5-символів)"
                  onChange={formProps.handleChange}
                  value={formProps.values.password}
                  error={
                    formProps.touched.password &&
                    Boolean(formProps.errors.password)
                  }
                  helperText={
                    formProps.touched.password && formProps.errors.password
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={props.onPasswordFieldClick}
                          edge="end"
                        >
                          {props.isPasswordHidden ? (
                            <VisibilityOff sx={{ color: "#505256" }} />
                          ) : (
                            <Visibility sx={{ color: "#505256" }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={styles.formElement}
                />
                <Button type="submit" variant="contained">
                  Створити аккаунт
                </Button>
              </Box>
            </form>
          )}
        </Formik>
        <Typography
          sx={{ cursor: "pointer", borderBottom: '1px solid black' }}
          onClick={() => navigate("/login")}
        >
          На головну
        </Typography>
      </Paper>
    </Box>
  );
};

export default React.memo(RegistrationPage);
