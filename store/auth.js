import fbApp from "../firebaseInit";
import * as firebase from "firebase";
//Action types
const SET_AUTH_SUCCESS = "SET_AUTH_SUCCESS";
const SET_AUTH_STATUS = "SET_AUTH_STATUS";
const SET_AUTH_LOGOUT = "SET_LOGOUT";

//Selectors
export const MODULE_NAME = "auth";
export const selectAuthStatus = (state) => state[MODULE_NAME].status;
export const selectAuthName = (state) => state[MODULE_NAME].name;
export const selectAuthSurName = (state) => state[MODULE_NAME].surname;
export const selectAuthCreationTime = (state) => state[MODULE_NAME].creationTime;

const initialState = {
  status: false,
  creationTime: null,
  userID: null,
  name: null,
  surname: null,
};
export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_AUTH_SUCCESS:
      return {
        ...state,
        status: true,
        userID: payload.userID,
        name: payload.name,
        surname: payload.surname,
        creationTime: payload.creationTime,
      };
    case SET_AUTH_LOGOUT:
      return {
        ...state,
        status: false,
        userID: null,
        name: null,
        surname: null,
        creationTime: null
      };
    default:
      return state;
  }
}

export const setAuthStatus = (payload) => ({
  type: SET_AUTH_STATUS,
  payload,
});
export const setAuthSuccess = (payload) => ({
  type: SET_AUTH_SUCCESS,
  payload,
});
export const setAuthLogOut = () => ({
  type: SET_AUTH_LOGOUT,
});

export const signIn = ({ email, password }) => async (dispatch) => {
  try {
    const {
      user: {
        uid,
        metadata: { creationTime },
      },
    } = await fbApp.auth.signInWithEmailAndPassword(email, password);
    const { name, surname } = (
      await fbApp.data.ref(`users/${uid}`).once("value")
    ).val();
    console.log(creationTime, "time");
    dispatch(setAuthSuccess({ userID: uid, name, surname, creationTime }));
  } catch (error) {
    console.log(error, "login failed");
  }
};

export const signUp = ({ email, password, name, surname }) => async (
  dispatch
) => {
  try {
    const {
      user: { uid,metadata: {creationTime} },
    } = await firebase.auth().createUserWithEmailAndPassword(email, password);

    fbApp.data.ref(`users/${uid}`).set({ name, surname, creationTime });

    dispatch(setAuthSuccess({ userID: uid, name, surname,creationTime }));
  } catch (error) {
    console.log("sign up failed", error);
  }
};

export const logOut = () => (dispatch) => {
  try {
    fbApp.auth.signOut();
    dispatch(setAuthLogOut());
  } catch (error) {
    console.log(error);
  }
};
