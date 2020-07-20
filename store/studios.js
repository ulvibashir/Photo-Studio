import fbApp from "../firebaseInit";
import * as firebase from "firebase";
//Action types
const SET_WELCOME_SCREEN_ENABLED = "SET_WELCOME_SCREEN_ENABLED";
const SET_STUDIOS = "SET_STUDIOS";
const ADD_FAVORITES = "ADD_FAVORITES";
const REMOVE_FAVORITES = "REMOVE_FAVORITES";
const SET_FIELDS = 'SET_FIELDS';

//Selectors
export const MODULE_NAME = "studios";
export const selectWelcomeScreenEnabled = (state) =>
  state[MODULE_NAME].welcomeScreenEnabled;
export const selectStudios = (state) => state[MODULE_NAME].studios;
export const selectFavorites = (state) => state[MODULE_NAME].favorites;
export const selectFields = (state) => state[MODULE_NAME].fields;

const initialState = {
  welcomeScreenEnabled: false,
  studios: [],
  favorites: [],
  fields: {
    city: null,
    date: null,
    startTime: null,
    endTime: null,
  }
};
export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_WELCOME_SCREEN_ENABLED:
      return {
        ...state,
        welcomeScreenEnabled: false,
      };
      case SET_FIELDS: 
      return {
        ...state,
        fields: payload
      }
    case SET_STUDIOS:
      return {
        ...state,
        studios: payload,
      };

    case ADD_FAVORITES:
      return {
        ...state,
        favorites: [payload, ...state.favorites],
      };
    case REMOVE_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites.filter(item => item.id !== payload.id)]
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
export const addFavorites = (payload) => ({
  type: ADD_FAVORITES,
  payload,
});
export const removeFavorites = (payload) => ({
  type: REMOVE_FAVORITES,
  payload,
});
export const setFields = (payload) => ({
  type: SET_FIELDS,
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
    if (setRefreshed) setRefreshed(false);
  } catch (error) {
    console.log(error);
  }
};
