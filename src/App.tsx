import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage';
import AparelhosPage from 'pages/aparelhosPage';
import DetalhesPage from 'pages/detalhesAparelhosPage';
import SobrePage from 'pages/sobrePage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/aparelhos" element={<AparelhosPage/>} />
        <Route path="/aparelhos/:id" element={<DetalhesPage/>}/>
        <Route path="/sobre" element={<SobrePage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;