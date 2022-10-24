import {Route, Routes} from 'react-router-dom';

import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Chat from './components/Chat';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/im" element={<Chat />}/>        
      </Routes>
    </div>
  );
}

export default App;
