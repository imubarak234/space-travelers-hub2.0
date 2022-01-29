const ADD_MISSION = 'space-travelers-hub/missions/ADD_MISSION';
const RESERVE_MISSION = 'space-travelers-hub/missions/RESERVE_MISSION';

const initialState = [];

export const addMission = (payload) => ({
  type: ADD_MISSION,
  payload,
});

export const reserveMission = (payload) => ({
  type: RESERVE_MISSION,
  payload,
});

export const sort = (args) => {
  const ans = [];
  for (let x = 0; x < args.length; x += 1) {
    const newObj = {
      mission_id: args[x].mission_id,
      mission_name: args[x].mission_name,
      description: args[x].description,
      wiki: args[x].wikipedia,
      reserved: false,
    };
    ans.push(newObj);
  }
  return ans;
};

export const addAsync = () => (dispatch) => fetch('https://api.spacexdata.com/v3/missions')
  .then((response) => response.json())
  .then((data) => {
    const newData = sort(data);
    newData.map((info) => dispatch(addMission(info)));
  });

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSION:
      return [...state, action.payload];
    case RESERVE_MISSION:
      return state.map((next) => {
        if ((next.mission_id === action.payload)) {
          if (next.reserved) {
            return ({
              mission_id: next.mission_id,
              mission_name: next.mission_name,
              description: next.description,
              wiki: next.wiki,
              reserved: false,
            });
          }

          return ({
            mission_id: next.mission_id,
            mission_name: next.mission_name,
            description: next.description,
            wiki: next.wiki,
            reserved: true,
          });
        }
        return next;
      });
    default:
      return state;
  }
};

export default missionsReducer;
