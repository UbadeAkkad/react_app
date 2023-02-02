import React from 'react';
import { Link } from 'react-router-dom'

let updatenote = async (Id ,Title ,Body, Color) => {
    try {
      await fetch("https://ubade.pythonanywhere.com/api/notes/update", {
        method: "PUT",
        body: JSON.stringify({
          id: Id,
          title: Title,
          body: Body,
          color: Color,
        }),
        headers: {
            "authorization": "bearer " + window.localStorage.getItem("token"),
            "Accept":"application/json",
            "Content-Type": "application/json",
        },
      })
        .then((respnose) => respnose.json())
    } catch (error) {
      console.log(error);
    }
  };

class UpdateNote extends React.Component {
    constructor(props){
      super(props);
      this.state = {id: props.id,title: props.title, body: props.body, color: props.color};
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
        updatenote(this.state.id,this.state.title,this.state.body,this.state.color);
        event.preventDefault();
        document.getElementById("redirectToNotes").click()
      }

    render() {
      return(
        <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input name="title" type="text" value={this.state.title} onChange={this.handleChange}/>
        </label>
        <label>
          Description:
          <input name="body" type="text" value={this.state.body} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
        <Link to="/notes" id='redirectToNotes'>
        <button>Cancel</button>
        </Link>
      </form>
    )};
  };

export default UpdateNote;