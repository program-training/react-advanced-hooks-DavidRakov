import { useLocalStorage } from "../hooks/UseLocalStorageHook";

function SessionStorageComponent() {
  const { value, setStoredValue, removeStoredValue } = useLocalStorage(
    "one todo",
    "now todo",
    "sessionStorage"
  );

  const todo = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };
  return (
    <div>
      <h2>SessionStorageComponent</h2>
      <p>TODO: {value}</p>
      <br />
      <button onClick={() => setStoredValue(JSON.stringify(todo))}>
        add todo
      </button>
      <button onClick={() => removeStoredValue()}>remove todo</button>
    </div>
  );
}

export default SessionStorageComponent;
