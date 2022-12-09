import "./App.css";
import Navbar from "./components/navbar";
import Foooter from "./components/foooter";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Fashion from "./pages/fashion";
import Music from "./pages/music";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/fashion" component={Fashion} />
        <Route path="/music" component={Music} />
      </Switch>
      <Foooter />
    </>
  );
}

export default App;
