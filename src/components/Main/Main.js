import classes from './Main.module.css';
import Message from '../Message/Message';
import SendMessageForm from '../Message/SendMessageForm';

const Main = ({ messageList, sendMessage }) => {
  return (
    <main className={classes.main}>
      <h2>Messages</h2>
      {messageList.map((mes) => {
        return (
          <Message
            key={mes.id}
            author={mes.author}
            message={mes.text}
          />
        );
      })}

      <SendMessageForm sendMessage={sendMessage} />
    </main>
  );
};

export default Main;
