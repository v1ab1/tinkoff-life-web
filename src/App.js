import {Route, Routes} from 'react-router-dom';

import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Chat from './components/Chat';
import Menu from './components/Menu';
import Messages from './components/Messages';

function App() {
  return (
    <div className="main-wrapper">
      <Menu />
      <Messages />
      <Chat />
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />      
      </Routes>
    </div>
  );
}

export default App;
