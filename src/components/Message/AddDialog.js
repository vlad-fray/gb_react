import classes from './AddDialog.module.css';
import { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const AddDialog = ({ addDialog }) => {
  const [inputName, setInputName] = useState('');

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
        <TextField
          variant='outlined'
          label='Write a name of the chat'
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          fullWidth
          inputRef={(input) => input && input.focus()}
        />
        <Button type='submit' variant='contained' color='primary'>
          Add Dialog
        </Button>
      </form>
    </section>
  );
};

export default AddDialog;
