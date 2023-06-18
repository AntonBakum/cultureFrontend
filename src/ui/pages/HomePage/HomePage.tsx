import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as styles from "./styles";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ArticleIcon from "@mui/icons-material/Article";
import CreateIcon from "@mui/icons-material/Create";

interface Props {
  isAuthenticated: boolean;
}

const HomePage = (props: Props): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
        backgroundColor: "#f6f6f6",
        padding: "20px",
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Paper
        sx={styles.homepageNavigationElement}
        onClick={() => navigate('news')}
      >
        <NewspaperIcon sx={styles.homeIcon} />
        <Typography sx={styles.pageDescription}>
          Тут ви можете побачити актуальні пости інших користувачів
        </Typography>
      </Paper>
      <Paper
        sx={styles.homepageNavigationElement}
        onClick={() => navigate('initiatives')}
      >
        <ArticleIcon sx={styles.homeIcon} />
        <Typography sx={styles.pageDescription}>
          Тут ви можете підтримати культурні ініціативи, створені іншими
          небайдужими людьми
        </Typography>
      </Paper>
      {props.isAuthenticated ? (
        <Paper
          sx={styles.homepageNavigationElement}
          onClick={() => navigate('create')}
        >
          <CreateIcon sx={styles.homeIcon} />
          <Typography sx={styles.pageDescription}>
            Створіть свою культурну ініціативу!
          </Typography>
        </Paper>
      ) : (
        <Paper
          sx={styles.homepageNavigationElement}
          onClick={() => navigate('login')}
        >
          <CreateIcon sx={styles.homeIcon} />
          <Typography sx={styles.pageDescription}>
            Увійдіть і створіть свою культурну ініціативу!
          </Typography>
        </Paper>
      )}
    </Box>
  );
};

export default React.memo(HomePage);
