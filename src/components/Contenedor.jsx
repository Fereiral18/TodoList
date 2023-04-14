import { Container, ListItem, Typography } from "@mui/material";
import TaskList from "./TaskList";
import AddList from "./AddList";
import { useState } from "react";

export const Contenedor = () => {
  const [description, setdescription] = useState([]);

  const handleAddItem = (addItem) => {
    setdescription([...description, addItem]);
  };

  document.body.style.backgroundColor = "#1e2a3b";
  return (
    <Container
      sx={{
        m: "auto",
        mt: "10%",
        width: "500px",
        height: "500px",
        borderRadius: "30px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          display: "flex",
          padding: "10px",
          ml: "-26px",
          position: "absolute",
          justifyContent: "center",
          height: "80px",
          width: "480px",
          color: "white",
          borderRadius: "30px",
          background: "#334155",
          fontSize: "45px",
        }}
      >
        ToDo List: Luis fereira
      </Typography>
      <ListItem
        sx={{
          m: "10px 50px 2px 20px",
          color: "white",
        }}
      >
        <AddList handleAddItem={handleAddItem} />
      </ListItem>

      <ListItem
        sx={{
          m: "120px 30px 2px 30px",
          fontSize: "20px",
          color: "white",
        }}
      >
        <TaskList description={description} setdescription={setdescription} />
      </ListItem>
    </Container>
  );
};
