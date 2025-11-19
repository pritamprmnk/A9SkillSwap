import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './layout/Root';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import MyProfile from './Profile/MyProfile';
import SkillDetails from './components/SkillDetails/SkillDetails';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Routes/PrivateRoute';
import { Toaster } from "react-hot-toast";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, 
        element: <Home />
      },
      { path: "/login", 
        element: <Login /> 
      },
      { path: "/signup", 
        element: <SignUp /> 
      },
      { path: "/forgot", 
        element: <PrivateRoute>
                <ForgotPassword /> 
                </PrivateRoute>
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/skill/:id",
        element: (
          <PrivateRoute>
            <SkillDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Toaster position="bottom-right" />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
