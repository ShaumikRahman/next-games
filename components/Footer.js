
import style from '../styles/Footer.module.scss'

export default function Footer() {
    return <div className={style.footer}>
        <h4>This application was made using <a className={style.link} target="_blank" href="https://nextjs.org/">Next</a>, <a href="https://sass-lang.com/" className={style.link}>Sass</a> and the <a target="_blank" className={style.link} href="https://rawg.io/">RAWG</a> API.</h4>
        <h4>Check my github <a className={style.link} target="_blank" href="https://github.com/shaumikrahman">here</a> for more projects.</h4>
    </div>
}