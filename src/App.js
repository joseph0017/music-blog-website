import "./App.css";
import Navbar from "./components/navbar";
import Foooter from "./components/foooter";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Music from "./pages/music";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/music" component={Music} />
      </Switch>
      <Foooter />
    </>
  );
}

export default App;
