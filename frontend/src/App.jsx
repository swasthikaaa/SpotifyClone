import Sidebar from './components/Sidebar';
import Player from './components/Player';
import BottomNav from './components/BottomNav'; // Import
import DisplayHome from './components/DisplayHome';
import DisplayAlbum from './components/DisplayAlbum';
import DisplayPlaylist from './components/DisplayPlaylist';
import DisplayArtist from './components/DisplayArtist'; // Import
import Profile from './pages/Profile';
import Subscription from './pages/Subscription';
import Search from './pages/Search';
import Library from './pages/Library'; // Import
import Login from './pages/Login';
import Register from './pages/Register';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  useEffect(() => {
    const token = localStorage.getItem('spotify_token');
    if (!token && !isAuthPage) {
      navigate('/login');
    }
  }, [location, navigate, isAuthPage]);

  if (isAuthPage) {
    return (
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    )
  }

  return (
    <div className='app-container'>
      <div className='main-flex'>
        <Sidebar />
        <div className='display-area'>
          <Routes>
            <Route path='/' element={<DisplayHome />} />
            <Route path='/album/:id' element={<DisplayAlbum />} />
            <Route path='/playlist/:id' element={<DisplayPlaylist />} />
            <Route path='/artist/:name' element={<DisplayArtist />} /> {/* New Route */}
            <Route path='/profile' element={<Profile />} />
            <Route path='/search' element={<Search />} />
            <Route path='/library' element={<Library />} /> {/* New Route */}
          </Routes>
        </div>
      </div>
      <Player />
      <BottomNav />
    </div>
  )
}

export default App;
