import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import RocketDisplay from './RocketDisplay';
import { reserveRocket } from '../../redux/Rockets/Rockets';

const RocketContainer = () => {
  const states = useSelector((state) => state.rocketReducer, shallowEqual);
  const dispatch = useDispatch();
  const handleChange = (ids) => {
    dispatch(reserveRocket(ids));
  };
  const buttonClass = (args) => {
    let ans = '';
    if (args) ans = 'btn btn-outline-secondary';
    else ans = 'btn btn-primary';
    return ans;
  };
  const buttonInfo = (args) => {
    let ans = '';
    if (args) ans = 'Cancel Reservation';
    else ans = 'Reserve Rocket';
    return ans;
  };
  return (
    <div className="container-fluid">
      {
        states.map((rockets) => (
          <RocketDisplay
            key={rockets.id}
            id={rockets.id}
            names={rockets.rocket_name}
            desc={rockets.description}
            images={rockets.image}
            change={handleChange}
            buttonClass={buttonClass(rockets.reserved)}
            buttonInfo={buttonInfo(rockets.reserved)}
            isReserved={rockets.reserved}
          />
        ))
      }
    </div>
  );
};
export default RocketContainer;
