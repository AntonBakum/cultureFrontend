import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { Formik } from "formik";
import { createInitiativeValidationSchema } from "./createInitiativeValidationSchema";
import * as styles from "./styles";
import { CreateInitiativeModel, InitiativeTransportationModel } from "../../../../../models";

interface Props {
  userId: number;
  creationDate: string;
  onSubmit: (initiativeData: InitiativeTransportationModel) => void;
}

export const CreateInitiativeElement = (props: Props): JSX.Element => {
  return (
    <Paper sx={styles.formElementsContainer} elevation={3}>
      <Typography variant="h5" sx={styles.formElement}>
        Створити нову подію
      </Typography>
      <Formik
        initialValues={{
          username: "",
          title: "",
          description: "",
        }}
        // validationSchema={createInitiativeValidationSchema}
        onSubmit={(initiativeData: CreateInitiativeModel) => {
          const initiative: InitiativeTransportationModel = {
            userId: props.userId,
            username: initiativeData.username,
            title: initiativeData.title,
            description: initiativeData.description,
            creationDate: props.creationDate,
            numberOfSupporters: 0,
          }
          props.onSubmit(initiative)
        }}
      >
        {(formProps) => (
          <form onSubmit={formProps.handleSubmit} style={styles.initiativeForm}>
            <Box sx={styles.inputsContainer}>
              <TextField
                id="username"
                label="Ім'я"
                onChange={formProps.handleChange}
                value={formProps.values.username}
                error={
                  formProps.touched.username &&
                  Boolean(formProps.errors.username)
                }
                helperText={
                  formProps.touched.username && formProps.errors.username
                }
              />
              <TextField
                id="title"
                label="Назва"
                onChange={formProps.handleChange}
                value={formProps.values.title}
                error={
                  formProps.touched.title && Boolean(formProps.errors.title)
                }
                helperText={formProps.touched.title && formProps.errors.title}
              />
              <TextField
                id="description"
                multiline
                label="Опиc"
                onChange={formProps.handleChange}
                value={formProps.values.description}
                error={
                  formProps.touched.description &&
                  Boolean(formProps.errors.description)
                }
                helperText={
                  formProps.touched.description && formProps.errors.description
                }
                sx={styles.multilineFormElement}
              />
              <Button type="submit" variant="contained">
                Створити
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Paper>
  );
};
