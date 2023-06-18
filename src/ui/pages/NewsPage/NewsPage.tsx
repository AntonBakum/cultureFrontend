import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { NewsElement } from "./Elements/NewsElement";
import { NewsModel } from "../../../models";
import { KeyboardDoubleArrowDown, Search, Close } from "@mui/icons-material";
import * as styles from "./styles";
import { useNavigate } from "react-router";

interface Props {
  news?: NewsModel[];
  cleaningNeaded: boolean;
  searchString: string;
  onAddNewsButtonClick: () => void;
  onSearchStringClick: () => void;
  onSearchStringChange: (search: string) => void;
  onSearchButtonClick: () => void;
}

const NewsPage = (props: Props): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Box sx={styles.mainContainer}>
      <Typography
        align="left"
        sx={{ fontSize: "14px", cursor: "pointer", fontWeight: 700 }}
        onClick={() => navigate("/login")}
      >
        Створюйте свої пости в загальному блозі. Натисність сюди щоб доєднатись
        до нас
      </Typography>
      <Box sx={styles.contentContainer}>
        <Box sx={styles.searchFieldContainer}>
          <Box sx={styles.searchItemsContainer}>
            <Search sx={styles.searchIcon} />
            <TextField
              fullWidth
              variant="standard"
              label="Введіть заголовок для пошуку"
              value={props.searchString}
              onChange={(e) => props.onSearchStringChange(e.target.value)}
              sx={{ margin: "20px", ml: "5px", mt: '10px' }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={props.onSearchStringClick}
                      edge="end"
                      sx={{
                        visibility: props.cleaningNeaded ? "visible" : "hidden",
                      }}
                    >
                      <Close />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
        <Box sx={styles.newsContainer}>
          {props.news?.map((e) => (
            <NewsElement new={e} key={e.id} />
          ))}
        </Box>
      </Box>
      {props.news?.length !== 0 && props.news !== undefined && (
        <IconButton
          sx={{ zIndex: 20, mt: "20px" }}
          onClick={props.onAddNewsButtonClick}
        >
          <KeyboardDoubleArrowDown sx={styles.KeyboardDoubleArrowDownIcon} />
        </IconButton>
      )}
    </Box>
  );
};

export default React.memo(NewsPage);
