import Navbar from "./component/Navbar";
import "./App.css";
import TextForm from "./component/TextForm";

function App() {
  return (
    <>
      <Navbar title="My-App" aboutText="About My-app" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
