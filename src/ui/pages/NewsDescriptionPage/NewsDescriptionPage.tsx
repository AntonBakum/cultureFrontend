import { Box, Typography } from "@mui/material";
import { NewsModel } from "../../../models";

function splitArrayIntoChunks(chunkSize: number, array?: string[]): string[][] {
  const result: string[][] = [];

  const chunkedArray = array
    ?.map((item, index) => {
      if (index % chunkSize === 0) {
        return array.slice(index, index + chunkSize);
      }
      return [];
    })
    .filter((item) => item.length !== 0);

  result.push(...(chunkedArray ?? []));

  return result;
}

interface Props {
  post: NewsModel;
}

export const NewsDescriptionPage = (props: Props) => {
  const splittedContent = props.post?.content.split(".");
  const chunkedArray = splitArrayIntoChunks(4, splittedContent);
  const condition =
    props.post?.image !== undefined &&
    props.post?.image.includes(`${process.env.REACT_APP_API_URL}`, 0);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f6f6f6",
        width: "100%",
        height: "100%",
      }}
    >
      <Box sx={{ maxWidth: "800px" }}>
        <Typography variant="h3" sx={{ mt: "30px" }}>
          {props.post?.title ?? "-"}
        </Typography>
        <Typography variant="body1" align="left" sx={{ mt: "30px" }}>
          {`Пост від :        ${props.post?.authorName}`}
        </Typography>
        {props.post?.image && (
          <img
            style={{
              width: "680px",
              height: "500px",
              borderRadius: "30px",
              marginTop: "30px",
              border: "2px solid #0284FE",
            }}
            alt="1"
            src={
              condition
                ? props.post?.image
                : `${process.env.REACT_APP_API_URL}/placeholders/no-image.png`
            }
          />
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "20px",
            mt: "30px",
          }}
        >
          {chunkedArray?.map((paragraph) => (
            <Typography
              align="left"
              paragraph={true}
              key={chunkedArray.indexOf(paragraph)}
              sx={{ fontSize: "1" }}
            >
              {paragraph.map((r) => r + ".")}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
