import styles from "../styles/Browse.module.scss";
import { useEffect, useState, useRef } from "react";
import Game from "../components/Game";
import Empty from "../components/Empty";
import FilterBox from "../components/FilterBox";
import DoubleButtons from "../components/DoubleButtons";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Browse() {
  const [games, setGames] = useState([]);
  //const isInitialMount = useRef(true);
  const router = useRouter();
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

  const tags = [
    {
      id: 31,
      name: "Singleplayer",
      slug: "singleplayer",
    },
    {
      id: 40847,
      name: "Steam Achievements",
      slug: "steam-achievements",
    },
    {
      id: 7,
      name: "Multiplayer",
      slug: "multiplayer",
    },
    {
      id: 7808,
      name: "steam-trading-cards",
      slug: "steam-trading-cards",
    },
    {
      id: 13,
      name: "Atmospheric",
      slug: "atmospheric",
    },
    {
      id: 40849,
      name: "Steam Cloud",
      slug: "steam-cloud",
    },
    {
      id: 40836,
      name: "Full controller support",
      slug: "full-controller-support",
    },
    {
      id: 42,
      name: "Great Soundtrack",
      slug: "great-soundtrack",
    },
    {
      id: 24,
      name: "RPG",
      slug: "rpg",
    },
    {
      id: 18,
      name: "Co-op",
      slug: "co-op",
    },
    {
      id: 118,
      name: "Story Rich",
      slug: "story-rich",
    },
    {
      id: 36,
      name: "Open World",
      slug: "open-world",
    },
    {
      id: 411,
      name: "cooperative",
      slug: "cooperative",
    },
    {
      id: 8,
      name: "First-Person",
      slug: "first-person",
    },
    {
      id: 32,
      name: "Sci-fi",
      slug: "sci-fi",
    },
    {
      id: 149,
      name: "Third Person",
      slug: "third-person",
    },
    {
      id: 45,
      name: "2D",
      slug: "2d",
    },
    {
      id: 40845,
      name: "Partial Controller Support",
      slug: "partial-controller-support",
    },
    {
      id: 16,
      name: "Horror",
      slug: "horror",
    },
    {
      id: 30,
      name: "FPS",
      slug: "fps",
    },
    {
      id: 4,
      name: "Funny",
      slug: "funny",
    },
    {
      id: 9,
      name: "Online Co-Op",
      slug: "online-co-op",
    },
    {
      id: 64,
      name: "Fantasy",
      slug: "fantasy",
    },
    {
      id: 40850,
      name: "Steam Leaderboards",
      slug: "steam-leaderboards",
    },
    {
      id: 49,
      name: "Difficult",
      slug: "difficult",
    },
    {
      id: 193,
      name: "Classic",
      slug: "classic",
    },
    {
      id: 26,
      name: "Gore",
      slug: "gore",
    },
    {
      id: 37,
      name: "Sandbox",
      slug: "sandbox",
    },
    {
      id: 189,
      name: "Female Protagonist",
      slug: "female-protagonist",
    },
    {
      id: 1,
      name: "Survival",
      slug: "survival",
    },
    {
      id: 6,
      name: "Exploration",
      slug: "exploration",
    },
    {
      id: 123,
      name: "Comedy",
      slug: "comedy",
    },
    {
      id: 15,
      name: "Stealth",
      slug: "stealth",
    },
    {
      id: 79,
      name: "Free to Play",
      slug: "free-to-play",
    },
    {
      id: 75,
      name: "Local Co-Op",
      slug: "local-co-op",
    },
    {
      id: 198,
      name: "Split Screen",
      slug: "split-screen",
    },
    {
      id: 34,
      name: "Violent",
      slug: "violent",
    },
    {
      id: 397,
      name: "Online multiplayer",
      slug: "online-multiplayer",
    },
    {
      id: 80,
      name: "Tactical",
      slug: "tactical",
    },
    {
      id: 115,
      name: "Controller",
      slug: "controller",
    },
  ];

  const consoles = [
    {
      id: 4,
      name: "PC",
      slug: "pc",
    },
    {
      id: 27,
      name: "PlayStation",
      slug: "playstation1",
    },
    {
      id: 15,
      name: "PlayStation 2",
      slug: "playstation2",
    },
    {
      id: 16,
      name: "PlayStation 3",
      slug: "playstation3",
    },
    {
      id: 18,
      name: "PlayStation 4",
      slug: "playstation4",
    },
    {
      id: 187,
      name: "PlayStation 5",
      slug: "playstation5",
    },
    {
      id: 17,
      name: "PSP",
      slug: "psp",
    },
    {
      id: 19,
      name: "PS Vita",
      slug: "ps-vita",
    },
    {
      id: 14,
      name: "Xbox 360",
      slug: "xbox360",
    },
    {
      id: 1,
      name: "Xbox One",
      slug: "xbox-one",
    },
    {
      id: 9,
      name: "Nintendo DS",
      slug: "nintendo-ds",
    },
    {
      id: 8,
      name: "Nintendo 3DS",
      slug: "nintendo-3ds",
    },
    {
      id: 7,
      name: "Nintendo Switch",
      slug: "nintendo-switch",
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

    console.log(e);

    // query 

    let query = "";
    let q = escape(
      e.target[0].value.replace(/\s\s+/g, " ").trim().replace(/\s/g, "+")
    );
    if (q.length) {
      query += q;
    }

    // platforms
    let platforms = "";
    for (let i = 1; i < 1 + plats.length; i++) {
      if (e.target[i].checked) {
        platforms += `${e.target[i].dataset.infoid},`;
      }
    }
    if (platforms.length) {
      query += `&parent_platforms=${platforms.slice(0, -1)}`;
    }

    // platforms
    let consoleString = "";
    for (let i = 1 + plats.length; i < 1 + plats.length + consoles.length; i++) {
      if (e.target[i].checked) {
        consoleString += `${e.target[i].dataset.infoid},`;
      }
    }
    if (consoleString.length) {
      query += `&platforms=${consoleString.slice(0, -1)}`;
    }

    // genres

    let genresString = "";
    for (
      let i = 1 + plats.length + consoles.length;
      i < 1 + plats.length + consoles.length + genresArray.length;
      i++
    ) {
      if (e.target[i].checked) {
        genresString += `${e.target[i].dataset.infoid},`;
      }
    }
    if (genresString.length) {
      query += `&genres=${genresString.slice(0, -1)}`;
    }

    // tags

    let tagsString = "";
    for (
      let i = 1 + plats.length + consoles.length + genresArray.length;
      i < 1 + plats.length + consoles.length + genresArray.length + tags.length;
      i++
    ) {
      if (e.target[i].checked) {
        tagsString += `${e.target[i].dataset.infoid},`;
      }
    }
    if (tagsString.length) {
      query += `&tags=${tagsString.slice(0, -1)}`;
    }

    //console.log(genresString);

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
      <Head>
        <title>Browse</title>
        <meta name="description" content="Browse games using filters" />
      </Head>
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
          <FilterBox title="platforms" data={plats} />
          <FilterBox title="consoles" data={consoles} />
          <FilterBox title="genres" data={genresArray} />
          <FilterBox title="tags" data={tags} />
        </div>
        <div className={styles.buttons + " top"}>
          <DoubleButtons />
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
