import classes from './Main.module.css';
import Message from '../Message/Message';
/* */
const Main = (props) => {
  return (
    <div className={classes.main}>
      <h2>Messages</h2>
      {props.messages.map((mes) => {
        return <Message message={mes} />;
      })}
    </div>
  );
};

export default Main;
