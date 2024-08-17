import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import PasswordRecovery from './pages/password-recovery/PasswordRecovery';
import ChangePassword from './pages/change-password/ChangePassword';
import { ROUTES } from './routes';

function App() {
  return (
   <>
   {/* <Header /> */}
   <BrowserRouter>
   <Routes>
      <Route path= {ROUTES.HOME} element={<DefaultLayout><Home/></DefaultLayout>}/>
      <Route path= {ROUTES.LOGIN} element={<Login/>} />
      <Route path= {ROUTES.REGISTER} element={<Register/>} />
      <Route path= {ROUTES.PASSWORD_RECOVERY} element={<PasswordRecovery/>} />
      <Route path= {ROUTES.CHANGE_PASSWORD} element={<ChangePassword/>} />
    </Routes>
    </BrowserRouter>
    {/* <Footer /> */}
   </>
  );
}

export default App;
