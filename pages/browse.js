import styles from "../styles/Browse.module.scss";
import { useEffect, useState, useRef } from "react";
import Game from "../components/Game";
import Empty from "../components/Empty";
import { useRouter } from "next/router";

export default function Browse() {
  const [games, setGames] = useState([]);
  //const isInitialMount = useRef(true);
  const router = useRouter();
  const platforms = useRef();

  const plats = [
    {
      id: 1,
      name: "PC",
      slug: "pc",
    },
    {
      id: 2,
      name: "PlayStation",
      slug: "playstation",
    },
    {
      id: 3,
      name: "Xbox",
      slug: "xbox",
    },
    {
      id: 7,
      name: "Nintendo",
      slug: "nintendo",
    },
  ];

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

    let query = "";

    let q = escape(
      e.target[0].value.replace(/\s\s+/g, " ").trim().replace(/\s/g, "+")
    );

    if (q.length) {
      query += q;
    }

    let platforms = "";

    for (let i = 1; i < e.target.length - 1; i++) {
      if (e.target[i].checked) {
        platforms += `${e.target[i].id},`;
      }
    }

    if (platforms.length) {
      query += `&parent_platforms=${platforms.slice(0, -1)}`;
    }

    // console.log(query);

    console.log("searching");
    fetch(browse(query))
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);
          setGames(data.results);
          localStorage.setItem("browse", JSON.stringify(data.results));
        } else {
          console.log("no data");
        }
      });
  };

  return (
    <div className="container">
      <h1 className="title">Browse</h1>
      <form className={styles.form} onSubmit={(e) => process(e)}>
        <div className="search">
          <input type="text" className={styles.query} placeholder="Search" />
        </div>
        <div className={styles.filters}>
          <h2
            onClick={() => {
              platforms.current.classList.toggle("fade");
              //desc.current.classList.toggle("hide");
            }}
            className={styles.summary}
          >
            Filters
          </h2>
          <div className={styles.platforms} ref={platforms} id="platforms">
            {plats.map((platform) => {
              return (
                <div className={styles.platform} key={platform.id}>
                  <label className={styles.label} htmlFor={platform.id}>{platform.name}</label>
                  <input
                    type="checkbox"
                    name={platform.name}
                    id={platform.id}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <input type="submit" value="Go" className={styles.submit} />
      </form>
      <div className={styles.games}>
        {games.length > 0 ? (
          games.map((game, index) => {
            return <Game game={game} key={index} location={"Browse"} />;
          })
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
}
