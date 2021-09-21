import classes from './Message.module.css';

const Message = ({ author, message }) => {
  return (
    <div className={classes.message}>
      <span className={classes.author}>{author}</span>
      <p>{message}</p>
    </div>
  );
};

export default Message;
