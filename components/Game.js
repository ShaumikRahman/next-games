import styles from "../styles/Game.module.scss";

const Game = ({ game, index }) => {
  return (
      <div className={styles.game} key={index}>
        <h2>{game.name}</h2>
        <img
          className={styles.image}
          src={game.background_image}
          alt={game.slug}
        />
        <p className={styles.released}>Released {game.released}</p>
        {/* <details className={styles.genres}>
          <summary>
            Genres
          </summary>
          {game.genres.map((genre, index) => {
            return <p className={styles.genre} key={index}>{genre.name}</p>;
          })}
        </details> */}
        <div className={styles.ratings}>
          {/* <div style={{width: `${game.ratings[0].percent}%`}}></div> */}
          {game.ratings.map(rating => {
            return <div key={rating.id} className={rating.title} style={{width: `${rating.percent}%`}} ></div>
          })}
        </div>

      </div>
  );
};

export default Game;
