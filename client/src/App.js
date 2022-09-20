import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './04_Components/LandingPage/LandingPage'
import Home from './04_Components/Home/Home'
import CreateActivities from './04_Components/Activities/CreateActivities';
import ActivitiesList from './04_Components/Activities/ActivitiesLists';
import Details from './04_Components/Details/Details';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path ='/' component={LandingPage}/>        
        <Route exact path = '/home' component={Home}/>
        <Route exact path = '/activity' component={CreateActivities}/>
        <Route exact path='/activities' component={ActivitiesList}/>
        <Route exact path ='/home/:id' component ={Details}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
