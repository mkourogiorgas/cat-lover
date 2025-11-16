import {
  BreedDistributionChart,
  StatCards,
  ViewsVsFavoritesChart,
} from './components';

import C from './constants';
import styles from './Analytics.module.css';

const Analytics = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{C.TITLE}</h1>
      <p className={styles.subtitle}>{C.SUBTITLE}</p>
      <StatCards />
      <div className={styles.chartsGrid}>
        <ViewsVsFavoritesChart />
        <BreedDistributionChart />
      </div>
    </div>
  );
};

export default Analytics;
