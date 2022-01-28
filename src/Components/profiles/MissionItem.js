import PropTypes from 'prop-types';

const MissionItem = (props) => {
  const {
    names, missions, ids, wikis,
  } = props;

  return (
    <li className="list-group-item p-3 lead">
      <p>{names}</p>
      <button type="button" className="btn btn-info btn-sm" onClick={missions(ids)}>Leave Mission</button>
      <a href={wikis} className="btn btn-light btn-sm" target="_blank" rel="noreferrer">wiki</a>
    </li>
  );
};
MissionItem.propTypes = {
  names: PropTypes.string.isRequired,
  missions: PropTypes.func.isRequired,
  ids: PropTypes.string.isRequired,
  wikis: PropTypes.string.isRequired,
};

export default MissionItem;
