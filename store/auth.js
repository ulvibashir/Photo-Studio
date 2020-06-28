import fbApp from "../firebaseInit";
import * as firebase from "firebase";

//Action types
const SET_AUTH_SUCCESS = "SET_AUTH_SUCCESS";
const SET_AUTH_STATUS = "SET_AUTH_STATUS";
const SET_AUTH_LOGOUT = "SET_LOGOUT";
const UPDATE_USER = "UPDATE_USER";
const SET_WELCOME_SCREEN_ENABLED = "SET_WELCOME_SCREEN_ENABLED";

//Selectors
export const MODULE_NAME = "auth";
export const selectAuthStatus = (state) => state[MODULE_NAME].status;
/* export const selectAuthName = (state) => state[MODULE_NAME].name;
export const selectAuthSurName = (state) => state[MODULE_NAME].surname;
export const selectAuthCreationTime = (state) =>
  state[MODULE_NAME].creationTime; */
export const selectUserData = (state) => state[MODULE_NAME].userData;

// Reducer

const initialState = {
  status: false,
  userData: {
    creationTime: null,
    userID: null,
    email: null,
    name: null,
    image: null,
    surname: null,
    phone: null,
    speciality: null,
    password: null,
    city: null,
  },
};

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_AUTH_SUCCESS:
      return {
        ...state,
        status: true,
        userData: {
          ...state.userData,
          ...payload,
        },
      };
    case SET_AUTH_LOGOUT:
      return {
        ...state,
        status: false,
        userData: {
          ...state.userData,
          creationTime: null,
          userID: null,
          email: null,
          name: null,
          surname: null,
          phone: null,
          speciality: null,
          password: null,
          city: null,
          image
        },
      };
    case UPDATE_USER:
      return {
        ...state,
        userData: {
          ...state.userData,
          ...payload,
        },
      };
    default:
      return state;
  }
}
// Action creators
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

export const setUserInfo = (payload) => ({
  type: UPDATE_USER,
  payload,
});

// Middlewares

export const signIn = ({ email, password }) => async (dispatch) => {
  try {
    const {
      user: { uid },
    } = await fbApp.auth.signInWithEmailAndPassword(email, password);
    const data = (await fbApp.data.ref(`users/${uid}`).once("value")).val();

    dispatch(
      setAuthSuccess({
        userID: uid,
        ...data,
      })
    );
  } catch (error) {
    console.log(error, "login failed");
  }
};

export const signUp = ({ email, password, name, surname }) => async (
  dispatch
) => {
  try {
    const {
      user: {
        uid,
        metadata: { creationTime },
      },
    } = await fbApp.auth.createUserWithEmailAndPassword(email, password);

    fbApp.data
      .ref(`users/${uid}`)
      .set({ name, surname, email, password, creationTime });

    dispatch(
      setAuthSuccess({
        userID: uid,
        name,
        surname,
        email,
        password,
        creationTime,
      })
    );
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

export const updateUser = (data) => async (dispatch) => {
  try {
    const {
      uid,
      metadata: { creationTime },
    } = fbApp.auth.currentUser;

    fbApp.data.ref(`users/${uid}`).set({creationTime, ...data});
    const { email, password } = data;

    const user = (await fbApp.data.ref(`users/${uid}`).once("value")).val();

    const credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      user.password
    );

    await fbApp.auth.currentUser.updateEmail(email);
    await fbApp.auth.currentUser.updatePassword(password);

    dispatch(setUserInfo({ creationTime, ...data }));

    return fbApp.auth.currentUser.reauthenticateWithCredential(credential);
  } catch (error) {
    console.log(error, "update user");
  }
};
