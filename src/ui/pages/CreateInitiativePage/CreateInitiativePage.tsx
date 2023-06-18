import { Box } from "@mui/material";
import React from "react";
import { CreateInitiativeElement, CreateNewsElement } from "./Elements";
import {
  InitiativeTransportationModel,
  NewsTransportationModel,
} from "../../../models";

interface Props {
  userId: number;
  creationDate: string;
  newsImage: File | null;
  onInitiativeSubmit: (initiativeData: InitiativeTransportationModel) => void;
  onNewsSubmit: (newsData: NewsTransportationModel) => void;
  onImageUpload: (photoForUpload: File) => void;
}

const CreateInitiativePage = (props: Props): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: '100%',
        padding: "20px",
        boxSizing: "border-box",
        backgroundColor: "#f6f6f6",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      <CreateInitiativeElement
        onSubmit={props.onInitiativeSubmit}
        creationDate={props.creationDate}
        userId={props.userId}
      />
      <CreateNewsElement
        onSubmit={props.onNewsSubmit}
        onImageUpload={props.onImageUpload}
        userId={props.userId}
        publicationDate={props.creationDate}
        newsImage={props.newsImage}
      />
    </Box>
  );
};

export default React.memo(CreateInitiativePage);
