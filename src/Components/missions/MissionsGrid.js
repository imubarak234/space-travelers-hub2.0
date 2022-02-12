import PropTypes from 'prop-types';
import MissionsItems from './MissionsItems';
import './Mission.css';

/**
 * @function MissionsGrid - Reccieves data from the missions container renders
 * the HTML tags and styling for the list of missions
 * @param {props} list - Array of objects each object contains information on a given mission 
 * @param {props} booking - A function to dispatch the mission booking to the redux store
 */
const MissionsGrid = (props) => {
  const { list, booking } = props;
  let count = 0;

  /**
   * @function changes - Depending on the count it returns names of Bootstrap classes
   * @param {number} next - count either even or odd 
   * @returns {string} - Bootstrap class
   */
  const changes = (next) => {
    let ans = '';
    if ((next % 2) === 0) ans = 'row bg-light';
    else ans = 'row';
    return ans;
  };

  /**
   * @function - Depending on the argument it returns a string representation of bootstrap classes
   * @param {boolean} args - true or false depending on if the mission object
   * recerved property 
   * @returns {string} - Bootstrap class
   */
  const buttonClass = (args) => {
    let ans = '';
    if (args) ans = 'btn btn-outline-danger';
    else ans = 'btn btn-outline-secondary';
    return ans;
  };

  /**
   * @function - Depending on the argument it returns a string of info to be displayed
   * @param {boolean} args - true or false depending on if the mission object
   * recerved property 
   * @returns {string} - info to be displayed
   */
  const buttonInfo = (args) => {
    let ans = '';
    if (args) ans = 'Leave Mission';
    else ans = 'Join Mission';
    return ans;
  };

  /**
   * @function - Depending on the argument it returns a string of info to be displayed
   * @param {boolean} args - true or false depending on if the mission object
   * recerved property 
   * @returns {string} - info to be displayed
   */
  const memberButtonInfo = (args) => {
    let ans = '';
    if (args) ans = 'Active Member';
    else ans = 'NOT A MEMBER';
    return ans;
  };

  /**
   * @function - Depending on the argument it returns a string representation of bootstrap classes
   * @param {boolean} args - true or false depending on if the mission object
   * recerved property 
   * @returns {string} - Bootstrap class
   */
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
