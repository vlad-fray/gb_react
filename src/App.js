import { useCallback, useEffect, useState } from 'react';
import './base.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SideMenu from './components/SideMenu/SideMenu';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [chatList] = useState([
    { title: 'robot', id: 1 },
    { title: 'robot-2', id: 2 },
  ]);

  const sendMessage = useCallback(
    (text, author) => {
      setMessageList((prev) => [
        ...prev,
        { text, author, id: Math.floor(Math.random() * 10000) },
      ]);
    },
    [setMessageList]
  );

  useEffect(() => {
    const id = messageList.length - 1;
    if (id >= 0 && messageList[id].author !== 'robot') {
      setTimeout(() => {
        sendMessage(
          'Your message is good, but mine is better',
          'robot'
        );
      }, 1500);
    }
  }, [messageList, sendMessage]);

  return (
    <div className='layout'>
      <Header />
      <SideMenu chats={chatList} />
      <Main messageList={messageList} sendMessage={sendMessage} />
    </div>
  );
}

export default App;

//https://colorscheme.ru/#3A31Tw0w0w0w0
