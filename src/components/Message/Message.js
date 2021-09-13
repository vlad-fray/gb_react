import classes from './Message.module.css';

const FirstComponent = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

export default FirstComponent;
