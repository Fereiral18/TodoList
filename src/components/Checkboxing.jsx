import { Checkbox, Stack, Typography } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import React from "react";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
export const Checkboxing = (props) => {
  const {
    onChange,
    data: { id, information, done },
  } = props;

  return (
    <>
      <Checkbox
        sx={{ ml: "-40px", mt: "32px", mb: "-35px" }}
        name={id}
        hecked={done}
        onChange={onChange}
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />

      <Typography
        sx={{
          display: "flex",
          mb: "-30px",
          background: "black",
          width: "360px",
          height: "30px",
          borderRadius: "10px",
          justifyContent: "center",
        }}
      >
        {information}
      </Typography>
    </>
  );
};
