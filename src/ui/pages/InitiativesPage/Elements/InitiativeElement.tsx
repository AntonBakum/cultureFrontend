import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import * as styles from "./styles";
import { InitiativeModel, SupportersModel } from "../../../../models";

interface Props {
  userId: number;
  initiative: InitiativeModel;
  isAuthenticated: boolean;
  onClick: (id: number, model: SupportersModel) => void;
}

export const InitiativeElement = (props: Props): JSX.Element => {
  return (
    <Card sx={styles.card}>
      <CardHeader
        sx={{ maxHeight: "100px" }}
        title={
          <Box sx={styles.cardHeaders}>
            <Typography
              sx={styles.initiativeNumber}
            >{`№${props.initiative.id}`}</Typography>
            <Typography sx={styles.initiativeName} align="right">
              {props.initiative.title}
            </Typography>
          </Box>
        }
      />
      <CardContent sx={styles.cardContent}>
        <Typography sx={styles.cardHelpText}>
          {`Дата створення: ${props.initiative.creationDate}`}
        </Typography>
        <Typography sx={styles.cardHelpText}>
          {`Автор: ${props.initiative.username}`}
        </Typography>
        <Box sx={{ height: "200px" }}>
          <Typography sx={styles.description} align="left">
            {props.initiative.description}
          </Typography>
        </Box>
        <Box sx={styles.numberOfSupportersContainer}>
          <Avatar sx={styles.numberOfSupporters} variant="rounded">
            {props.initiative.numberOfSupporters}
          </Avatar>
          <Typography
            sx={{ ...styles.cardHelpText, fontWeight: 700, fontSize: "16px" }}
            align="left"
          >
            особи долучилось
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          disabled={!props.isAuthenticated}
          onClick={() => {
            const newNumber = (props.initiative.numberOfSupporters ?? 0) + 1;
            props.onClick(props.initiative.id, {
              userId: props.userId,
              numberOfSupporters: newNumber,
            });
          }}
        >
          Підтримати подію
        </Button>
      </CardActions>
    </Card>
  );
};
