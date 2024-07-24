import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  return (
   <>
   <Header />
   <BrowserRouter>
   <Routes>
      <Route path="/" Component={Home} />
      <Route path="/login" Component={Login} />
      </Routes>
    </BrowserRouter>
    <Footer />
   </>
  );
}

export default App;
