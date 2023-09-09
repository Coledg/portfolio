import { Button } from "@mui/material";
import Photograph from "../components/Photograph";
export default function Show({ photo, backToIndex, deletePhoto }) {
    const handleDelete = async () => {
        const url = `http://localhost:3000/portfolio/${photo._id}`;
        const deleteReq = await fetch(url, { method: "DELETE" });
        const result = await deleteReq.text();
        if (result) {
            deletePhoto();
            backToIndex();
        }
    }
    return (
        <div className="Show">
            <h1>{photo.title}</h1>
            <Photograph photo={photo} selectPhoto={() => { }} />
            <p>- By {photo.photographer}</p>
            <Button sx={{ mx: "5px" }} color="success" variant="outlined" onClick={backToIndex}>Back to Gallery</Button>
            <Button sx={{ mx: "5px" }} color="error" variant="outlined" onClick={handleDelete}>Delete Photo</Button>
        </div>
    );
}