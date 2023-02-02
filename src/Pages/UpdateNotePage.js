import UpdateNote from "../Components/UpdateNote";
import { useLocation } from 'react-router-dom'

function UpdateNotePage() {
    const location = useLocation()
    return(
        <>
        <h1>Edit note</h1>
        <UpdateNote title={location.state.title} body={location.state.body} color={location.state.color} id={location.state.id}/>
        </>
    );
};

export default UpdateNotePage;