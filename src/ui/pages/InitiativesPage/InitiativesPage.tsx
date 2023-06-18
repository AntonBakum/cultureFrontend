import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { InitiativeModel, SupportersModel } from "../../../models";
import { InitiativeElement, TopInitiativesElement, Item } from "./Elements";
import * as styles from "./styles";

interface Props {
  userId: number;
  initiatives?: InitiativeModel[];
  topInitiativesDataset?: Item[];
  isAuthenticated: boolean;
  onSupportInitiativeButtonClick: (id: number, model: SupportersModel) => void;
}

const InitiativesPage = (props: Props): JSX.Element => {
  return (
    <Box sx={styles.pageContainer}>
      <Box sx={styles.initiativesContainer}>
        {props.initiatives === undefined ? (
          <CircularProgress sx={styles.circularProgress} />
        ) : (
          <>
            {props.initiatives?.map((initiative) => (
              <InitiativeElement
                key={initiative.id}
                initiative={initiative}
                onClick={props.onSupportInitiativeButtonClick}
                userId={props.userId}
                isAuthenticated={props.isAuthenticated}
              />
            ))}
          </>
        )}
      </Box>
      {/* <Box sx={styles.topInitiatives}>
        {props.initiatives === undefined ? (
          <CircularProgress sx={styles.circularProgress} />
        ) : (
          <>
            <Typography sx={{ fontWeight: 700 }}>
              Топ подій за час роботи платформи
            </Typography>
            <TopInitiativesElement
              topInitiativesDataset={props.topInitiativesDataset}
            />
          </>
        )}
      </Box> */}
    </Box>
  );
};

export default React.memo(InitiativesPage);
