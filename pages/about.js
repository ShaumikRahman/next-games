import styles from '../styles/About.module.scss'

export default function about() {
    
    return (
        <div className="container">

            <h1 className="title">
                About
            </h1>

            <h4 className={styles.text}>
                This app was made to serve video game meta information such as release dates, ratings and screenshots. You can view the past
                months most popular games or search for your own using filters such as genre and console. This was made using Next JS and the
                RAWG API to make use of SSG and SSR/ISR.
            </h4>
        </div>
    )
}