import Photograph from "../components/Photograph";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";

export default function Home({ addItem }) {
    const [photos, setPhotos] = useState(new Array());
    const [isLoading, setIsLoading] = useState(true);
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
    return (
        <div className="Home">
            <h1>Portfolio</h1>
            <Button variant="outlined" onClick={addItem}>Add photo</Button>
            {!isLoading && photos.map(p => <Photograph key={p._id} photo={p} />)}
        </div>
    );
}