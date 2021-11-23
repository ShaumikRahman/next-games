import styles from "../styles/Home.module.scss";
import { useEffect, useState, useRef } from "react";
import Game from "../components/Game";
import DoubleButtons from "../components/DoubleButtons"
import Empty from "../components/Empty";
import { useRouter } from "next/router";
import Head from 'next/head'

export default function Home({ games }) {
  // const [games, setGames] = useState([]);
  //const [query, setQuery] = useState("");
  // const isInitialMount = useRef(true);
  // const router = useRouter();

  // useEffect(() => {
  //   if (localStorage.getItem("games") === null) {
  //     localStorage.setItem("games", JSON.stringify(games));
  //   } else {
  //     setGames(JSON.parse(localStorage.getItem("games")));
  //   }
  // }, []);

  // useEffect(() => {
  //   if (isInitialMount.current) {
  //     console.log("first dodged");
  //     isInitialMount.current = false;
  //   } else {
  //     if (query.length > 0) {
  //       console.log("searching");
  //       fetch(search(query))
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log(data);
  //           setGames(data.results);
  //           localStorage.setItem("games", JSON.stringify(data.results));
  //         });
  //     }
  //   }
  // }, [query]);

  // useEffect(() => {
  //   if (document.getElementById(`${router.asPath.slice(2)}`) !== null) {
  //     document
  //       .getElementById(`${router.asPath.slice(2)}`)
  //       .scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [games]);

  // const search = (q) => `/api/search?q=${q}`;

  // const process = (e) => {
  //   e.preventDefault();

  //   let q = escape(
  //     e.target[0].value.replace(/\s\s+/g, " ").trim().replace(/\s/g, "+")
  //   );
  //   //console.log(q);
  //   if (q.length) {
  //     setQuery(q);
  //   } else {
  //     console.log("invalid");
  //   }
  // };

  return (
    <div className="container">
      <Head>
        <title>
          Next Games
        </title>
        <meta name="description" content="Games" />
      </Head>
      <h1 className="title">Next Games</h1>
      {/* <form className={styles.form} onSubmit={(e) => process(e)}>
        <input type="text" className={styles.query} placeholder="Search" />
        <DoubleButtons />
      </form> */}
      <h2 className={styles.miniTitle}>
        Popular
      </h2>
      <div className={styles.games}>
        {games.length > 0 ? (
          games.map((game, index) => {
            return <Game game={game} key={index} location={"Home"} />;
          })
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {

  const date = new Date;
  let dates = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()},${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;

  if (date.getMonth() === 1) {
    dates = `${date.getFullYear()-1}-${date.getMonth()}-${date.getDate()},${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
  }

  // const res = await fetch(`https://rawg.io/api/games?key=${process.env.KEY}&dates=${january ? date.getFullYear() - 1 : date.getFullYear()}-${date.getMonth() - 1}-${date.getDate()},${date.getFullYear()}-${date.getMonth()}-${date.getDate()}&ordering=-added&page_size=15`);

  const res = await fetch(`https://rawg.io/api/games?key=${process.env.KEY}&dates=${dates}&ordering=-added&page_size=15`);

  const data = await res.json();

  return {
    props : {
      games: data.results
    },
    revalidate: 300
  }
}