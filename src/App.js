import './App.css';
import HomePage from './pages/homepage'
import DetailPage from './pages/DetailPage'
import QAPage from './pages/QAPage'
import PaymentPage from './pages/PaymentPage'
import FeedbackPage from './pages/FeedbackPage'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

        <Route path='/' element={ <HomePage/>} />
        <Route path='/detailpage' element={<DetailPage/>} />
        <Route path='/qapage' element={<QAPage/>} />
        <Route path='/paymentpage' element={<PaymentPage/>} />
        <Route path='/feedbackpage' element={<FeedbackPage/>} />
        </Routes>

      </BrowserRouter>
    </div>
  
  );
}

export default App;
