import { Link } from 'react-router-dom'

let guestlogin = async () => {
    try {
      await fetch("https://ubade.pythonanywhere.com/api/guestlogin", {
        method: "POST",
        headers: {
            "Accept":"application/json",
            "Content-Type": "application/json",
        },
      })
        .then((respnose) => respnose.json())
        .then((respnose) => { window.localStorage.setItem("token", respnose["token"])
                              window.localStorage.setItem("username", "Guest")});
    } catch (error) {
      console.log(error);
    }
  };

function GuestLogin() {
      return(
        <Link to="/">
            <span onClick={guestlogin}>Continue as a guest</span>
        </Link>
    )};

export default GuestLogin;