import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './04_Components/LandingPage/LandingPage'
import Home from './04_Components/Home/Home'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path ='/' component={LandingPage}/>
        <Route exact path = '/home' component={Home} />
        <Route/>
        <Route/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
