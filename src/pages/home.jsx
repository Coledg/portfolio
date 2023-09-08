import Photo from "../components/Photo";
export default function Home({ photos }) {
    return (
        <div className="Home">
            <h1>Home page</h1>
            {photos.map((p, idx) => <Photo key={idx} photo={p} />)}
        </div>
    );
}