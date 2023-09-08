import Photograph from "../components/Photograph";
import { useState, useEffect } from "react";

export default function Home() {
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
            <h1>Home page</h1>
            {!isLoading && photos.map(p => <Photograph key={p._id} photo={p} />)}
        </div>
    );
}