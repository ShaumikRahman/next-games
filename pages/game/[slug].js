import styles from "../../styles/SingleGame.module.scss";
import Link from "next/link";

export const SingleGame = ({ game }) => {
  console.log(game);

  return (
    <div className="container">
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
        <details className={styles.developers}>
          <summary>Developers</summary>
          {game.developers.map((dev) => {
            return (
              <p className={styles.developer} key={dev.id}>
                {dev.name}
              </p>
            );
          })}
        </details>
        <details className={styles.publishers}>
          <summary>Publishers</summary>
          {game.publishers.map((publisher) => {
            return (
              <p className={styles.publisher} key={publisher.id}>
                {publisher.name}
              </p>
            );
          })}
        </details>
        <details className={styles.genres}>
          <summary>Genres</summary>
          {game.genres.map((genre) => {
            return (
              <p className={styles.genre} key={genre.id}>
                {genre.name}
              </p>
            );
          })}
        </details>
      </div>
      <div className={styles.rating}>
        <h2 className={styles.title}>Rating</h2>
        <details className={styles.ratings}>
          <summary>Player ratings</summary>
          {game.ratings.map(rating => {
              return <p key={rating.id}>{rating.title} - {rating.count}</p>
          })}
        </details>
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
