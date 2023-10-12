import "./App.css";
import CartManager from "./useReducerHooks/pages/CartManager";
import ClickCount from "./customHooks/customHooks-exercise1/pages/ClickCount";
import CountHover from "./customHooks/customHooks-exercise1/pages/CountHover";
import SessionStorageComponent from "./customHooks/customHooks-exercise2/pages/AddTodoToSessionStorage";
import AddTodoToStorage from "./customHooks/customHooks-exercise2/pages/AddTodoToStorage";
import AddUserToStorage from "./customHooks/customHooks-exercise2/pages/AddUserToStorage";

function App() {
  return (
    <>
      <div style={{ border: "1px solid" }}>
        <ClickCount />
        <CountHover />
        <AddUserToStorage />
        <AddTodoToStorage />
        <SessionStorageComponent />
      </div>
      <CartManager />
    </>
  );
}

export default App;
