import PropTypes from 'prop-types';
import './Mission.css';

const MissionsItems = (props) => {
  const {
    name, description, classes, ids, booking, infos, btnClass, membersInfo, membersClass,
  } = props;

  return (
    <div className={classes}>
      <div className="col-2 bords">
        <p className="fw-normal">{name}</p>
      </div>
      <div className="col-6 bords">
        <p className="fw-normal">{description}</p>
      </div>
      <div className="col-2 bords d-flex flex-column justify-content-center">
        <button type="button" className={membersClass}>{membersInfo}</button>
      </div>
      <div className="col-2 bords d-flex flex-column justify-content-center">
        <button type="button" className={btnClass} onClick={() => booking(ids)}>{infos}</button>
      </div>
    </div>
  );
};

MissionsItems.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  booking: PropTypes.func.isRequired,
  ids: PropTypes.string.isRequired,
  infos: PropTypes.string.isRequired,
  btnClass: PropTypes.string.isRequired,
  membersInfo: PropTypes.string.isRequired,
  membersClass: PropTypes.string.isRequired,
};

export default MissionsItems;
