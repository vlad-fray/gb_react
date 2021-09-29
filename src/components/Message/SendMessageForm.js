import classes from './SendMessageForm.module.css';
import { TextField, Button } from '@material-ui/core';
import { useState } from 'react';

const SendMessageForm = ({ sendMessage }) => {
  const [inputMessage, setInputMessage] = useState('');

  const handleSendingMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) sendMessage(inputMessage, 'user');
    setInputMessage('');
  };

  return (
    <form className={classes.form} onSubmit={handleSendingMessage}>
      <TextField
        variant='outlined'
        label='Write your message'
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        fullWidth
        inputRef={(input) => input && input.focus()}
      />
      <Button type='submit' variant='contained' color='primary'>
        Send message
      </Button>
    </form>
  );
};

export default SendMessageForm;

/* <input
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        placeholder='Write your message'
      ></input>
      <button type='submit'>Send message</button> */
