import Chat from './Pages/Chat';
import { Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import SetAvatar from './Pages/SetAvatar';
import Home from './Pages/Home';
import Therapy from './Pages/Therapy';
import Diet from './Pages/Diet';
import Diary from './Pages/Diary';


function App() {
  return (
    <Routes>
    <Route path='/register' element={<Register />} />
    <Route path='/login' element={<Login />} />
    <Route path='/setAvatar' element={<SetAvatar />} />
    <Route path='/' element={<Home/>} />
    <Route path='/therapy' element={<Therapy />} />
    <Route path='/diet' element={<Diet/>} />
    <Route path='/diary' element={<Diary/>} />
    <Route path='/chat' element={<Chat />} />
    </Routes>
  );
}

export default App;
