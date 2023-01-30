import React from 'react';
import Note from "../Components/Note";

class NotesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false
        };
    };

    componentDidMount() {
        fetch("https://ubade.pythonanywhere.com/api/notes", {
        method: "GET",
        headers: {
            "authorization": "bearer " + window.localStorage.getItem("token"),
            "Accept":"application/json",
            "Content-Type": "application/json",
        },
        })
        
        .then((response) => response.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
        })
    }

    render () {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <> <h1> Loading.... </h1> </> ;
        return (
        <div className = "App">
            <button href="">Add new note</button>
            <h1> Notes </h1>  {items.map((item) => ( 
                <Note key={item.id} title={item.title} body={item.body} color={item.color}/>
                ))
            }
        </div>);
        };
};

export default NotesList;