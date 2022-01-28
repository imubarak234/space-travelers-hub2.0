const ADD_ROCKET = 'space-travelers-hub/rockets/ADD_ROCKET';
const RESERVE_ROCKET = 'space-travelers-hub/rockets/RESERVE_ROCKET';
const initialState = [];
export const addRocket = (payload) => ({
  type: ADD_ROCKET,
  payload,
});
export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});
const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCKET:
      return [...state, action.payload];
    case RESERVE_ROCKET:
      return state.map((next) => {
        if ((next.id === action.payload)) {
          if (next.reserved) {
            return ({
              id: next.id,
              rocket_name: next.rocket_name,
              description: next.description,
              image: next.image,
              wiki: next.wiki,
              reserved: false,
            });
          }
          return ({
            id: next.id,
            rocket_name: next.rocket_name,
            description: next.description,
            image: next.image,
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
export default rocketReducer;
