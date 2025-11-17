import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import useStats from './useStats';

import U from '../utils';
import C from '../constants';
import styles from '../Analytics.module.css';

const BreedDistributionChart = () => {
  const { pieChartData } = useStats();
  if (!pieChartData.length) {
    return (
      <div className={styles.chartContainer}>
        <h3 className={styles.chartTitle}>{C.PIE_CHART_TITLE}</h3>
        <p className={styles.noData}>{C.PIE_CHART_EMPTY_TITLE}</p>
      </div>
    );
  }

  return (
    <div className={styles.chartContainer}>
      <h3 className={styles.chartTitle}>{C.PIE_CHART_TITLE}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => U.getPieLabelText(name, percent)}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={U.getPieFillColor(index)} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BreedDistributionChart;
