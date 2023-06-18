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
import { Link } from "react-router-dom";
import { loginValidationSchema } from "./loginValidationSchema";
import * as styles from "./styles";
import { LoginModel } from "../../../models";

interface Props {
  isPasswordHidden: boolean;
  onPasswordFieldClick: () => void;
  onSubmit: (loginData: LoginModel) => void;
}

const LoginPage = (props: Props): JSX.Element => {
  return (
    <Box sx={styles.loginPageContainer}>
      <Paper sx={styles.formElementsContainer} elevation={3}>
        <Typography variant="h4" sx={styles.formElement}>
          Вхід в особистий кабінет
        </Typography>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginValidationSchema}
          onSubmit={(loginData: LoginModel) => props.onSubmit(loginData)}
        >
          {(formProps) => (
            <form onSubmit={formProps.handleSubmit} style={styles.loginForm}>
              <Box sx={styles.inputsContainer}>
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
                  label="Придумайте пароль (від 5-символів)"
                  type={props.isPasswordHidden ? "password" : "text"}
                  onChange={formProps.handleChange}
                  value={formProps.values.password}
                  error={
                    formProps.touched.password &&
                    Boolean(formProps.errors.password)
                  }
                  helperText={
                    formProps.touched.password && formProps.errors.password
                  }
                  sx={styles.formElement}
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
                />
                <Button type={"submit"} variant="contained">
                  Увійти
                </Button>
              </Box>
            </form>
          )}
        </Formik>
        <Box sx={styles.navigationElementsContainer}>
          <Typography sx={styles.additionalLink}>Забули пароль?</Typography>
          <Typography
            sx={styles.additionalLink}
            component={Link}
            to="/registration"
          >
            Я не маю акаунту. Зареєструватись
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default React.memo(LoginPage);
