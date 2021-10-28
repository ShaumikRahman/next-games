import styles from '../styles/Game.module.scss'

const Game = ({ game }) => {
  return (
    <div className={styles.game} key={index}>
      <h2>{game.name}</h2>
      <img
        className={styles.image}
        src={game.background_image}
        alt={game.slug}
      />
    </div>
  );
};

export default Game;
