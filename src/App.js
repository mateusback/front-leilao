import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import PasswordRecovery from './pages/password-recovery/PasswordRecovery';
import ChangePassword from './pages/change-password/ChangePassword';
import { ROUTES } from './routes';
import PrivateRouter from './components/PrivateRouter';
import Profile from './pages/profile/Profile';
import EditProfile from './pages/profile/EditProfile';
import { ToastContainer } from 'react-toastify';
import ConfirmEmail from './pages/confirm-email/ConfirmEmail';
import AuctionForm from './pages/auction/auction-form/AuctionForm';
import CategoryForm from './pages/category/category-form/CategoryForm';
import ItemDetails from './pages/auction/item-details/ItemDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRouter />}>
            <Route path={ROUTES.HOME} element={<DefaultLayout><Home /></DefaultLayout>} />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
            <Route path={ROUTES.EDIT_PROFILE} element={<EditProfile  />} />
            <Route path={ROUTES.CATEGORY_FORM} element={<DefaultLayout><CategoryForm  /></DefaultLayout>} />
            <Route path={ROUTES.AUCTION_FORM} element={<DefaultLayout><AuctionForm  /></DefaultLayout>} />
            <Route path={`${ROUTES.ITEM_DETAILS}/:itemId`} element={<DefaultLayout><ItemDetails  /></DefaultLayout>} />
          </Route>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
          <Route path={ROUTES.PASSWORD_RECOVERY} element={<PasswordRecovery />} />
          <Route path={ROUTES.CHANGE_PASSWORD} element={<ChangePassword />} />
          <Route path={ROUTES.CONFIRM_EMAIL} element={<ConfirmEmail />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
