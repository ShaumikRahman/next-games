import styles from "../styles/Home.module.scss";
import { useEffect, useState, useRef } from "react";
import Game from "../components/Game";
import Empty from "../components/Empty"
import { useRouter } from "next/router";

export default function Browse() {
  const [games, setGames] = useState([]);
  //const isInitialMount = useRef(true);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("browse") === null) {
      localStorage.setItem("browse", JSON.stringify(games));
    } else {
      setGames(JSON.parse(localStorage.getItem("browse")));
    }
  }, []);

  // useEffect(() => {
  //   console.log(query);
  //   if (isInitialMount.current) {
  //     console.log("first dodged");
  //     isInitialMount.current = false;
  //   } else {

  //   }
  // }, [query]);

  useEffect(() => {
    if (document.getElementById(`${router.asPath.slice(8)}`) !== null) {
      document
        .getElementById(`${router.asPath.slice(8)}`)
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [games]);

  const browse = (q) => `/api/browse?q=${q}`;

  const process = (e) => {
    e.preventDefault();

    let query = escape(
      e.target[0].value.replace(/\s\s+/g, " ").trim().replace(/\s/g, "+")
    );
    //console.log(q);

    console.log("searching");
    fetch(browse(query))
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGames(data.results);
        localStorage.setItem("browse", JSON.stringify(data.results));
      });
  };

  return (
    <div className="container">
      <h1 className="title">Browse</h1>
      <form className={styles.form} onSubmit={(e) => process(e)}>
        <div className="search">
          <input type="text" className={styles.query} placeholder="Search" />
        </div>
        <div className="filters">
          <label htmlFor="ps">PlayStation</label>
          <input type="checkbox" name="1" id="ps" />
        </div>
        <input type="submit" value="Go" className={styles.submit} />
      </form>
      <div className={styles.games}>
        {games.length > 0 ?
          games.map((game, index) => {
            return <Game game={game} key={index} location={'Browse'} />;
          }) : <Empty />}
      </div>
    </div>
  );
}
