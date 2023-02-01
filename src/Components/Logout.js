import { Link } from 'react-router-dom'

let logout = async () => {
    try {
      await fetch("https://ubade.pythonanywhere.com/api/logout", {
        method: "POST",
        headers: {
            "authorization": "bearer " + window.localStorage.getItem("token"),
            "Accept":"application/json",
            "Content-Type": "application/json",
        },
      })
        .then(() => { window.localStorage.removeItem("token")
                      window.localStorage.removeItem("username")});
    } catch (error) {
      console.log(error);
    }
  };

function Logout() {
      return(
        <Link to="/">
            <button onClick={logout}>Logout</button>
        </Link>
    )};

export default Logout;