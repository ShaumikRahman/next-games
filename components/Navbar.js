import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
    return <div className={styles.Navbar}>
        <div className={styles.link}>
            <h3>Home</h3>
        </div>
        <div className={styles.link}>
            <h3>Popular</h3>
        </div>
        <div className={styles.link}>
            <h3>Search</h3>
        </div>
        <div className={styles.link}>
            <h3 onClick={() => {
                document.getElementById('main').classList.toggle('dark');
                
                if (document.getElementById('main').classList.contains('dark')) {
                    localStorage.setItem('dark', 'true');
                } else {
                    localStorage.setItem('dark', 'false');
                }
            }}>Theme</h3>
        </div>
    </div>
}

export default Navbar