import classes from './SendMessageForm.module.css';
import { useEffect, useRef, useState } from 'react';

const SendMessageForm = ({ sendMessage }) => {
  const [inputMessage, setInputMessage] = useState('');
  const inputRef = useRef();

  const handleSendingMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) sendMessage(inputMessage, 'You');
    setInputMessage('');
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form className={classes.form} onSubmit={handleSendingMessage}>
      <input
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        ref={inputRef}
        placeholder='Write your message'
      />
      <button type='submit'>Send Message</button>
    </form>
  );
};

export default SendMessageForm;
