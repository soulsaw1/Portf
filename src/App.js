import "./App.css";
import "./componte/Login.css";
import { sinup } from "./componte/Firebase";
import { useRef, useState } from "react";
import Hello from "./componte/Hello";

function App() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [load, setload] = useState(false);
  const [showchat, setchat] = useState(false);

  async function hadleup() {
    setload(true);
    try {
      await sinup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("something is wrong try again");
    }
    setchat(true);
    setload(false);
  }
  return (
    <div className="App">
      {!showchat ? (
        <div>
          <input
            className="input"
            ref={emailRef}
            type="email"
            placeholder="Name"
          />
          <input
            className="input"
            ref={passwordRef}
            type="password"
            placeholder="password"
          />
          <button disabled={load} onClick={hadleup}>
            submit
          </button>
        </div>
      ) : (
        <Hello />
      )}
    </div>
  );
}

export default App;
