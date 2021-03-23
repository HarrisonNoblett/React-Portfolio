import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Projects from './pages/Projects';
import Navbar from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
    <div>
      <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Projects" component={Projects} />
      <Footer />
    </div>
  </Router>
  );
}

export default App;
