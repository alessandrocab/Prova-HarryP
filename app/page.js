'use client';

import { useState, useEffect } from "react";

export default function SecretReveal() {
  const [input, setInput] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [orientation, setOrientation] = useState("portrait");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const updateOrientation = () => {
      const isLandscape = window.innerWidth > window.innerHeight;
      setOrientation(isLandscape ? "landscape" : "portrait");
    };
    updateOrientation();
    window.addEventListener("resize", updateOrientation);
    return () => window.removeEventListener("resize", updateOrientation);
  }, []);

  const handleCheck = () => {
    if (input.trim() === "segreto123") {
      setRevealed(true);
    } else {
      alert("Combinazione errata. Riprova.");
    }
  };

  return (
    <div
      className="relative min-h-screen w-full bg-center bg-no-repeat bg-cover flex items-center justify-center p-4"
      style={{
        backgroundImage: revealed
          ? "url('/images/revealed.jpg')"
          : "url('/images/background.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />

      {!revealed && (
        <div className="relative z-10 bg-white bg-opacity-90 rounded-2xl p-8 shadow-2xl w-full max-w-md text-center flex flex-col items-center justify-center backdrop-blur-sm">
          <h1 className="text-xl sm:text-2xl font-bold mb-5 text-gray-800">
            Inserisci la combinazione segreta per svelare il luogo nascosto
          </h1>
          <div className="relative mb-4 w-full">
            <input
              type={showPassword ? "text" : "password"}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Es: segreto123"
              className="pr-10 w-full text-base border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-xl"
              aria-label="Mostra password"
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>
          <button
            onClick={handleCheck}
            className="w-full text-base py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg shadow-md transition duration-200"
          >
            ✨ Svela il segreto ✨
          </button>
        </div>
      )}

      {revealed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center p-4 z-10">
          <p className="text-2xl font-semibold mb-6">
            🎉 Hai svelato il luogo nascosto! 🎉
          </p>
          <button
            onClick={() => {
              setRevealed(false);
              setInput("");
            }}
            className="text-base px-6 py-2 bg-white text-black rounded-lg shadow hover:bg-gray-200 transition"
          >
            ⬅ Torna indietro
          </button>
        </div>
      )}
    </div>
  );
}
