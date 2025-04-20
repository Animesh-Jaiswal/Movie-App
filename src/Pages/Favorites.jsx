import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

export default function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length) {
    return (
      <div className="favorites">
        <h2>Your Favorites One</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorites Movies Yet</h2>
      <p>Click the heart button in the movie to add here</p>
    </div>
  );
}
