import classes from './AddDialog.module.css';
import { useEffect, useRef, useState } from 'react';

const AddDialog = ({ addDialog }) => {
  const [inputName, setInputName] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAddingDialog = (e) => {
    e.preventDefault();
    if (inputName.trim() && inputName.length < 15) addDialog(inputName);
    else alert('Length of the name hast to be [1, 15] characters long');
    setInputName('');
  };

  return (
    <section className={classes['add-dialog']}>
      <h2>Add dialog</h2>
      <form className={classes.form} onSubmit={handleAddingDialog}>
        <input
          placeholder='Write a name of the chat'
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          ref={inputRef}
        />
        <button type='submit'>Add Dialog</button>
      </form>
    </section>
  );
};

export default AddDialog;
