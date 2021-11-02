import styles from '../styles/InfoBox.module.scss'

const InfoBox = ({ target, info }) => {
  return (
    <div className={styles.infoBox}>
      <div className={styles.left}>
        <h3>{target.charAt(0).toUpperCase()+target.slice(1)}</h3>
      </div>
      <div className={styles.right}>
        {info.map((item, index) => {

            if (item.count) {
                return <p key={index}>{`${item.title} : ${item.count}`}</p> //ratings
            } else if (item.released_at) {
                return <p key={index}>{`${item.platform.name} : ${item.released_at}`}</p> //platforms
            } else {
                return <p key={index}>{item.name}</p>; //default
            }

        //   return <p>{item.count ? `${item.title} : ${item.count}` : item.name}</p>;
        })}
      </div>
    </div>
  );
};

export default InfoBox;
