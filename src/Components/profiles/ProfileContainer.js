
import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import MissionsList from './MissionsList';
import RocketList from './RocketList';
import { reserveMission } from '../../redux/Missions/Missions';
import { reserveRocket } from '../../redux/Rockets/Rockets';

const ProfileContainer = () => {
  const states = useSelector((state) => state.missionsReducer, shallowEqual);
  const statesR = useSelector((state) => state.rocketReducer, shallowEqual);

  const newStates = states.filter((next) => next.reserved);
  const newStatesR = statesR.filter((next) => next.reserved);

   const dispatch = useDispatch();

  const missions = (ids) => {
     dispatch(reserveMission(ids));
  };

  const rockets = (ids) => {
     dispatch(reserveRocket(ids));
  };

  return (
    <div className="container w-100 d-flex">
      <MissionsList
        lists={newStates}
        count={newStates.length}
        mission={missions}
      />
      <RocketList
        listsR={newStatesR}
        countR={newStatesR.length}
        rocket={rockets}
      />
    </div>
  );
};

export default ProfileContainer;
