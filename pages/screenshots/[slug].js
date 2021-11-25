import styles from "../../styles/Screenshots.module.scss";
import Link from "next/link";
import Head from "next/head";
import Empty from "../../components/Empty";
import { useRouter } from "next/router";

export default function Screenshots({ game, screenshots }) {

  const router = useRouter();

  const from = router.query.from;

  return (
    <div className="container">
      <Head>
        <title>{`Screenshots for ${game.name}`}</title>
        <meta name="description" content={`Screenshots for ${game.name}`} />
      </Head>
      <Link href={`/game/${game.slug}?from=${from}`} passHref>
        <h1 className={styles.return}>Game</h1>
      </Link>
      <div className={styles.game}>
        <h1 className={styles.title}>{`${game.name} screenshots`}</h1>
        <div className={styles.screenshots}>
        {screenshots.results.length ? screenshots.results.map(screenshot => {
            return <img className={styles.screenshot} key={screenshot.id} src={screenshot.image} alt={game.slug} />
          }) : <Empty />}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {

  console.log(context.query.slug);

  const gameResponse = await fetch(`https://rawg.io/api/games/${context.query.slug}?key=${process.env.KEY}`);

  const gameData = await gameResponse.json();

  const screensResponse = await fetch(`https://rawg.io/api/games/${context.query.slug}/screenshots?key=${process.env.KEY}`);

  const screenshots = await screensResponse.json();

  return {
    props: {
      game: gameData,
      screenshots: screenshots
    },
  };
}
