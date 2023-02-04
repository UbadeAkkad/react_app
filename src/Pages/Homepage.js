import { Link } from 'react-router-dom'
import Logout from '../Components/Logout';

function Homepage() {
    return(
        <>
        <h1>Hello{window.localStorage.getItem("username") ? [", ",window.localStorage.getItem("username"),"!"].join(""): [", ","Stranger!"].join("")}</h1>
        <Link to="/register">
            <span>Register</span>
        </Link>
        <br/>
        <Link to="/login">
            <span>Login</span>
        </Link>
        <br/>
        <Link to="/notes">
            <span>Notes</span>
        </Link>
        <br/>
        <Logout/>
        </>
    );
};

export default Homepage;