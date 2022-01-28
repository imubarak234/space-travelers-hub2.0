import PropTypes from 'prop-types';

const RocketDisplay = (props) => {
  const {
    names, desc, images, change, id, buttonClass, buttonInfo, isReserved,
  } = props;
  return (
    <div className="card my-3 mx-3">
      <div className="row g-0">
        <div className="col-md-3">
          <img src={images} alt="" className="img-fluid" />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h3 className="card-title">{names}</h3>
            <p className="card-text">
              {
              isReserved && <button type="button" className="btn btn-info btn-sm p-2">Reserved</button>
            }
              {desc}
            </p>
            <button type="button" className={buttonClass} onClick={() => change(id)}>{buttonInfo}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
RocketDisplay.propTypes = {
  names: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  buttonClass: PropTypes.string.isRequired,
  buttonInfo: PropTypes.string.isRequired,
  isReserved: PropTypes.bool.isRequired,
};
export default RocketDisplay;
