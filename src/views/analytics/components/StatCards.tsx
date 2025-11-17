import useStats from './useStats';

import styles from '../Analytics.module.css';

const StatCards = () => {
  const { stats } = useStats();

  return (
    <div className={styles.statsGrid}>
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={styles.statCard}
          style={{ borderColor: stat.color }}
        >
          <div className={styles.statValue} style={{ color: stat.color }}>
            {stat.value}
          </div>
          <div className={styles.statLabel}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
