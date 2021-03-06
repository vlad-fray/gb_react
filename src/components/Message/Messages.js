import classes from './Messages.module.css';
import Message from './Message';
import SendMessageForm from './SendMessageForm';
import { useParams } from 'react-router';

const Messages = ({ sendMessage, dialogsList }) => {
  const params = useParams();
  const paramId = +params.id;

  const currentDialog = dialogsList.find(
    (dialog) => dialog.dialogId === paramId
  );

  const sendMessageHandler = (text, author) => {
    sendMessage({ dialogId: paramId, text, author });
  };

  return (
    <section className={classes.messages}>
      {currentDialog && (
        <>
          <h2>Messages</h2>

          {currentDialog.messageList.map((mes) => {
            return (
              <Message key={mes.id} author={mes.author} message={mes.text} />
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
