import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const handleUpClick = () => {
    let newText = text.toLocaleUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const clearText = () => {
    setText("");
    setCount("");
  };
  const countVowels = () => {
    let vowels = 0;
    for (let i = 0; i < text.length; i++) {
      if (
        text.charAt(i) === "a" ||
        text.charAt(i) === "e" ||
        text.charAt(i) === "i" ||
        text.charAt(i) === "o" ||
        text.charAt(i) === "u"
      ) {
        vowels = vowels + 1;
      }
      if (
        text.charAt(i) === "A" ||
        text.charAt(i) === "E" ||
        text.charAt(i) === "I" ||
        text.charAt(i) === "O" ||
        text.charAt(i) === "U"
      ) {
        vowels = vowels + 1;
      }
    }
    setCount(vowels);
  };

  const handleCopy = () => {
    let text = document.getElementById('myBox');
    // text.select();
    navigator.clipboard.writeText(text.value);
  }
  return (
    <>
      <div className="container" style={{ color: props.mode === 'light' ? 'black' : '#fff' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === 'light' ? '#fff' : '#201f1f',
              color: props.mode === 'light' ? 'black' : '#fff'
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary" onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={countVowels}>
          Count Vowels
        </button>
        <button className="btn btn-primary" onClick={handleCopy}>
          Copy
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : '#fff' }}>
        <h2>Your text summary</h2>
        <p>{" "} <b> {text.split(" ").length} </b>words and <b> {text.length} </b>{" "}character </p>
        <p> <b> {0.008 * text.length} </b>Minutes to read </p>
        <p><b>{count}</b> Vowels </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
      </div>
    </>
  );
}
