import styles from '../styles/Home.module.scss'

export default function Home({ data }) {

  console.log(data);

  return (
    <div className="container">
      <h1 className="title">
        Next Games
      </h1>
      <div className={styles.games}>
        {data.results.map((game, index) => {
          return <div className={styles.game} key={index}>
            <h2>
              {game.name}
            </h2>
            <img className={styles.image} src={game.background_image} alt={game.slug} />
          </div>
        })}
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const response = await fetch(`https://rawg.io/api/games?key=${process.env.API_KEY}&page_size=10`);
  const data = await response.json();

  return {
    props: {
      data
    },
    revalidate: 30
  }
}
