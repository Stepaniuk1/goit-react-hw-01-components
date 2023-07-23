import css from './Statistics.module.css';
import getRandomHexColor from '../../helpers/getRandomHexColor.js';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <div className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={css.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.labelStats}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
