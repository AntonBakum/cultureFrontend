import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { NewsModel } from "../../../../models";
import { useNavigate } from "react-router";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Props {
  new: NewsModel;
}

export const NewsElement = (props: Props): JSX.Element => {
  const condition =
    props.new.image !== undefined &&
    props.new.image.includes(`${process.env.REACT_APP_API_URL}`, 0);
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        borderRadius: "30px",
        width: "400px",
        height: "500px",
        margin: "30px",
        border: "2px solid #0284FE",
        "&:hover": {
          boxShadow: 20,
        },
      }}
    >
      <CardMedia
        sx={{ height: "250px", mb: "10px", borderBottom: "1px solid black" }}
        image={
          condition
            ? props.new.image
            : `${process.env.REACT_APP_API_URL}/placeholders/no-image.png`
        }
        title={`${props.new.id}new`}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "10px",
          justifyContent: "çenter",
          alignItems: "flex-start",
          minHeight: "100px",
          maxHeight: "100px",
          overflowY: "auto",
        }}
      >
        <Typography
          sx={{ color: "#505256", fontSize: "18px", fontWeight: 700 }}
          align="left"
        >
          {props.new.title}
        </Typography>
        <Typography sx={{ color: "#828282", fontSize: "12px" }} align="left">
          {props.new.publicationDate}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{ width: "400px" }}
          onClick={() => navigate(`/news/${props.new.id}`)}
          endIcon={<ArrowForwardIosIcon/>}
        >
          Дізнатись більше
        </Button>
      </CardActions>
    </Card>
  );
};
