import './App.css';
import HomePage from './pages/homepage'
import DetailPage from './pages/DetailPage'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

        <Route path='/' element={ <HomePage/>} />
        <Route path='/detailpage' element={<DetailPage/>} />
        </Routes>

      </BrowserRouter>
    </div>
  
  );
}

export default App;
