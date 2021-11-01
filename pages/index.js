import styles from "../styles/Home.module.scss";
import { useEffect, useState, useRef } from "react";
import Game from "../components/Game";

export default function Home() {
  const [games, setGames] = useState([]);
  const [query, setQuery] = useState("");
  const isInitialMount = useRef(true);

  const search = (q) => `/api/search?q=${q}`;

  const process = (e) => {
    e.preventDefault();
    let q = escape(
      e.target[0].value.replace(/\s\s+/g, " ").trim().replace(/\s/g, "+")
    );
    //console.log(q);
    if (q.length) {
      setQuery(q);
    } else {
      console.log("invalid");
    }
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      fetch(search(query))
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setGames(data.results);
        });
    }
  }, [query]);

  return (
    <div className="container">
      <h1 className="title">Next Games</h1>
      <form className={styles.form} onSubmit={(e) => process(e)}>
        <input type="text" className={styles.query} placeholder="Search" />
        <input type="submit" value="Go" className={styles.submit} />
      </form>
      <div className={styles.games}>
        {games.length > 0 &&
          games.map((game, index) => {
            return <Game game={game} key={index} />;
          })}
      </div>
    </div>
  );
}
