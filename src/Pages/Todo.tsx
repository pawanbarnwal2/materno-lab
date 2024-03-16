import {
  Box,
  Button,
  CircularProgress,
  LinearProgress,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import { todoCotext } from "../context/todo-context";
import styled from "styled-components";
import { Delete, DeleteForever, Edit, Padding } from "@mui/icons-material";

function Todo() {
  const taskRef = useRef();
  const [isLoading, setLoading] = useState(false);
  const { data, handleAdd } = useContext(todoCotext);

  const handleSubmit = (id: "") => {
    const data = taskRef.current.value;
    if (data) {
      setLoading(true);

      setTimeout(() => {
        handleAdd({
          id: id ? id : Date.now().toString(),
          item: data,
        });
        setLoading(false);
        taskRef.current.value = null;
      }, 2000);
    }
  };
  const handleEditData = (task) => {
    taskRef.current.value = task.item;
  };

  return (
    <Container>
      <Box
        component={Paper}
        display={"flex"}
        alignItems={"center"}
        gap={"10px"}
        margin={"20px"}
        p={4}
      >
        <TextField inputRef={taskRef} />
        <Button onClick={handleSubmit}>
          {isLoading ? <CircularProgress size={15} /> : <>Add task</>}
        </Button>
      </Box>
      <Box component={Paper} padding={4} margin={2} height={400} width={400}>
        {data.length <= 0 ? (
          <Box display={"flex"} justifyContent={"center"}>
            <Typography color="primary" variant="contained">
              Please add Task
            </Typography>
          </Box>
        ) : (
          <>
            {data.map((item) => {
              return (
                <div key={item.id}>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography>{item.item}</Typography>
                    {/* <Typography>{item.id}</Typography> */}
                    <div>
                      <Button onClick={() => handleEditData(item)}>
                        <Edit fontSize="16px" />
                      </Button>
                      <Button>
                        <DeleteForever fontSize="16px" />
                      </Button>
                    </div>
                  </Box>
                </div>
              );
            })}
          </>
        )}
      </Box>
    </Container>
  );
}

export default Todo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
