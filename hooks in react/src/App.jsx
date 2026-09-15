import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const paswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwzyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+|}{[]?/";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  const passwordRef = useRef(null);

  const passwordCopy = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    paswordGenerator();
  }, [length, numberAllowed, characterAllowed, paswordGenerator]);
  return (
    <>
      <div className="text-orange-800 w-full max-w-md mx-auto bg-gray-500 py-3 px-4 my-8 rounded text-center shadow-md ">
        <h1 className="text-2xl font-bold mb-4 text-black">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="w-full px-4 py-2 outline-none focus:outline-none"
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-orange-500 px-3 text-white hover:bg-orange-700 cursor-pointer"
            onClick={passwordCopy}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <input
            type="range"
            value={length}
            min={8}
            max={100}
            className="outline-none focus:outline-none cursor-pointer accent-orange-500"
            placeholder="length"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="">Length:{length}</label>
          <input
            type="checkbox"
            checked={numberAllowed}
            className="outline-none focus:outline-none accent-orange-500 cursor-pointer "
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label>Number</label>
          <input
            type="checkbox"
            checked={characterAllowed}
            className="outline-none focus:outline-none cursor-pointer accent-orange-500"
            onChange={() => {
              setCharacterAllowed((prev) => !prev);
            }}
          />
          <label>Character</label>
        </div>
      </div>
    </>
  );
}

export default App;
