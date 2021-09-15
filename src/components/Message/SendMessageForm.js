import classes from './SendMessageForm.module.css';
import { useState } from 'react';

const SendMessageForm = ({ sendMessage }) => {
  const [inputMessage, setInputMessage] = useState('');

  const handleChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendingMessage = (e) => {
    e.preventDefault();
    sendMessage(inputMessage, 'user');
    setInputMessage('');
  };

  return (
    <form className={classes.form} onSubmit={handleSendingMessage}>
      <input
        value={inputMessage}
        onChange={handleChange}
        id='newMessage'
        placeholder='Write your message'
      ></input>
      <button type='submit'>Send message</button>
    </form>
  );
};

export default SendMessageForm;
