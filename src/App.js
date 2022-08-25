import { Route, Routes } from 'react-router-dom';
import Main from './Components/Main/Main';
import MapPage from './Components/MapPage/MapPage';
import Post from './Components/Post/Post';
import MyPage from './Components/MyPage/MyPage';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/map' element={<MapPage/>}/>
      <Route path='/post' element={<Post/>}/>
      <Route path='/mypage' element={<MyPage/>}/>
    </Routes>
    </>
  );
}

export default App;
