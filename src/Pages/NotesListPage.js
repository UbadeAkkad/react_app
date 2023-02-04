import NotesList from "../Components/NoteList";
import { Link } from "react-router-dom";

function NoteListPage() {
    return(
        <>
        <h1> Notes </h1>
        <Link to="/notes/add">
        <button>Add note</button>
        </Link>
        <NotesList/>
        </>
    );
};

export default NoteListPage;