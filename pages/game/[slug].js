import styles from "../../styles/SingleGame.module.scss";
import Link from "next/link";
import Head from "next/head";
import InfoBox from "../../components/InfoBox";

export const SingleGame = ({ game }) => {
  console.log(game);

  const fields = ["developers", "publishers", "ratings", "genres", "platforms"];

  return (
    <div className="container">
      <Head>
        <title>{game.name}</title>
        <meta name="description" content={`Information for ${game.name}`} />
      </Head>
      <Link href={`/#${game.id}`}>
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

        <div className={styles.infoBoxes}>
          {fields.map((field, index) => {
            return (
              <InfoBox key={index} target={field} info={game[field]}></InfoBox>
            );
          })}
        </div>
      </div>
    </div>
  );
};

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

export default SingleGame;