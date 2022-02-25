import styles from "../styles/Home.module.scss";
import Game from "../components/Game";
import Empty from "../components/Empty";
import Head from 'next/head'

export default function Home({ games }) {

  return (
    <div className="container">
      <Head>
        <title>
          Next Games
        </title>
        <meta name="description" content="Games" />
      </Head>
      <h1 className="title">Next Games</h1>
      <h2 className={styles.miniTitle}>
        Popular
      </h2>
      <div className={styles.games}>
        {games.length > 0 ? (
          games.map((game, index) => {
            return <Game game={game} key={index} location={"Home"} />;
          })
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {

  const date = new Date;
  let dates = `${date.getFullYear()}-${date.getMonth().toString().length === 1 ? `0${date.getMonth()}` : date.getMonth()}-${date.getDate()},${date.getFullYear()}-${(date.getMonth()+1).toString().length === 1 ? `0${date.getMonth()+1}` : date.getMonth()+1}-${date.getDate()}`;

  if (date.getMonth() === 0) {
    dates = `${date.getFullYear()-1}-12-${date.getDate()},${date.getFullYear()}-${(date.getMonth()+1).toString().length === 1 ? `0${date.getMonth()+1}` : date.getMonth()+1}-${date.getDate()}`;
  }

  const res = await fetch(`https://rawg.io/api/games?key=${process.env.KEY}&dates=${dates}&ordering=-added&page_size=15`);

  const data = await res.json();

  return {
    props : {
      games: data.results
    },
    revalidate: 300
  } 
}