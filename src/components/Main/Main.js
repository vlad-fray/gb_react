import classes from './Main.module.css';
import Message from '../Message/Message';
import SendMessageForm from '../Message/SendMessageForm';

const Main = ({ messageList, sendMessage }) => {
  return (
    <div className={classes.main}>
      <h2>Messages</h2>
      {messageList.map((mes, id) => {
        return (
          <Message key={id} author={mes.author} message={mes.text} />
        );
      })}

      <SendMessageForm sendMessage={sendMessage} />
    </div>
  );
};

export default Main;
