import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage/DashboardPage';
import Navbar from './components/Navbar/Navbar';
import CalendarModal from './components/CalendarModal/CalendarModal';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to="/dashboard" element={<DashboardPage />} />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/booking' element={<CalendarModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
