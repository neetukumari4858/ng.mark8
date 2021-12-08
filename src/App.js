import React, { useState } from "react";
import "./styles.css";

const flagsDictionay = {
  "🇭🇷": "Croatia",
  "🇭🇹": "Haiti",
  "🇭🇺 ": "Hungary",
  "🇮🇨": "Canary Islands",
  "🇮🇩": "Indonesia",
  "🇮🇱": "Israel",
  "🇮🇲 ": "Isle of Man",
  "🇮🇳": "India"
};

var flagsWeknow = Object.keys(flagsDictionay);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function flagInputHandler(event) {
    var useInput = event.target.value;
    var meaning = flagsDictionay[useInput];
    if (meaning === undefined) {
      meaning = "we don't have this in database";
    }
    setMeaning(meaning);
  }
  function flagClickHandler(flag) {
    var meaning = flagsDictionay[flag];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside outtt!!</h1>
      <input onChange={flagInputHandler} />
      <h2>{meaning}</h2>
      <h3> flags we know</h3>
      {flagsWeknow.map(function (flag) {
        return (
          <span
            onClick={() => flagClickHandler(flag)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointe" }}
            key={flag}
          >
            {flag}
          </span>
        );
      })}
    </div>
  );
}
