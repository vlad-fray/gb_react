import { createTheme, ThemeProvider } from '@material-ui/core';
import { useCallback, useEffect, useState } from 'react';
import './base.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SideMenu from './components/SideMenu/SideMenu';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333996',
      light: '#3c44b126',
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526',
    },
    background: {
      default: '#f4f5fd',
    },
  },
});

function App() {
  const [messageList, setMessageList] = useState([]);
  const [chatList] = useState([
    { title: 'robot', id: 1 },
    { title: 'robot-2', id: 2 },
  ]);

  const sendMessage = useCallback((text, author) => {
    setMessageList((prev) => [
      ...prev,
      { text, author, id: Math.floor(Math.random() * 10000) },
    ]);
  }, []);

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
    <ThemeProvider theme={theme}>
      <div className='layout'>
        <Header />
        <SideMenu chats={chatList} />
        <Main messageList={messageList} sendMessage={sendMessage} />
      </div>
    </ThemeProvider>
  );
}

export default App;

//https://colorscheme.ru/#3A31Tw0w0w0w0
