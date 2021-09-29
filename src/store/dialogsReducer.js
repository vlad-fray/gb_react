const initialState = [
  {
    dialogId: 1,
    title: 'robot',
    messageList: [],
    isActive: false,
  },
  {
    dialogId: 2,
    title: 'robot-2',
    messageList: [],
    isActive: false,
  },
];

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const ADD_DIALOG = 'ADD_DIALOG';
export const REMOVE_DIALOG = 'REMOVE_DIALOG';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

const dialogsReducer = (state = initialState, action) => {
  const dialogsList = state;

  if (action.type === SEND_MESSAGE) {
    const { dialogId, text, author } = action.payload;

    const currentId = dialogsList.findIndex((dia) => dia.dialogId === dialogId);

    const newDialogsList = [...dialogsList];

    newDialogsList[currentId].messageList = [
      ...newDialogsList[currentId].messageList,
      { text, author, id: Math.floor(Math.random() * 10000) },
    ];

    return [...newDialogsList];
  }

  if (action.type === ADD_DIALOG) {
    const { chatName } = action.payload;
    return [
      ...dialogsList,
      {
        dialogId: Math.floor(Math.random() * 1000),
        title: chatName,
        messageList: [],
        isActive: false,
      },
    ];
  }

  if (action.type === REMOVE_DIALOG) {
    const { id } = action.payload;
    return dialogsList.filter((dialog) => dialog.dialogId !== id);
  }

  if (action.type === DELETE_MESSAGE) {
    const { dialogId, messageId } = action.payload;

    const newDialogsList = dialogsList.map((dia) => {
      if (dia.dialogId !== dialogId) return dia;

      return {
        ...dia,
        messageList: dia.messageList.filter((mes) => mes.id !== messageId),
      };
    });

    return newDialogsList;
  }

  return state;
};

export default dialogsReducer;
