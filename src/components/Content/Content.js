import classes from './Content.module.css';
import { Redirect, Route, Switch } from 'react-router';
import Profile from '../Profile/Profile';
import DialogsPage from '../../pages/DialogsPage';
import HomePage from '../../pages/HomePage';

const Content = () => {
  return (
    <div className={`container ${classes.content}`}>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/profile' exact>
          <Profile />
        </Route>

        <Route path='/dialogs'>
          <DialogsPage />
        </Route>

        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
