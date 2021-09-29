import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import classes from './DialogsPage.module.css';
import SideMenu from '../components/SideMenu/SideMenu';
import Messages from '../components/Message/Messages';
import AddDialog from '../components/Message/AddDialog';
import {
  sendMessageThunk,
  removeDialogThunk,
  addDialogThunk,
  deleteMessageThunk,
} from './../actions/dialogsActions';

const DialogsPage = () => {
  const dispatch = useDispatch();
  const dialogsList = useSelector((state) => state.dialogs);

  const sendMessage = ({ dialogId, text, author }) => {
    dispatch(sendMessageThunk({ dialogId, text, author }));
  };

  const addDialog = (chatName) => {
    dispatch(addDialogThunk(chatName));
  };

  const removeDialog = (id) => {
    dispatch(removeDialogThunk(id));
  };

  const deleteMessage = (ids) => {
    dispatch(deleteMessageThunk(ids));
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
            deleteMessage={deleteMessage}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default DialogsPage;
