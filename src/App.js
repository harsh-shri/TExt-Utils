import Navbar from "./component/Navbar";
import "./App.css";
import TextForm from "./component/TextForm";
// import About from "./component/About";
import { useState } from "react";
import { Alert } from "./component/Alert";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null); //alert object

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = '#fff';
      showAlert("Light mode has been enabled", "info")
      document.title = "TExt-Utils | Mordern Txt Utility";

    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = '#201f1f'
      showAlert("Drak mode has been enabled", "dark")
      document.title = "TExt-Utils | Dark Mode";
    }
  }
  return (
    <>
      <Navbar title="TExt-Utils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert = {alert} />
      <div className="container my-3">
        <TextForm showAlert ={showAlert} heading="Enter the text to analyze" mode ={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
