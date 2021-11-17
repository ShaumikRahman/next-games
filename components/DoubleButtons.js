import styles from '../styles/DoubleButtons.module.scss'

export default function DoubleButtons() {
  return (
    <>
      <div className={styles.clearBox}>
        <input type="reset" value="Clear" className={styles.clear} />
      </div>
      <div className={styles.submitBox}>
        <input type="submit" value="Go" className={styles.submit} />
      </div>
    </>
  );
}
