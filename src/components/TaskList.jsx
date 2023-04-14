import { Button, Typography } from "@mui/material";

import { Checkboxing } from "./Checkboxing";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const TaskList = (props) => {
  const { description, setdescription } = props;
  console.log(description);

  const onClickRemoveItem = () => {
    const updateList = description.filter((item) => !item.done);
    setdescription(updateList);
  };

  const onChangeStatus = (e) => {
    const { name, checked } = e.target;
    const updateList = description.map((item) => ({
      ...item,
      done: item.id === name ? checked : item.done,
    }));
    console.log(updateList);
    setdescription(updateList);
  };

  const checking = description.map((item) => (
    <Checkboxing data={item} onChange={onChangeStatus} key={item.id} />
  ));

  return (
    <Typography sx={{ alignContent: "center", mt: "20px", fontSize: "25px" }}>
      {description.length ? checking : "No hay tareas..."}
      {description.length ? (
        <p>
          <Button
            size="small"
            variant="contained"
            sx={{
              display: "flex",
              flexDirection: "row",
              ml: "37%",
              mt: "60px",
              background: "#0f182a",
              ":hover": {
                background: "red",
              },
            }}
            onClick={onClickRemoveItem}
          >
            Eliminar
          </Button>
        </p>
      ) : null}
    </Typography>
  );
};

export default TaskList;
