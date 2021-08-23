import Navbar from "./component/Navbar";
import "./App.css";
import TextForm from "./component/TextForm";
// import About from "./component/About";

function App() {
  return (
    <>
      <Navbar title="My-App" aboutText="About My-app" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
