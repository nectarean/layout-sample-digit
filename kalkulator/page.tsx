"use client";

import React, { useState } from "react";

const buttons = [
  ["C", "x²", "xⁿ", "√"],
  ["%", "MOD", "DIV", "+"],
  ["7", "8", "9", "-"],
  ["4", "5", "6", "×"],
  ["1", "2", "3", "÷"],
  ["0", ".", "="],
];

function calcEval(expr: string) {
  try {
    // Replace symbols for JS eval
    let exp = expr
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/MOD/g, "%")
      .replace(/DIV/g, "//");
    // Handle x², xⁿ, √
    exp = exp.replace(/(\d+)\s*x²/g, "Math.pow($1,2)");
    exp = exp.replace(/(\d+)\s*xⁿ\s*(\d+)/g, "Math.pow($1,$2)");
    exp = exp.replace(/√\s*(\d+)/g, "Math.sqrt($1)");
    // Handle DIV (integer division)
    exp = exp.replace(/(\d+)\s*\/\/\s*(\d+)/g, "Math.floor($1/$2)");
    // eslint-disable-next-line no-eval
    let result = eval(exp);
    return result;
  } catch {
    return "Err";
  }
}

export default function Calculator() {
  const [display, setDisplay] = useState("");
  const [lastIsEqual, setLastIsEqual] = useState(false);

  const handleClick = (val: string) => {
    if (val === "C") {
      setDisplay("");
      setLastIsEqual(false);
    } else if (val === "=") {
      const result = calcEval(display);
      setDisplay(result.toString());
      setLastIsEqual(true);
    } else if (val === "x²") {
      setDisplay((prev) => prev + "x²");
      setLastIsEqual(false);
    } else if (val === "xⁿ") {
      setDisplay((prev) => prev + "xⁿ");
      setLastIsEqual(false);
    } else if (val === "√") {
      setDisplay((prev) => prev + "√");
      setLastIsEqual(false);
    } else {
      if (lastIsEqual && /[0-9.]/.test(val)) {
        setDisplay(val);
        setLastIsEqual(false);
      } else {
        setDisplay((prev) => prev + val);
        setLastIsEqual(false);
      }
    }
  };

  return (
    <div className="calc-bg">
      <div className="calc-main">
        <div className="calc-header">
          <img
            src="https://maklonfr.github.io/portofolio/assets/img/kalkulator.png"
            alt="logo"
            style={{ width: 50, marginRight: 16, verticalAlign: "middle" }}
          />
          <span className="calc-title">Calculator | WebApp</span>
        </div>
        <div className="calc-display">{display || "0"}</div>
        <div className="calc-buttons">
          {buttons.map((row, i) => (
            <div className="calc-row" key={i}>
              {row.map((btn, j) => {
                let className = "calc-btn";
                if (btn === "C") className += " calc-btn-red";
                else if (["+", "-", "×", "÷"].includes(btn))
                  className += " calc-btn-blue";
                else if (btn === "=") className += " calc-btn-green";
                else className += " calc-btn-beige";
                return (
                  <button
                    key={btn}
                    className={className}
                    onClick={() => handleClick(btn)}
                  >
                    {btn}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
        <div className="calc-footer">
          Created by <span style={{ color: "#e74c3c" }}>❤</span> MaklonFR | Copyright 2025
        </div>
      </div>
      <style jsx>{`
        .calc-bg {
          min-height: 100vh;
          background: #fafafa;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .calc-main {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 2px 8px #0001;
          padding: 0 0 16px 0;
          width: 480px;
          max-width: 96vw;
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }
        .calc-header {
          background: #fdf6e3;
          border-radius: 16px 16px 0 0;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          font-family: 'Courier New', Courier, monospace;
        }
        .calc-title {
          font-size: 2.1rem;
          font-weight: 700;
          letter-spacing: 2px;
        }
        .calc-display {
          background: #fff;
          border: 2px solid #eee;
          border-radius: 8px;
          margin: 18px 18px 0 18px;
          min-height: 60px;
          font-size: 2.5rem;
          text-align: right;
          padding: 12px 18px;
          font-family: 'Courier New', Courier, monospace;
          color: #222;
        }
        .calc-buttons {
          margin: 18px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .calc-row {
          display: flex;
          gap: 12px;
        }
        .calc-btn {
          flex: 1;
          font-size: 1.5rem;
          font-family: 'Courier New', Courier, monospace;
          border: none;
          border-radius: 8px;
          padding: 18px 0;
          cursor: pointer;
          font-weight: 500;
          transition: background 0.15s;
        }
        .calc-btn-beige {
          background: #f7ecd6;
          color: #222;
        }
        .calc-btn-red {
          background: #8b1c1c;
          color: #fff;
        }
        .calc-btn-blue {
          background: #20587a;
          color: #fff;
        }
        .calc-btn-green {
          background: #4d6c6b;
          color: #fff;
        }
        .calc-btn:active {
          opacity: 0.8;
        }
        .calc-footer {
          text-align: center;
          font-family: 'Courier New', Courier, monospace;
          font-size: 1.1rem;
          margin-top: 18px;
          color: #222;
        }
      `}</style>
    </div>
  );
}