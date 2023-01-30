import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Outlet } from 'react-router-dom'

import LoginPage from './Pages/LoginPage';
import NotesList from './Pages/NotesList';


const router = createBrowserRouter([
  {
    path: "/",
    element: (<Outlet />),
    children: [
      {
        path: "/",
        element: <h1>hello shit head</h1>,
      },
      {
        path: "/login",
        element: <LoginPage/>,
      },
      {
        path: "/notes",
        element: <NotesList/>,
        children: [
          {
            path: "/notes/add",
            element: <LoginPage/>,
          },
        ]
      },
    ],
  },
]);
function App() {
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  );
}

export default App;