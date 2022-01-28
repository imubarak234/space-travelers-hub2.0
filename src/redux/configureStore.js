import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer, { sort, addMission } from './Missions/Missions';
import rocketReducer, { addRocket } from './Rockets/Rockets';
const reducer = combineReducers({
  missionsReducer,
  rocketReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);
const refresh = async () => {
  await fetch('https://api.spacexdata.com/v3/missions')
    .then((response) => response.json())
    .then((data) => {
      const newData = sort(data);
      newData.map((info) => store.dispatch(addMission(info)));
    });
};
refresh();
const sorted = (args) => {
  const ans = [];
  for (let x = 0; x < args.length; x += 1) {
    const newObj = {
      id: args[x].id,
      rocket_name: args[x].rocket_name,
      description: args[x].description,
      image: args[x].flickr_images[0],
      wiki: args[x].wikipedia,
      reserved: false,
    };
    ans.push(newObj);
  }
  return ans;
};
const refreshRocket = async () => {
  await fetch('https://api.spacexdata.com/v3/rockets')
    .then((response) => response.json())
    .then((data) => {
      const newData = sorted(data);
      newData.map((info) => store.dispatch(addRocket(info)));
    });
};
refreshRocket();
export default store;
