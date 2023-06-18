import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputLabel,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  isOpen: boolean;
  title?: string;
  description?: string;
  onTitleChange: (newTitle: string) => void;
  onDescriptionChange: (newDescription: string) => void;
  onSendClick: () => void;
  onExitClick: () => void;
}

export const UpdateInitiativeDialog = (props: Props) => {
  return (
    <Dialog open={props.isOpen}>
      <DialogTitle>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: "36px" }}>Оновіть ініціативу</Typography>
          <IconButton onClick={props.onExitClick} sx={{ pt: "5px" }}>
            <CloseIcon sx={{ fontSize: "30px" }} />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ height: "500px" }}>
        <Typography sx={{ mt: "28px" }}>Назва ініціативи</Typography>
        <TextField
          fullWidth
          onChange={(e) => props.onTitleChange(e.target.value)}
          sx={{ mt: "15px" }}
        />
        <Typography sx={{ mt: "28px" }}>Опис ініціативи</Typography>
        <TextareaAutosize
          minRows="3"
          value={props.description}
          style={{
            boxSizing: "border-box",
            padding: "12px 19px 14px 19px",
            height: "213px",
            maxHeight: "30vh",
            minWidth: "460px",
            border: "1px solid #A9A9A9",
            borderRadius: "4px",
            fontWeight: "400",
            fontSize: "14px",
            color: "#191919",
            marginTop: "15px",
          }}
        />
      </DialogContent>
      <DialogActions sx={{ mt: "35px" }}>
        <Button variant="contained" onClick={props.onSendClick}>
          Підтвердити
        </Button>
        <Button variant="outlined" onClick={props.onExitClick}>
          Скасувати
        </Button>
      </DialogActions>
    </Dialog>
  );
};
