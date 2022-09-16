import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage';
import Navbar from './components/Navbar/Navbar';
import CalendarModal from './components/CalendarModal/CalendarModal';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/booking' element={<CalendarModal />} />
      </Routes>
      <span className='test1'>Test Text</span>
      <span className='test2'>Test Text</span>
      <span className='test3'>Test Text</span>
    </BrowserRouter>
  );
}

export default App;
