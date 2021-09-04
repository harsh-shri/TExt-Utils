import Navbar from "./component/Navbar";
import "./App.css";
import TextForm from "./component/TextForm";
// import About from "./component/About";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = '#fff';
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = '#201f1f'
    }
  }
  return (
    <>
      <Navbar title="My-App" aboutText="About My-app" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode ={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
