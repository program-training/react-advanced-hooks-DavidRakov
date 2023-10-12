import { useLocalStorage } from "../hooks/UseLocalStorageHook";

const AddTodoToStorage = () => {
  const { value, setStoredValue, removeStoredValue } = useLocalStorage(
    "todo",
    "now todos"
  );

  const todo = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };
  return (
    <div>
      <p>TODO: {value}</p>
      <br />
      <button onClick={() => setStoredValue(JSON.stringify(todo))}>
        add todo
      </button>
      <button onClick={() => removeStoredValue()}>remove todo</button>
    </div>
  );
};

export default AddTodoToStorage;
