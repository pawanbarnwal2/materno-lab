import React, { createContext, useState } from "react";

export const todoCotext = createContext({});

type todoData = { id: string; item: string };

function TodoContext({ children }) {
  const [data, setData] = useState<todoData[]>([]);
  const handleAdd = (data: todoData) => {
    setData((prevData) => [...prevData, data]);
  };
  const handleUpdate = (updatedData: todoData) => {
    const prevValue = data.findIndex((i) => i.id === updatedData.id);
    const restData = data.filter((i) => i.id !== updatedData.id);
    const updatedState = restData.splice(prevValue, 0, updatedData);
    setData([...updatedState]);
  };
  return (
    <todoCotext.Provider value={{ data, handleAdd }}>
      {children}
    </todoCotext.Provider>
  );
}

export default TodoContext;
