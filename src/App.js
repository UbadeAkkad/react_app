import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Outlet } from 'react-router-dom'

import Homepage from './Pages/Homepage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import NotesList from './Pages/NotesList';
import AddNotePage from './Pages/AddNotePage';
import ConvertGuestPage from './Pages/ConvertGuestPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: (<Outlet />),
    children: [
      {
        path: "/",
        element: <Homepage/>,
      },
      {
        path: "/login",
        element: <LoginPage/>,
      },
      {
        path: "/convertguest",
        element: <ConvertGuestPage/>,
      },
      {
        path: "/register",
        element: <RegisterPage/>,
      },
      {
        path: "/notes",
        element: <NotesList/>,
      },
      {
        path: "/notes/add",
        element: <AddNotePage/>,
      },
    ],
  },
],{basename: "/react",});
function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;