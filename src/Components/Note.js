import React from 'react';

class Note extends React.Component {
    constructor(props){
      super(props);
      this.title = props.title;
      this.body = props.body;
      this.color = props.color;
    };
    render() {
      return(
        <div style={{ backgroundColor: this.color }}>
            <p>{this.title}</p>
            <div>{this.body}</div>
        </div>
    )};
  };


  export default Note;