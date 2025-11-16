import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import styles from '../Analytics.module.css';
import useStats from './useStats';
import C from '../constants';

const ViewsVsFavoritesChart = () => {
  const { barStats } = useStats();
  return (
    <div className={styles.chartContainer}>
      <h3 className={styles.chartTitle}>{C.BAR_TITLE}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={barStats}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={C.NAME} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={C.VIEWS} fill={C.BAR_COLOR_1} />
          <Bar dataKey={C.FAVOURITES} fill={C.BAR_COLOR_2} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ViewsVsFavoritesChart;
