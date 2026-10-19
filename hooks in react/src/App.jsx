import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+|{}[]?/";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  const passwordCopy = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, password.length);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg">

        {/* Header */}
        <div className="text-center mb-8">
        

          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Password <span className="text-orange-500">Generator</span>
          </h1>

          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Create a strong password in seconds.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-[#151515] border border-white/10  p-5 sm:p-7 shadow-2xl shadow-orange-950/10">

          {/* Password Output */}
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Your generated password
          </label>

          <div className="flex items-center bg-[#0b0b0b] border border-white/10 focus-within:border-orange-500/60  p-2 transition-colors">
            <input
              type="text"
              value={password}
              placeholder="Your password"
              readOnly
              ref={passwordRef}
              className="min-w-0 flex-1 bg-transparent text-orange-400 font-mono text-sm sm:text-base px-2 py-2 outline-none"
            />

            <button
              type="button"
              onClick={passwordCopy}
              className="shrink-0 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-black font-semibold px-4 py-2.5  transition-all"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="8" y="8" width="12" height="12" rx="2" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 8V5a2 2 0 00-2-2H5a2 2 0 00-2 2v9a2 2 0 002 2h3"
                />
              </svg>
              Copy
            </button>
          </div>

          {/* Length */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-medium text-gray-300">
                Password length
              </label>

              <span className="bg-orange-500/10 border border-orange-500/20 text-orange-400 font-bold text-sm px-3 py-1 ">
                {length} characters
              </span>
            </div>

            <input
              type="range"
              min={8}
              max={100}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full h-2  appearance-none cursor-pointer accent-orange-500 bg-gray-700"
            />

            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>8 characters</span>
              <span>100 characters</span>
            </div>
          </div>

          {/* Options */}
          <div className="mt-8">
            <h2 className="text-sm font-medium text-gray-300 mb-3">
              Customize password
            </h2>

            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center gap-3 p-4  border border-white/10 bg-[#101010] hover:border-orange-500/40 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={numberAllowed}
                  onChange={() => setNumberAllowed((prev) => !prev)}
                  className="w-4 h-4 accent-orange-500 cursor-pointer"
                />
                <span className="text-sm text-gray-200">Numbers</span>
                <span className="ml-auto text-orange-500 font-mono text-sm">
                  123
                </span>
              </label>

              <label className="flex items-center gap-3 p-4  border border-white/10 bg-[#101010] hover:border-orange-500/40 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={characterAllowed}
                  onChange={() => setCharacterAllowed((prev) => !prev)}
                  className="w-4 h-4 accent-orange-500 cursor-pointer"
                />
                <span className="text-sm text-gray-200">Symbols</span>
                <span className="ml-auto text-orange-500 font-mono text-sm">
                  @#!
                </span>
              </label>
            </div>
          </div>

          {/* Generate Button */}
          <button
            type="button"
            onClick={passwordGenerator}
            className="w-full mt-7 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-black font-bold py-3.5  transition-all shadow-lg shadow-orange-500/10"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v6h6M20 20v-6h-6M5.6 15a7 7 0 0012.8 2M18.4 9A7 7 0 005.6 7"
              />
            </svg>
            Generate New Password
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-600 text-xs mt-6">
          Built with <span className="text-orange-500">♥</span> and React
        </p>
      </div>
    </div>
  );
}

export default App;