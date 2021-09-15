import { useCallback, useEffect, useState } from 'react';
import './base.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

let initialState = {
  messageList: [],
};

function App() {
  const [state, setState] = useState(initialState);

  const sendMessage = useCallback(
    (text, author) => {
      setState((prevState) => ({
        ...prevState,
        messageList: [...prevState.messageList, { text, author }],
      }));
    },
    [setState]
  );

  useEffect(() => {
    const id = state.messageList.length - 1;
    if (id >= 0 && state.messageList[id].author !== 'robot') {
      setTimeout(() => {
        sendMessage(
          'Your message is good, but mine is better',
          'robot'
        );
      }, 1500);
    }
  }, [state.messageList, sendMessage]);

  return (
    <div>
      <Header />
      <Main
        messageList={state.messageList}
        sendMessage={sendMessage}
      />
    </div>
  );
}

export default App;

//https://colorscheme.ru/#3A31Tw0w0w0w0
