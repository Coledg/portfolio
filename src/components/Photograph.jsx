import './Photograph.css'
export default function Photograph({ photo, selectPhoto }) {
    return (
        <div className="Photograph" onClick={selectPhoto}>
            <img src={photo.src}
                alt={photo.alt} />
        </div>
    );
}
