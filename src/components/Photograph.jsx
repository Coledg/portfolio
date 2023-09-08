import './Photograph.css'
export default function Photograph({ photo }) {
    return (
        <div className="Photograph">
            <img src={photo.src}
                alt={photo.alt} />
        </div>
    );
}
