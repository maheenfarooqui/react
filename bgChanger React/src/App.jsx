import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#000000");

  return (
    <>
      <div
        className="flex justify-center items-center w-screen h-screen fixed inset-0 transition-colors duration-300"
        style={{ backgroundColor: color }}
      >
        <div className="bg-slate-400 w-[70%] h-20 rounded-2xl flex justify-center items-center gap-1.5 flex-wrap">
          <button
            className="bg-red-500 px-10 py-5 rounded-3xl text-white text-2xl"
            onClick={() => setColor("red")}
          >
            red
          </button>
          <button
            className="bg-yellow-500 px-10 py-5 rounded-3xl text-white text-2xl"
            onClick={() => setColor("yellow")}
          >
            yellow
          </button>
          <button
            className="bg-green-500 px-10 py-5 rounded-3xl text-white text-2xl"
            onClick={() => setColor("green")}
          >
            green
          </button>
          <button
            className="bg-pink-500 px-10 py-5 rounded-3xl text-white text-2xl"
            onClick={() => setColor("pink")}
          >
            pink
          </button>
          <button
            className="bg-purple-500 px-10 py-5 rounded-3xl text-white text-2xl"
            onClick={() => setColor("purple")}
          >
            purple
          </button>
          <button
            className="bg-gray-500 px-10 py-5 rounded-3xl text-white text-2xl"
            onClick={() => setColor("gray")}
          >
            gray
          </button>
          <button
            className="bg-blue-500 px-10 py-5 rounded-3xl text-white text-2xl"
            onClick={() => setColor("blue")}
          >
            blue
          </button>
          <button
            className="bg-indigo-500 px-10 py-5 rounded-3xl text-white text-2xl"
            onClick={() => setColor("indigo")}
          >
            indigo
          </button>
          <button
            className="bg-orange-500 px-10 py-5 rounded-3xl text-white text-2xl"
            onClick={() => setColor("orange")}
          >
            orange
          </button>
          <button
            className="bg-cyan-500 px-10 py-5 rounded-3xl text-white text-2xl"
            onClick={() => setColor("cyan")}
          >
            cyan
          </button>
          <button
            className="bg-teal-500 px-10 py-5 rounded-3xl text-white text-2xl"
            onClick={() => setColor("teal")}
          >
            teal
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
