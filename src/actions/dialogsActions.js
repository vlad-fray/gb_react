import {
  ADD_DIALOG,
  SEND_MESSAGE,
  REMOVE_DIALOG,
} from '../store/dialogsReducer';

const sendMessageAC = ({ dialogId, text, author }) => {
  return {
    type: SEND_MESSAGE,
    payload: { dialogId, text, author },
  };
};

const addDialogAC = (chatName) => {
  return {
    type: ADD_DIALOG,
    payload: { chatName },
  };
};

const removeDialogAC = (id) => {
  return {
    type: REMOVE_DIALOG,
    payload: { id },
  };
};

export const sendMessageThunk = (message) => async (dispatch, getState) => {
  const { dialogId } = message;
  const robotName = getState().dialogs.find(
    (dia) => dia.dialogId === dialogId
  ).title;

  await dispatch(sendMessageAC(message));
  setTimeout(() => {
    dispatch(
      sendMessageAC({
        dialogId,
        text: 'He texts me and even does not know that I am just a row in the code',
        author: robotName,
      })
    );
  }, 1000);
};

export const addDialogThunk = (chatName) => (dispatch) => {
  dispatch(addDialogAC(chatName));
};

export const removeDialogThunk = (id) => (dispatch) => {
  dispatch(removeDialogAC(id));
};
