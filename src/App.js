import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import NotFoundPage from './pages/NotFoundpage/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Moviepage from './pages/Movies/Moviepage';

// 홈페이지 /
// 영화 전체 보여주기 /movies
// 영화 디테일 페이지 /movies/id
function App() {
  return (
  <Routes>
    <Route path='/' element={<AppLayout/>}>
        <Route index element={<Homepage/>}/>
        <Route path='movies'>
          <Route index element={<Moviepage/>}/>
          <Route path=':id' element={<MovieDetail/>}/>
        </Route>
    </Route>
    <Route path='*' element={<NotFoundPage/>}/>
  </Routes>
  );
}

export default App;
