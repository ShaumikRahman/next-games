import styles from '../styles/FilterBox.module.scss'

export default function FilterBox({ title, data }) {

  return (
    <>
      <h3
        className={styles.clickTitle}
        onClick={() => {
          //platforms.current.classList.toggle("fade");
          document.getElementById(`${title}`).classList.toggle('fade');
        }}
      >
        {title.slice(0,1).toUpperCase() + title.slice(1, title.length)}
      </h3>
      <div className={styles.infoList} id={title}>
        {data.map((info) => {
          return (
            <div className={styles.info} key={info.id}>
              <label className={styles.label} htmlFor={info.slug}>
                {info.name}
              </label>
              <input
                type="checkbox"
                name={info.name}
                id={info.slug}
                data-infoid={info.id}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
