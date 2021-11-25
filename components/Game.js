import styles from "../styles/Game.module.scss";
import Link from "next/link";

const Game = ({ game, index, location }) => {
  return (
    <Link href={`/game/${game.slug}?from=${location}`} passHref>
      <div className={styles.game} key={index} id={game.id}>
        <h2>{game.name}</h2>
        <img src={game.background_image} alt={game.slug} className={styles.image}/>
        <p className={styles.released}>Released {game.released}</p>
        <div className={styles.ratings}>
          {game.ratings.map((rating) => {
            return (
              <div
                key={rating.id}
                className={rating.title}
                style={{ width: `${rating.percent}%` }}
              ></div>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default Game;
