import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import * as styles from "./styles";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  isAuthenticated: boolean;
  onLogoutButtonClick: () => void;
}

const HeaderFragment = (props: Props) => {
  const navigate = useNavigate();
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar sx={styles.headerToolbar}>
        <Stack direction="row">
          <Button variant="text" onClick={() => navigate("/")}>
            На головну
          </Button>
          <Button variant="text" onClick={() => navigate("/news")}>
            Блоги
          </Button>
          <Button variant="text" onClick={() => navigate("/initiatives")}>
            Події
          </Button>
          {props.isAuthenticated && (
            <Button variant="text" onClick={() => navigate("/create")}>
              Створити
            </Button>
          )}
        </Stack>
        <Box sx={styles.userInformationContainer}>
          <Typography sx={styles.hotLine}>
            Гаряча лінія платформи: +380-99-147-35-79
          </Typography>
          {props.isAuthenticated && (
            <IconButton
              onClick={() => navigate("/profile")}
              sx={{ marginRight: "15px" }}
            >
              <Avatar
                sx={{ width: 36, height: 36 }}
                alt="Anton Bakum"
                src={`${process.env.REACT_APP_API_URL}/users/user1.jpg`}
              />
            </IconButton>
          )}
          {props.isAuthenticated ? (
            <Button
              variant="contained"
              onClick={() => {
                props.onLogoutButtonClick();
                navigate("/login");
              }}
            >
              Вийти з акаунту
            </Button>
          ) : (
            <Button variant="contained" onClick={() => navigate("/login")}>
              Увійти в акаунт
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(HeaderFragment);
