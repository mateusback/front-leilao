import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout';
import SimpleLayout from './components/SimpleLayout';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import PasswordRecovery from './pages/password-recovery/PasswordRecovery';
import ChangePassword from './pages/change-password/ChangePassword';
import { ROUTES } from './routes';
import AuthLayout from './components/AuthLayout';

function App() {
  return (
   <>
   {/* <Header /> */}
   <BrowserRouter>
   <Routes>
      <Route path= {ROUTES.HOME} element={<DefaultLayout><Home/></DefaultLayout>}/>
      <Route path= {ROUTES.LOGIN} element={<AuthLayout><Login/></AuthLayout>} />
      <Route path= {ROUTES.REGISTER} element={<AuthLayout><Register/></AuthLayout>} />
      <Route path= {ROUTES.PASSWORD_RECOVERY} element={<AuthLayout><PasswordRecovery/></AuthLayout>} />
      <Route path= {ROUTES.CHANGE_PASSWORD} element={<AuthLayout><ChangePassword/></AuthLayout>} />
    </Routes>
    </BrowserRouter>
    {/* <Footer /> */}
   </>
  );
}

export default App;
