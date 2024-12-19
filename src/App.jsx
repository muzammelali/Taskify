import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Task from "./components/tasks/Task";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Task />
      <Footer />
    </>
  );
}

export default App;
