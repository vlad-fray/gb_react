import classes from './Messages.module.css';
import Message from './Message';
import SendMessageForm from './SendMessageForm';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import {
  sendMessageThunk,
  deleteMessageThunk,
} from '../../actions/dialogsActions';

const Messages = ({ removeDialog, dialogsList }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const paramId = +params.id;

  const currentDialog = dialogsList.find(
    (dialog) => dialog.dialogId === paramId
  );

  const sendMessageHandler = (text, author) => {
    dispatch(sendMessageThunk({ dialogId: paramId, text, author }));
  };

  const deleteMessageHandler = (id) => {
    dispatch(deleteMessageThunk({ dialogId: paramId, messageId: id }));
  };

  return (
    <section className={classes.messages}>
      {currentDialog && (
        <>
          <div className={classes.heading}>
            <h2>Messages</h2>
            <button onClick={() => removeDialog(paramId)}>Remove Dialog</button>
          </div>

          {currentDialog.messageList.map((mes) => {
            return (
              <Message
                key={mes.id}
                id={mes.id}
                author={mes.author}
                message={mes.text}
                deleteMessage={deleteMessageHandler}
              />
            );
          })}

          <SendMessageForm sendMessage={sendMessageHandler} />
        </>
      )}
      {!currentDialog && <h2>This dialog doesn't exist</h2>}
    </section>
  );
};

export default Messages;
