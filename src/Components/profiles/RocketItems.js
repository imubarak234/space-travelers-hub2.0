import PropTypes from 'prop-types';

const RocketItems = (props) => {
  const {
    names, rocket, ids, wiki,
  } = props;

  return (
    <li className="list-group-item p-3 lead">
      <p>{names}</p>
      <button type="button" className="btn btn-secondary btn-sm" onClick={() => rocket(ids)}>Cancel Reservation</button>
      <a href={wiki} className="btn btn-light btn-sm" target="_blank" rel="noreferrer">wiki</a>
    </li>
  );
};

RocketItems.propTypes = {
  names: PropTypes.string.isRequired,
  rocket: PropTypes.func.isRequired,
  ids: PropTypes.number.isRequired,
  wiki: PropTypes.string.isRequired,
};

export default RocketItems;
