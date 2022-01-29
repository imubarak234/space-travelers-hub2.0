/* eslint-disable no-console */

import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import MissionsGrid from './MissionsGrid';
import { reserveMission } from '../../redux/Missions/Missions';

const MissionsContainer = () => {
  const dispatch = useDispatch();
  const states = useSelector((state) => state.missionsReducer, shallowEqual);

  const bookMission = (id) => {
    dispatch(reserveMission(id));
  };

  return (
    <div className="container-fluid h-auto py-5">
      <MissionsGrid
        list={states}
        booking={bookMission}
      />
    </div>
  );
};

export default MissionsContainer;
