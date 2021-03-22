import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
       
      <Switch>
        
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        
      </Switch>

    </div>
    </Router>
  );
}

export default App;
