import styles from "../styles/Jump.module.scss";
import { useState, useRef, useEffect } from "react";

const Jump = () => {
  const jump = useRef();
  const [Y, setY] = useState(0);

  const handleScroll = () => {
      setY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    if (Y < 500) {
      jump.current.classList.add("hide");
    } else {
      jump.current.classList.remove("hide");
    }
  }, [Y]);

  return (
    <div ref={jump} className={styles.jump} onClick={() => {window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })}}>
      &uarr;
    </div>
  );
};

export default Jump;
