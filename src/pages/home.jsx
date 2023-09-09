import Photograph from "../components/Photograph";
import Show from "./Show";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";

export default function Home({ addItem }) {
    const [photos, setPhotos] = useState(new Array());
    const [photo, setPhoto] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [viewPhoto, setViewPhoto] = useState(false);
    useEffect(() => {
        async function loadPhoto() {
            const url = 'http://localhost:3000/portfolio';
            const fetchRes = await fetch(url, { method: 'GET' });
            const result = await fetchRes.json();
            setPhotos(result.photos);
            setIsLoading(false);
        }
        loadPhoto();
    }, [])
    const viewOnePhoto = (id) => {
        setPhoto(photos.find(p => p._id === id));
        setViewPhoto(true);
    }
    const backToIndex = () => {
        setViewPhoto(false);
    }
    const deletePhoto = (id) => {
        setPhotos(curr => curr.filter(p => p._id !== id));
    }
    return (
        <div className="Home">
            {!viewPhoto && <div>
                {<h1>My Gallery</h1>}
                {<Button variant="outlined" onClick={addItem}>Add photo</Button>}
                {!isLoading && photos.map(p => <Photograph key={p._id} photo={p} selectPhoto={() => viewOnePhoto(p._id)} />)}
            </div>}
            {viewPhoto && <Show photo={photo} backToIndex={backToIndex} deletePhoto={() => deletePhoto(photo._id)} />}
        </div >
    );
}