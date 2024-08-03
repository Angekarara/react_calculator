import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const clearResult = () => {
    setValue("");
  };
 
  const backSpace = () => {
    setValue(prevValue => prevValue.slice(0, -1))
  }

  const toggleSign = () => {
    setValue((prevValue) => (prevValue.charAt(0) === '-' ? prevValue.slice(0) : '-' + prevValue) )
  }

  const appendCharacter = (char) => {
    setValue((prevValue) => prevValue + char);
  };

  const calculateResult = () => {
    setValue((prevValue) => {
      const result = eval(prevValue);

      return result !== undefined && !isNaN(result) ? result.toString() : "";
    });
  };

  return (
    <>
      <div
        className="bg-black flex justify-center 
                   items-center h-screen m-10"
      >
        <div
          className="bg-white p-8 rounded-lg shadow-lg"
        >

          <input
            type="text"
            id="result"
            className="w-full bg-gray-600 text-right 
                      p-4 mb-4 border border-gray-300 
                      rounded-md focus:outline-none"
            placeholder="0"
            value={value}
            readOnly
          />

          <div className="grid grid-cols-4 gap-2">
            <button
              className="bg-gray-300 hover:bg-gray-400 
                           text-gray-800 font-bold py-2 
                           px-4 rounded"
              onClick={clearResult}
            >
              AC
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 
                           text-gray-800 font-bold py-2 
                           px-4 rounded"
              onClick={backSpace}
            >
              DE
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 
                           text-gray-800 font-bold py-2 
                           px-4 rounded"
              onClick={toggleSign}
            >
              -/+
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 
                           text-gray-800 font-bold py-2 
                           px-4 rounded text-2xl"
              onClick={() => appendCharacter("/")}
            >
              ÷
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 
                           text-gray-800 font-bold py-2 
                           px-4 rounded"
              onClick={() => appendCharacter("7")}
            >
              7
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 
                           text-gray-800 font-bold py-2 
                           px-4 rounded"
              onClick={() => appendCharacter("8")}
            >
              8
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 
                           text-gray-800 font-bold py-2 
                           px-4 rounded"
              onClick={() => appendCharacter("9")}
            >
              9
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 
                           text-gray-800 font-bold py-2 
                           px-4 rounded text-xl "
              onClick={() => appendCharacter("*")}
            >
              x
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 
                           text-gray-800 font-bold py-2 
                           px-4 rounded"
              onClick={() => appendCharacter("4")}
            >
              4
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 
                           text-gray-800 font-bold py-2 
                           px-4 rounded"
              onClick={() => appendCharacter("5")}
            >
              5
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 
                           text-gray-800 font-bold py-2 
                           px-4 rounded"
              onClick={() => appendCharacter("6")}
            >
              6
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 
                           text-gray-800 font-bold py-2 
                           px-4 rounded text-2xl"
              onClick={() => appendCharacter("-")}
            >
              -
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 
                           text-gray-800 font-bold py-2 
                           px-4 rounded"
              onClick={() => appendCharacter("1")}
            >
              1
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 
                           text-gray-800 font-bold py-2 
                           px-4 rounded"
              onClick={() => appendCharacter("2")}
            >
              2
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 
                           text-gray-800 font-bold py-2 
                           px-4 rounded"
              onClick={() => appendCharacter("3")}
            >
              3
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 
                           text-gray-800 font-bold py-2 
                           px-4 rounded text-2xl"
              onClick={() => appendCharacter("+")}
            >
              +
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 
                           text-gray-800 font-bold py-2 
                           px-4 rounded"
              onClick={() => appendCharacter("0")}
            >
              0
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 
                           text-gray-800 font-bold py-2 
                           px-4 rounded"
              onClick={() => appendCharacter(".")}
            >
              .
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 
                           text-gray-800 font-bold py-2 
                           px-4 rounded"
              onClick={calculateResult}
            >
              =
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 
                           text-gray-800 font-bold py-2 
                           px-4 rounded text-xl"
              onClick={() => appendCharacter("%")}
            >
              %
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
