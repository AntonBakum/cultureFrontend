import {
  Avatar,
  Box,
  ListItemIcon,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";
import { UpdateProfileElement } from "./Elements/UpdateProfileElement";
import { AccountBox, ContentPaste } from "@mui/icons-material";
import { MyInitiativesElement } from "./Elements/MyInitiativesElement";
import React from "react";
import { UpdateInitiativeDialogContainer } from "./Elements/UpdateInitiativeDialogContainer";

export interface User {
  id: number;
  phone?: string;
  email: string;
  name?: string;
  nickName?: string;
}

interface Props {
  selectedItem: string;
  userInfo: User;
  changeSelectedItem: (item: string) => void;
  onPhoneChange: (newPhone: string) => void;
  onEmailChange: (email: string) => void;
  onNickNameChange: (nickname: string) => void;
  onNameChange: (name: string) => void;
  onUpdateUserButtonClick: () => void;
  onCleanDataButtonClick: () => void;
}

const ProfilePage = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        boxSizing: "border-box",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f6f6f6",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          width: "1440px",
          height: "600px",
          minHeight: "300px",
          overflowY: "auto",
          boxSizing: "border-box",
          flexWrap: "nowrap",
          border: "3px solid #0284FE",
        }}
      >
        <Box
          sx={{
            width: "25%",
            minWidth: "350px",
            height: "100%",
            display: "flex",
            borderRight: "3px solid #0284FE",
            boxSizing: "border-box",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              boxSizing: "border-box",
              alignItems: "center",
              borderBottom: "3px solid #0284FE",
            }}
          >
            <Avatar
              sx={{ width: 100, height: 100, mt: "25px" }}
              alt="Anton Bakum"
              src={`${process.env.REACT_APP_API_URL}/users/user1.jpg`}
            />
            <Typography
              sx={{ fontSize: "18px", fontWeight: 700, mt: "15px", mb: "25px" }}
            >
              {props.userInfo.name}
            </Typography>
          </Box>
          <MenuList sx={{ width: "100%", mt: "15px" }}>
            <MenuItem
              sx={{ height: "50px" }}
              onClick={() => props.changeSelectedItem("1")}
            >
              <ListItemIcon>
                <AccountBox sx={{ color: "#0284FE" }} fontSize="medium" />
              </ListItemIcon>
              Дані профілю
            </MenuItem>
            <MenuItem
              sx={{ height: "50px" }}
              onClick={() => props.changeSelectedItem("2")}
            >
              <ListItemIcon>
                <ContentPaste sx={{ color: "#0284FE" }} fontSize="medium" />
              </ListItemIcon>
              Мої ініціативи
            </MenuItem>
          </MenuList>
        </Box>
        {props.selectedItem === "1" ? (
          <UpdateProfileElement
            userInfo={props.userInfo}
            onEmailChange={props.onEmailChange}
            onNickNameChange={props.onNickNameChange}
            onNameChange={props.onNameChange}
            onPhoneChange={props.onPhoneChange}
            onUpdateUserButtonClick={props.onUpdateUserButtonClick}
            onCleanDataButtonClick={props.onCleanDataButtonClick}
          />
        ) : (
          <MyInitiativesElement />
        )}
      </Paper>
      <UpdateInitiativeDialogContainer />
    </Box>
  );
};

export default React.memo(ProfilePage);
