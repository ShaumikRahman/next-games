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
  const genres = useRef();
  const filters = useRef();

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

  const genresArray = [
    {
      id: 4,
      name: "Action",
      slug: "action",
    },
    {
      id: 51,
      name: "Indie",
      slug: "indie",
    },
    {
      id: 3,
      name: "Adventure",
      slug: "adventure",
    },
    {
      id: 5,
      name: "RPG",
      slug: "role-playing-games-rpg",
    },
    {
      id: 10,
      name: "Strategy",
      slug: "strategy",
    },
    {
      id: 2,
      name: "Shooter",
      slug: "shooter",
    },
    {
      id: 40,
      name: "Casual",
      slug: "casual",
    },
    {
      id: 14,
      name: "Simulation",
      slug: "simulation",
    },
    {
      id: 7,
      name: "Puzzle",
      slug: "puzzle",
    },
    {
      id: 11,
      name: "Arcade",
      slug: "arcade",
    },
    {
      id: 83,
      name: "Platformer",
      slug: "platformer",
    },
    {
      id: 1,
      name: "Racing",
      slug: "racing",
    },
    {
      id: 59,
      name: "Massively Multiplayer",
      slug: "massively-multiplayer",
    },
    {
      id: 15,
      name: "Sports",
      slug: "sports",
    },
    {
      id: 6,
      name: "Fighting",
      slug: "fighting",
    },
    {
      id: 17,
      name: "Card",
      slug: "card",
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
        <h2
          onClick={() => {
            filters.current.classList.toggle("fade");
          }}
          className={styles.clickTitle}
        >
          Filters
        </h2>
        <div className={styles.filters} ref={filters} id="filters">
          <h3
            className={styles.clickTitle}
            onClick={() => {
              platforms.current.classList.toggle("fade");
            }}
          >
            Platforms
          </h3>

          <div className={styles.platforms} ref={platforms} id="platforms">
            {plats.map((platform) => {
              return (
                <div className={styles.platform} key={platform.id}>
                  <label className={styles.label} htmlFor={platform.slug}>
                    {platform.name}
                  </label>
                  <input
                    type="checkbox"
                    name={platform.name}
                    id={platform.slug}
                  />
                </div>
              );
            })}
          </div>
          <h3
            className={styles.clickTitle}
            onClick={() => {
              genres.current.classList.toggle("fade");
            }}
          >
            Genres
          </h3>
          <div className={styles.genres} ref={genres} id="genres">
            {genresArray.map((genre) => {
              return (
                <div className={styles.genre} key={genre.id}>
                  <label className={styles.label} htmlFor={genre.slug}>
                    {genre.name}
                  </label>
                  <input type="checkbox" name={genre.name} id={genre.slug} />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <input type="submit" value="Go" className={styles.submit} />
        </div>
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
