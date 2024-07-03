import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    await setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>Detail</h1>
      <section>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h3>{movie.title}</h3>
            <img src={movie.medium_cover_image} alt={movie.title} />
          </div>
        )}
      </section>
    </div>
  );
};

export default Detail;
