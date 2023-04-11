import './App.css';
import Companies from './pages/Companies';
import Header from './components/Header';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

function App() {
          return (
            <BrowserRouter>
              <Header>
                <Routes>
                  <Route path="/Companies" element={<Companies />} />
                  {/* <Route path="/Team" element={<Companies />} /> */}
                </Routes>
              </Header>
            </BrowserRouter>
          );
}

export default App;
