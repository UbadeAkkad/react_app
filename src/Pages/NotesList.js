import React from 'react';
import Note from "../Components/Note";
import { Link, Navigate } from 'react-router-dom'

class NotesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false,
            Unauthorized: false
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
        .then((response) => {
            if (response.status === 401) {
                this.setState({Unauthorized: true})
            } else if (response.status === 200) {
                return response
            }
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
        const { DataisLoaded, items, Unauthorized } = this.state;
        if (Unauthorized) return <Navigate to="/login" replace={true} />
        if (!DataisLoaded) return <> <h1> Loading.... </h1> </>;
        return (
        <div className = "App">
            <Link to="/notes/add">
            <button>Add note</button>
            </Link>
            <h1> Notes </h1>  {items.map((item) => ( 
                <Note key={item.id} title={item.title} body={item.body} color={item.color}/>
                ))
            }
        </div>);
        };
};

export default NotesList;