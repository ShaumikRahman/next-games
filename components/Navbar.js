import styles from "../styles/Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.link}>
        <Link href={"/"} passHref>
          <h3>Home</h3>
        </Link>
      </div>
      <div className={styles.link}>
        <Link href={"/browse"} passHref>
            <h3>Browse</h3>
        </Link>
      </div>
      <div className={styles.link}>
        <Link href={"/about"} passHref>
            <h3>About</h3>
        </Link>
      </div>
      <div className={styles.link}>
        <h3
          onClick={() => {
            document.getElementById("main").classList.toggle("dark");

            if (document.getElementById("main").classList.contains("dark")) {
              localStorage.setItem("dark", "true");
            } else {
              localStorage.setItem("dark", "false");
            }
          }}
        >
          Theme
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
