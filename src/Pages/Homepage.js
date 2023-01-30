import { Link } from 'react-router-dom'

function Homepage() {
    return(
        <>
        <h1>Hello</h1>
        <Link to="/register">
            <a>Register</a>
        </Link>
        <br/>
        <Link to="/login">
            <a>Login</a>
        </Link>
        <br/>
        <Link to="/notes">
            <a>Notes</a>
        </Link>
        </>
    );
};

export default Homepage;