import './App.css';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { Outlet, Link } from 'react-router-dom'


import LoginPage from './Pages/LoginPage';
import NotesList from './Pages/NotesList';


const router = createHashRouter([
  {
    path: "/",
    element: (<Outlet />),
    children: [
      {
        path: "/",
        element: <>
        <h1>hello</h1>
        <Link to="/login">
            <a>Login</a>
        </Link>
        <br/>
        <Link to="/notes">
            <a>Notes</a>
        </Link>
        </>,
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