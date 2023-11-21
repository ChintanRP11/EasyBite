import { useState, useEffect } from "react";

export default function Calculator() {
  const [exp, setExp] = useState("");
  const [result, setResult] = useState("");

  // Problematic
  const handleExp = (char) => {
    if (
      (/^[+*/-]$/.test(char) && !exp && /^[.+*/-]$/.test(exp.slice(-1))) ||
      (char === "." && isNaN(exp.slice(-1)))
    ) {
      char = "";
    }
    console.log(exp + char);
    setExp(exp + char);
  };

  const handleClear = () => {
    setExp("");
  };

  const handleDelete = () => {
    console.log(exp);
    if (exp) {
      console.log("hehe");
      setExp(exp.slice(0, -1));
    }
  };

  const handleEquals = () => {
    if (result) {
      setExp(result);
    }
  };

  useEffect(() => {
    const char = exp.slice(-1);
    console.log("render from useEffect of exp");

    if (/^[0-9]+$/.test(char)) {
      setResult(eval(exp).toString());
    } else {
      setResult("");
    }
  }, [exp]);

  // Problematic
  useEffect(() => {
    console.log("render from useEffect no dep");
    const eventListener = (event) => {
      event.preventDefault();
      const key = event.key;
      if (key === "Enter") {
        handleEquals();
      } else if (key === "Backspace") {
        handleDelete();
      } else if (/^[0-9]+|[+*/-]|\.+$/.test(key)) {
        handleExp(event.key.toString());
      }
    };

    document.addEventListener("keydown", eventListener);

    return () => {
      document.removeEventListener("keydown", eventListener);
    };
  }, []);

  const buttons = [
    { label: "AC", className: "clear", onClick: handleClear },
    { label: <img src={""} />, className: "delete", onClick: handleDelete },
    { label: "/", className: "ops" },
    { label: "*", className: "ops" },
    { label: "7" },
    { label: "8" },
    { label: "9" },
    { label: "-", className: "ops" },
    { label: "4" },
    { label: "5" },
    { label: "6" },
    { label: "+", className: "ops plus" },
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "0", className: "col-span" },
    { label: "." },
    { label: "=", className: "equals", onClick: handleEquals },
  ];

  return (
    <div className="calculator">
      <div className="display">
        <div className="expression-container">
          <div className="expression">{exp}</div>
          <div className="cursor" />
        </div>
        <div className="result flex justify-between w-full ">
          {result.length > 0 ? `=${result}` : "\u00a0"}
        </div>
      </div>
      <div className="buttons">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="border-l-pink-500 bg-slate-200 p-2"
            onClick={button.onClick || ((e) => handleExp(e.target.innerText))}>
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
}
