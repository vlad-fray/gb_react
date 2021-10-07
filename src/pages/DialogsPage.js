import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import classes from './DialogsPage.module.css';
import SideMenu from '../components/SideMenu/SideMenu';
import Messages from '../components/Message/Messages';
import AddDialog from '../components/Message/AddDialog';
import {
  ADD_DIALOG,
  SEND_MESSAGE,
  REMOVE_DIALOG,
} from '../store/dialogsReducer';

const DialogsPage = () => {
  const dispatch = useDispatch();
  const dialogsList = useSelector((state) => state.dialogs);

  const sendMessage = ({ dialogId, text, author }) => {
    dispatch({ type: SEND_MESSAGE, payload: { dialogId, text, author } });
  };

  const addDialog = (chatName) => {
    dispatch({ type: ADD_DIALOG, payload: { chatName } });
  };

  const removeDialog = (id) => {
    dispatch({ type: REMOVE_DIALOG, payload: { id } });
  };

  return (
    <div className={classes.dialogs}>
      <SideMenu dialogsList={dialogsList} />
      <Switch>
        <Route exact path='/dialogs/add-dialog'>
          <AddDialog addDialog={addDialog} />
        </Route>
        <Route path='/dialogs/:id'>
          <Messages
            dialogsList={dialogsList}
            sendMessage={sendMessage}
            removeDialog={removeDialog}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default DialogsPage;
