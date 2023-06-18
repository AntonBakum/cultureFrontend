import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";

interface ItemProps {
  id: number;
  date: string;
  title: string;
  OnEditButtonClick: () => void;
  OnDeleteButtonClick: (id: number) => void;
}

interface Item {
  id: number;
  date: string;
  title: string;
}

const InitiativeItem = (props: ItemProps) => {
  return (
    <Paper
      sx={{
        width: "90%",
        minHeight: "120px",
        backgroundColor: "#f6f6f6",
        display: "flex",
        flexDirection: "column",
        pl: "15px",
      }}
      elevation={3}
    >
      <Typography sx={{ fontSize: "14px" }} align="left">
        {props.date}
      </Typography>
      <Typography
        align="left"
        sx={{ fontSize: "16px", mt: "10px", fontWeight: 700 }}
      >
        {props.title}
      </Typography>
      <Box sx={{ mt: "15px" }}>
        <Button
          variant="contained"
          sx={{ ml: "650px", mr: "25px" }}
          onClick={props.OnEditButtonClick}
        >
          Редагувати
        </Button>
        <IconButton
          sx={{ bgcolor: "pink" }}
          onClick={() => props.OnDeleteButtonClick(props.id)}
        >
          <Delete sx={{ color: "red" }} />
        </IconButton>
      </Box>
    </Paper>
  );
};

interface Props {
  initiatives: Item[];
  onDeleteButtonClick: (id: number) => void;
  onEditButtonClick: () => void;
}

export const MyInitiativesElement = (props: Props) => {
  return (
    <Box
      sx={{
        width: "75%",
        display: "flex",
        flexDirection: "column",
        rowGap: "20px",
        paddingLeft: "55px",
        paddingRight: "55px",
        flexWrap: "nowrap",
        overflowY: "auto",
        pt: "35px",
        pb: "25px",
        backgroundColor: "#EEF7FF",
      }}
    >
      {props.initiatives.map((item) => (
        <InitiativeItem
          title={item.title}
          id={item.id}
          date={item.date}
          OnDeleteButtonClick={props.onDeleteButtonClick}
          OnEditButtonClick={props.onEditButtonClick}
        />
      ))}
    </Box>
  );
};
