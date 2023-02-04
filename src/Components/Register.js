import React from 'react';
import { Navigate, Link } from 'react-router-dom'

let registeruser = async (UserName,Password) => {
    try {
      await fetch("https://ubade.pythonanywhere.com/api/register", {
        method: "POST",
        body: JSON.stringify({
          username: UserName,
          password: Password,
        }),
        headers: {
            "Accept":"application/json",
            "Content-Type": "application/json",
        },
      })
        .then((respnose) => respnose.json())
        .then((respnose) => window.localStorage.setItem("token", respnose["token"]));    // save token to local storage under "token" key
    } catch (error) {
      console.log(error);
    }
  };

class Register extends React.Component {
    constructor(props){
      super(props);
      this.state = {username: '', password: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    };
      
    handleChange(event) {
        const target = event.target;
        const value =target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    handleSubmit(event) {
        registeruser(this.state.username,this.state.password);
        event.preventDefault();
        document.getElementById("redirectToHomepage").click()
      }

    render() {
      if (window.localStorage.getItem("token")) return <Navigate to="/" replace={true} />
      return(
        <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
        </label>
        <label>
          Password:
          <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
        <Link to="/" id='redirectToHomepage'>
        <button>Cancel</button>
        </Link>
      </form>
    )};
  };

export default Register;