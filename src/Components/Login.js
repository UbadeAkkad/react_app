import React from 'react';
import { Link } from 'react-router-dom'

class Login extends React.Component {
    constructor(props){
      super(props);
      this.state = {username: '', password: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginuser = this.loginuser.bind(this);
    };
    
    loginuser = async (UserName,Password) => {
      try {
        await fetch("https://ubade.pythonanywhere.com/api/login", {
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
          .then((respnose) => { window.localStorage.setItem("token", respnose["token"])
                                window.localStorage.setItem("username", respnose["username"])});    // save token to local storage under "token" key
      } catch (error) {
        console.log(error);
      }
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
        this.loginuser(this.state.username,this.state.password);
        event.preventDefault();
        document.getElementById("redirectToHomepage").click()
      }

    render() {
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
        <Link to="/" id='redirectToHomepage'/>
      </form>
    )};
  };

export default Login;