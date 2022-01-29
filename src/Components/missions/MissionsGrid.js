import PropTypes from 'prop-types';
import MissionsItems from './MissionsItems';
import './Mission.css';

const MissionsGrid = (props) => {
  const { list, booking } = props;
  let count = 0;

  const changes = (next) => {
    let ans = '';
    if ((next % 2) === 0) ans = 'row bg-light';
    else ans = 'row';
    return ans;
  };

  const buttonClass = (args) => {
    let ans = '';
    if (args) ans = 'btn btn-outline-danger';
    else ans = 'btn btn-outline-secondary';
    return ans;
  };

  const buttonInfo = (args) => {
    let ans = '';
    if (args) ans = 'Leave Mission';
    else ans = 'Join Mission';
    return ans;
  };

  const memberButtonInfo = (args) => {
    let ans = '';
    if (args) ans = 'Active Member';
    else ans = 'NOT A MEMBER';
    return ans;
  };

  const memberButtonClass = (args) => {
    let ans = '';
    if (args) ans = 'btn btn-success';
    else ans = 'btn btn-secondary';
    return ans;
  };

  return (
    <div className="px-3 py-3">
      <div className="row">
        <div className="col-2 bords">
          <p className="h3">Mission</p>
        </div>
        <div className="col-6 bords">
          <p className="h3">Description</p>
        </div>
        <div className="col-2 bords">
          <p className="h3">Status</p>
        </div>
        <div className="col-2 bords" />
      </div>

      {
        list.map((missions) => {
          count += 1;
          return (
            <MissionsItems
              key={missions.mission_id}
              ids={missions.mission_id}
              name={missions.mission_name}
              description={missions.description}
              classes={changes(count)}
              booking={booking}
              infos={buttonInfo(missions.reserved)}
              btnClass={buttonClass(missions.reserved)}
              membersInfo={memberButtonInfo(missions.reserved)}
              membersClass={memberButtonClass(missions.reserved)}
            />
          );
        })
      }
    </div>
  );
};
MissionsGrid.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      mission_id: PropTypes.string,
      mission_name: PropTypes.string,
      description: PropTypes.string,
      reserved: PropTypes.bool,
    }),
  ).isRequired,
  booking: PropTypes.func.isRequired,
};

export default MissionsGrid;
