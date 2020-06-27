import fbApp from "../firebaseInit";
import * as firebase from "firebase";
//Action types
const SET_WELCOME_SCREEN_ENABLED = "SET_WELCOME_SCREEN_ENABLED";
const SET_STUDIOS = "SET_STUDIOS";

//Selectors
export const MODULE_NAME = "studios";
export const selectWelcomeScreenEnabled = (state) =>
  state[MODULE_NAME].welcomeScreenEnabled;
export const selectStudios = (state) => state[MODULE_NAME].studios;

const initialState = {
  welcomeScreenEnabled: false,
  studios: [],
};
export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_WELCOME_SCREEN_ENABLED:
      return {
        ...state,
        welcomeScreenEnabled: false,
      };

    case SET_STUDIOS:
      return {
        ...state,
        studios: payload,
      };

    default:
      return state;
  }
}

export const setWelcomeScreenEnabled = () => ({
  type: SET_WELCOME_SCREEN_ENABLED,
});

export const setStudios = (payload) => ({
  type: SET_STUDIOS,
  payload,
});

export const getStudios = (setRefreshed) => async (dispatch, getState) => {
  try {
    const data = (await fbApp.data.ref(`studios`).once("value")).val();
    let dataArray = [];
    for (let item in data) {
      dataArray.push({
        id: item,
        ...data[item],
      });
    }
    dispatch(setStudios(dataArray));
    if(setRefreshed) setRefreshed(false)
  } catch (error) {
    console.log(error);
  }
};
