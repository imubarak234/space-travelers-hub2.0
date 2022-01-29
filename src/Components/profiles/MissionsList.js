import PropTypes from 'prop-types';
import MissionItem from './MissionItem';

const MissionsList = (props) => {
  const { lists, mission, count } = props;
  return (
    <div className="w-50 me-3">
      <h3 className="h3">My Missions</h3>
      <ul className="list-group">
        {
          lists.map((next) => (
            <MissionItem
              key={next.mission_id}
              names={next.mission_name}
              ids={next.mission_id}
              missions={mission}
              wikis={next.wiki}
            />
          ))
        }
      </ul>
      {
      (count === 0) && <p className="p-3 lead">No Missions Reserved Yet</p>
    }
    </div>
  );
};

MissionsList.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      mission_id: PropTypes.string,
      mission_name: PropTypes.string,
      description: PropTypes.string,
      wiki: PropTypes.string,
      reserved: PropTypes.bool,
    }),
  ).isRequired,
  mission: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default MissionsList;
