import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import { Formik } from "formik";
import * as styles from "./styles";
import {
  CreateNewsModel,
  NewsTransportationModel,
} from "../../../../../models";
import FileUploadIcon from "@mui/icons-material/FileUpload";

interface Props {
  userId?: number;
  publicationDate: string;
  newsImage: File | null;
  onSubmit: (newsData: NewsTransportationModel) => void;
  onImageUpload: (photoToUpload: File) => void;
}

export const CreateNewsElement = (props: Props): JSX.Element => {
  const imagePicker = useRef<HTMLInputElement | null>(null);
  return (
    <Paper sx={styles.formElementsContainer} elevation={3}>
      <Typography variant="h5" sx={styles.formElement}>
        Додати новий пост до загального блогу
      </Typography>
      <Formik
        initialValues={{
          title: "",
          content: "",
        }}
        onSubmit={(newsData: CreateNewsModel) => {
          const newToCreate: NewsTransportationModel = {
            userId: props.userId ?? 0,
            image: props.newsImage,
            creationDate: props.publicationDate,
            title: newsData.title,
            content: newsData.content,
          };
          props.onSubmit(newToCreate);
        }}
      >
        {(formProps) => (
          <form onSubmit={formProps.handleSubmit} style={styles.initiativeForm}>
            <Box sx={styles.inputsContainer}>
              <TextField
                id="title"
                label="Назва посту"
                onChange={formProps.handleChange}
                value={formProps.values.title}
                error={
                  formProps.touched.title && Boolean(formProps.errors.title)
                }
                helperText={formProps.touched.title && formProps.errors.title}
              />
              <TextField
                id="content"
                multiline
                label="Текст посту"
                onChange={formProps.handleChange}
                value={formProps.values.content}
                error={
                  formProps.touched.content && Boolean(formProps.errors.content)
                }
                helperText={
                  formProps.touched.content && formProps.errors.content
                }
                sx={styles.multilineFormElement}
              />
              <Button type="submit" variant="contained">
                Додати
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  if (imagePicker.current) imagePicker.current.click();
                }}
                startIcon={<FileUploadIcon />}
              >
                Завантажте зображення для посту
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      <input
        type="file"
        accept="image/*, .png, .jpg"
        style={styles.imageInput}
        ref={imagePicker}
        onChange={(e) => {
          if (e.target.files) {
            props.onImageUpload(e.target.files[0]);
          }
        }}
      />
      {props.newsImage?.name}
    </Paper>
  );
};
