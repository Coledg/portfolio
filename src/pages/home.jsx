import Photograph from "../components/Photograph";
export default function Home({ photos }) {
    return (
        <div className="Home">
            <h1>Home page</h1>
            {photos.map((p, idx) => <Photograph key={idx} photo={p} />)}
        </div>
    );
}