import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './layout/Root';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './Contexts/AuthProvider';
import MyProfile from './Profile/MyProfile';
import PrivateRoute from './Routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index:true,
        Component: Home,
      },
      {
        path:"/login",
        Component: Login,
      },
      {
        path:"/signup",
        Component: SignUp,
      },
            {
        path:"/profile",
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
