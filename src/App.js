import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './Components/Main/Main';
import Map from './Components/Map/Map';
import Post from './Components/Post/Post';
import MyPage from './Components/MyPage/MyPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/map' element={<Map/>}/>
      <Route path='/post' element={<Post/>}/>
      <Route path='/mypage' element={<MyPage/>}/>
    </Routes>
  );
}

export default App;
