import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import classes from './DialogsPage.module.css';
import SideMenu from '../components/SideMenu/SideMenu';
import Messages from '../components/Message/Messages';
import AddDialog from '../components/Message/AddDialog';
import { removeDialogThunk, addDialogThunk } from './../actions/dialogsActions';

const DialogsPage = () => {
  const dispatch = useDispatch();
  const dialogsList = useSelector((state) => state.dialogs);

  const addDialog = (chatName) => {
    dispatch(addDialogThunk(chatName));
  };

  const removeDialog = (id) => {
    dispatch(removeDialogThunk(id));
  };

  return (
    <div className={classes.dialogs}>
      <SideMenu dialogsList={dialogsList} />
      <Switch>
        <Route exact path='/dialogs/add-dialog'>
          <AddDialog addDialog={addDialog} />
        </Route>
        <Route path='/dialogs/:id'>
          <Messages dialogsList={dialogsList} removeDialog={removeDialog} />
        </Route>
      </Switch>
    </div>
  );
};

export default DialogsPage;
