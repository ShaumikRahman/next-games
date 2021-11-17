import styles from "../../styles/SingleGame.module.scss";
import Link from "next/link";
import Head from "next/head";
import InfoBox from "../../components/InfoBox";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function SingleGame({ game }) {
  const desc = useRef();
  const router = useRouter();
  console.log(game);

  const from = router.query.from;

  const fields = ["developers", "publishers", "ratings", "genres", "platforms"];

  return (
    <div className="container">
      <Head>
        <title>{game.name}</title>
        <meta name="description" content={`Information for ${game.name}`} />
      </Head>
      <Link href={from === 'Home' ? `/#${game.id}` : `/browse#${game.id}`}>
        <h1 className={styles.return}>Return</h1>
      </Link>
      <div className={styles.game}>
        <h1 className={styles.title}>{game.name}</h1> 
        <img
          className={styles.image}
          src={game.background_image}
          alt={game.slug}
        />
        <p className={styles.released}>Released {game.released}</p>
        {/* <div className={styles.descBox}>
          <h2
            onClick={() => {
              desc.current.classList.toggle("fade");
              //desc.current.classList.toggle("hide");
            }}
            className={styles.summary}
          >
            Description
          </h2>
          <p ref={desc} className={`${styles.desc}`}>
            {game.description_raw}
          </p>
        </div> */}
        <div className={styles.infoBoxes}>
          {fields.map((field, index) => {
            return (
              <InfoBox key={index} target={field} info={game[field]}></InfoBox>
            );
          })}
        </div>
        <Link href={`/screenshots/${game.slug}`}>
          <h1 className={styles.screenshots}>Screenshots</h1>
        </Link>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://rawg.io/api/games/${context.query.slug}?key=${process.env.KEY}`
  );

  const data = await response.json();

  return {
    props: {
      game: data,
    },
  };
}
