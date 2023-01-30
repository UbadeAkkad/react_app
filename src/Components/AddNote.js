import React from 'react';
import { Link } from 'react-router-dom'

let addnote = async (Title,Body) => {
    try {
      await fetch("https://ubade.pythonanywhere.com/api/notes/add", {
        method: "POST",
        body: JSON.stringify({
          title: Title,
          body: Body,
          color: "defualt",
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

class AddNote extends React.Component {
    constructor(props){
      super(props);
      this.state = {title: '', body: ''};
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
        addnote(this.state.title,this.state.body);
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

export default AddNote;