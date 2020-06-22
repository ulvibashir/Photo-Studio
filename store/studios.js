import fbApp from "../firebaseInit";
import * as firebase from "firebase";
//Action types
const SET_WELCOME_SCREEN_ENABLED = 'SET_WELCOME_SCREEN_ENABLED';

//Selectors
export const MODULE_NAME = "studios";
export const selectWelcomeScreenEnabled = (state) => state[MODULE_NAME].welcomeScreenEnabled;

const initialState = {
  welcomeScreenEnabled: true
};
export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    
      case SET_WELCOME_SCREEN_ENABLED:
        return {
          ...state,
          welcomeScreenEnabled: false
        }
    default:
      return state;
  }
}


export const setWelcomeScreenEnabled = () => ({
  type: SET_WELCOME_SCREEN_ENABLED,
});


