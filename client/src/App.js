import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Profile from './Components/Profile';
import Signin from './Components/Signin';
import Signup from './Components/Signup';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Signup} />
        <Route exact path='/login' component={Signin} />
        <Route exact path='/profile' component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
