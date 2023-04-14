import { Box, Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const AddList = (props) => {
  const [information, setInformation] = useState("");

  const { handleAddItem } = props;
  const handleSubmit = (e) => {
    e.preventDefault();

    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      information,
    });

    setInformation("");
  };

  const handleChange = (e) => {
    setInformation(e.target.value);
  };

  return (
    <form handleSubmit={handleSubmit} onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        size="small"
        sx={{
          position: "absolute",
          m: "22% 2% 2% -7%",
          width: "350px",
          background: "#0f182a",
          color: "red",
        }}
        type="text"
        placeholder="Agregar tareas"
        value={information}
        onChange={handleChange}
      />

      <Button
        type="submit"
        disabled={information ? "" : "disabled"}
        variant="contained"
        size="large"
        sx={{
          position: "absolute",
          m: "22% 2% 2% 71%",
          width: "20%",
          ":hover": {
            background: "green",
          },
        }}
      >
        <AddIcon />
      </Button>
    </form>
  );
};

export default AddList;
