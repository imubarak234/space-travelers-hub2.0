/**
 * Mission Container file handles querying and sorting of mission related data 
 * from the redux store.
 */

import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import MissionsGrid from './MissionsGrid';
import { reserveMission } from '../../redux/Missions/Missions';

const MissionsContainer = () => {
  const dispatch = useDispatch();
  const states = useSelector((state) => state.missionsReducer, shallowEqual);

  /**
   * @function bookMission - Handles dispatching resereve mission action to the reducer
   * @param {string} id - The id of the selected mission to be booked 
   */
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
