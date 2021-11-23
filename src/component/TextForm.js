import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const handleUpClick = () => {
    if (text !== "") {
      let newText = text.toLocaleUpperCase();
      setText(newText);
      props.showAlert("Text converted to Upper case", "success");
    } else {
      props.showAlert("Please write something to convert", "danger");
    }
  };
  const handleLoClick = () => {
    if (text !== "") {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Text converted to lower case", "success");
    } else {
      props.showAlert("Please write something to convert", "danger");
    }
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const clearText = () => {
    if (text !== "") {
      setText("");
      setCount("");
      props.showAlert("Text field is empty", "success");
    } else {
      props.showAlert("Text field is already empty", "danger");
    }
  };
  const countVowels = () => {
    if (text !== "") {
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
    } else {
      props.showAlert("Please write something to count", "danger");
    }
  };

  const handleCopy = () => {
    // let text = document.getElementById("myBox");
    if (text.value !== "") {
      // text.select(); // highlight text (with blue background on clicking copy button)
      navigator.clipboard.writeText(text); // navigator api does not need text to selsct first then copy as above
      props.showAlert("Text copied to clipboard", "success");
      // document.getSelection().removeAllRanges(); // to remove text highlight(background blue) on clicking copy button.
    } else {
      props.showAlert("Nothing to copy in the textbox", "danger");
    }
    // text.select();
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "#fff" }}
      >
        <h2 className ="mb-3">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "#fff" : "#201f1f",
              color: props.mode === "light" ? "black" : "#fff",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled ={text.length===0} className="btn btn-primary my-1 mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled ={text.length===0} className="btn btn-primary my-1" onClick={clearText}>
          Clear Text
        </button>
        <button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={countVowels}>
          Count Vowels
        </button>
        <button disabled ={text.length===0} className="btn btn-primary my-1" onClick={handleCopy}>
          Copy
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "#fff" }}
      >
        <h2>Your text summary</h2>
        <p>
          {" "}
          <b> {text.split(/\s+/).filter((element)=>{return element.length !==0}).length} </b>words and <b> {text.length} </b>{" "}
          character{" "}
        </p>
        <p>
          {" "}
          <b> {0.008 * text.length} </b>Minutes to read{" "}
        </p>
        <p>
          <b>{count}</b> Vowels{" "}
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
