import './base.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const messages = ['Hi', 'Hello', 'How are you?', 'I`m fine!'];

function App() {
  return (
    <div>
      <Header />
      <Main messages={messages} />
    </div>
  );
}

export default App;

//https://colorscheme.ru/#3A31Tw0w0w0w0
