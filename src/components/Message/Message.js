import classes from './Message.module.css';

const Message = ({ id, author, message, deleteMessage }) => {
  return (
    <div className={classes.message}>
      <span className={classes.delete} onClick={() => deleteMessage(id)}>
        ×
      </span>
      <span className={classes.author}>{author}</span>
      {message}
    </div>
  );
};

export default Message;
