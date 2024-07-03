# 미니 영화 목록 프로젝트

## React-Router-Dom

```js
// App.js
import React from "react";
import Home from "./routes/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
```

```js
// Home.js - 영화 목록들 출력
import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => getMovies(), []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        // movie Key값 가지는 이유. map안이라서
        movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
          />
        ))
      )}
    </div>
  );
};

export default Home;
```

```js
// Detail.js
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
```

모든 부분은 v5 기준으로 작성됨
