import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage/DashboardPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to="/dashboard" element={<DashboardPage />} />} />
        <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>
      <span className='test1'>Test Text</span>
      <span className='test2'>Test Text</span>
      <span className='test3'>Test Text</span>
    </BrowserRouter>
  );
}

export default App;
