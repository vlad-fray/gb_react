import { useState } from 'react';
import { Route, Switch } from 'react-router';
import './base.css';
import Header from './components/Header/Header';
import Messages from './components/Message/Messages';
import SideMenu from './components/SideMenu/SideMenu';

function App() {
  const [dialogsList, setDialogsList] = useState([
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
  ]);

  const sendMessage = ({ dialogId, text, author }) => {
    setDialogsList((prev) => {
      const currentId = dialogsList.findIndex(
        (dia) => dia.dialogId === dialogId
      );
      const newDialogsList = [...prev];

      newDialogsList[currentId].messageList = [
        ...newDialogsList[currentId].messageList,
        { text, author, id: Math.floor(Math.random() * 10000) },
      ];

      // currentId - id элемента массива
      // dialogId - id самого диалога
      // сей чудо-костыль нужен, чтобы получить ответное сообщение
      getAnswer(currentId, dialogId);

      return newDialogsList;
    });
  };

  const getAnswer = (currentId, dialogId) => {
    const dialog = dialogsList[currentId];
    const messageList = dialog.messageList;
    const lastMes = messageList.length - 1;

    if (messageList[lastMes].author !== dialog.title) {
      setTimeout(() => {
        sendMessage({
          text: 'Hello, leather bag',
          author: dialog.title,
          dialogId,
        });
      }, 1500);
    }
  };

  return (
    <div className='layout'>
      <Header />
      <Switch>
        <Route path='/' exact>
          <h1>Home page</h1>
        </Route>
        <Route path='/messages'>
          <SideMenu dialogsList={dialogsList} />
          <Route path='/messages/:id'>
            <Messages dialogsList={dialogsList} sendMessage={sendMessage} />
          </Route>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

//https://colorscheme.ru/#3A31Tw0w0w0w0
