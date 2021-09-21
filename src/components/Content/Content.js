import classes from './Content.module.css';
import { Redirect, Route, Switch } from 'react-router';
import Profile from '../Profile/Profile';
import DialogsPage from '../../pages/DialogsPage';

const Content = () => {
  return (
    <div className={`container ${classes.content}`}>
      <Switch>
        <Route exact path='/'>
          <h1>Home page</h1>
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
