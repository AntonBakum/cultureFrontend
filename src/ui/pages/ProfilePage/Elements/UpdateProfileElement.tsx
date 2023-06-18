import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import { User } from "../ProfilePage";

interface Props {
  userInfo: User;
  onPhoneChange: (newPhone: string) => void;
  onEmailChange: (email: string) => void;
  onNickNameChange: (nickname: string) => void;
  onNameChange: (name: string) => void;
  onUpdateUserButtonClick: () => void;
  onCleanDataButtonClick: () => void;
}

export const UpdateProfileElement = (props: Props) => {
  return (
    <Box
      sx={{
        width: "75%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
        paddingLeft: "55px",
        paddingRight: "55px",
        flexWrap: "wrap",
        backgroundColor: "#EEF7FF",
      }}
    >
      <Typography
        sx={{ fontSize: "24px", fontWeight: 700, mt: "25px" }}
        align="left"
      >
        Налаштування акаунту
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              alignItems: "flex-start",
              marginRight: "20px",
              rowGap: "20px",
            }}
          >
            <>
              <InputLabel sx={{ color: "black" }}>Юзернейм</InputLabel>
              <TextField
                id="username"
                fullWidth
                onChange={(event) => props.onNickNameChange(event.target.value)}
                value={props.userInfo.nickName}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    background: "#f6f6f6",
                  },
                }}
              />
            </>
            <>
              <InputLabel sx={{ color: "black" }}>Телефон</InputLabel>
              <TextField
                id="phone"
                fullWidth
                onChange={(event) => props.onPhoneChange(event.target.value)}
                value={props.userInfo.phone}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    background: "#f6f6f6",
                  },
                }}
              />
            </>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              alignItems: "flex-start",
              rowGap: "20px",
            }}
          >
            <>
              <InputLabel sx={{ color: "black" }}>ПІБ</InputLabel>
              <TextField
                id="name"
                fullWidth
                onChange={(event) => props.onNameChange(event.target.value)}
                value={props.userInfo.name}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    background: "#f6f6f6",
                  },
                }}
              />
            </>
            <>
              <InputLabel sx={{ color: "black" }}>Електронна пошта</InputLabel>
              <TextField
                id="email"
                fullWidth
                onChange={(event) => props.onEmailChange(event.target.value)}
                value={props.userInfo.email}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    background: "#f6f6f6",
                  },
                }}
              />
            </>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            mt: "45px",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{ mr: "45px", minWidth: "200px", height: "40px" }}
            onClick={props.onUpdateUserButtonClick}
          >
            Оновити дані
          </Button>
          <Button
            variant="outlined"
            sx={{ minWidth: "200px", height: "40px" }}
            onClick={props.onCleanDataButtonClick}
          >
            Скасувати
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
