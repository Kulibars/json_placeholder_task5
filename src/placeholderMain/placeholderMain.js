import { PlaceholderMainLayout } from "../ul/placeholderMainLayout";
import { useEffect, useState } from "react";
import { TODO_URL } from "../url/jsonplaceholder";

const PlaceholderMain = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(TODO_URL, {
      method: "GET",
    })
      .then((loadedTodos) => loadedTodos.json())
      .then((todos) => {
        setTodos(todos);
        console.log({ todos });
      });
  }, []);

  return <PlaceholderMainLayout todos={todos} />;
};

export default PlaceholderMain;
