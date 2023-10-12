import { useLocalStorage } from "../hooks/UseLocalStorageHook";

const AddUserToStorage = () => {
  const { value, setStoredValue, removeStoredValue } = useLocalStorage<string>(
    "user",
    "now-user"
  );

  const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
  };
  return (
    <>
      <h2>LocalStorageComponent</h2>
      <div>
        <p>USER: {value}</p>
        <br />
        <button onClick={() => setStoredValue(JSON.stringify(user))}>
          add the user
        </button>
        <button onClick={() => removeStoredValue()}>remove user</button>
      </div>
    </>
  );
};

export default AddUserToStorage;
