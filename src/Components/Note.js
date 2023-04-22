import React from 'react';
import { Link } from 'react-router-dom'

let deletenote = async (Id) => {
  try {
    await fetch("https://ubade.pythonanywhere.com/api/notes", {
      method: "DELETE",
      body: JSON.stringify({
        id: Id,
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

class Note extends React.Component {
    constructor(props){
      super(props);
      this.title = props.title;
      this.body = props.body;
      this.color = props.color;
      this.id = props.id;
      this.delete_note = this.delete_note.bind(this);
    };

    delete_note(event) {
      event.preventDefault();
      deletenote(this.id)
      window.location.reload(false);
    }

    render() {
      return(
        <div style={{ backgroundColor: this.color }}>
            <p>{this.title}</p>
            <div>{this.body}</div>
            <Link to="/notes">
            <button onClick={this.delete_note} >Delete</button>
            </Link>
            <Link to='/notes/edit' state={{id: this.id, title: this.title, body: this.body, color: this.color}}>
            <button>Edit</button>
            </Link>
        </div>
    )};
  };


  export default Note;