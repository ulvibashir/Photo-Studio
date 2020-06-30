import fbApp from "../firebaseInit";
import * as firebase from "firebase";

//Action types
const SET_AUTH_SUCCESS = "SET_AUTH_SUCCESS";
const SET_AUTH_STATUS = "SET_AUTH_STATUS";
const SET_AUTH_LOGOUT = "SET_LOGOUT";
const UPDATE_USER = "UPDATE_USER";
const UPDATE_USER_CARDS = "UPDATE_USER_CARDS";

//Selectors
export const MODULE_NAME = "auth";
export const selectAuthStatus = (state) => state[MODULE_NAME].status;
/* export const selectAuthName = (state) => state[MODULE_NAME].name;
export const selectAuthSurName = (state) => state[MODULE_NAME].surname;
export const selectAuthCreationTime = (state) =>
  state[MODULE_NAME].creationTime; */
export const selectUserData = (state) => state[MODULE_NAME].userData;
export const selectUsersCards = (state) => state[MODULE_NAME].userData.cards;

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
    cards: [],
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
          image: null,
          cards: [],
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
    case UPDATE_USER_CARDS:
      return {
        ...state,
        userData: {
          ...state.userData,
          cards: payload,
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
export const setUsersCards = (payload) => ({
  type: UPDATE_USER_CARDS,
  payload,
});

// Middlewares

export const signIn = ({ email, password }) => async (dispatch) => {
  try {
    const {
      user: { uid },
    } = await fbApp.auth.signInWithEmailAndPassword(email, password);
    const data = (await fbApp.data.ref(`users/${uid}`).once("value")).val();
    const cardsObj = (
      await fbApp.data.ref(`users/${uid}/cards`).once("value")
    ).val();
    const cards = [];
    for (let key in cardsObj) {
      cards.push({
        ...cardsObj[key],
      });
    }
    console.log(cards, "crt");
  
    dispatch(
      setAuthSuccess({
        userID: uid,
        ...data,
        cards,
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
    console.log(error, "logout");
  }
};

export const updateUser = (data) => async (dispatch) => {
  try {
    const { uid } = fbApp.auth.currentUser;

    const {
      email,
      password,
      name,
      surname,
      image,
      phone,
      city,
      speciality,
    } = data;

    const user = (await fbApp.data.ref(`users/${uid}`).once("value")).val();

    const credential = firebase.auth.EmailAuthProvider.credential(
      email,
      password
    );
    console.log(credential);

    dispatch(setUserInfo({ ...data }));

    if (user.email !== email || user.password !== password) {
      await fbApp.auth.currentUser.updateEmail(email);
      await fbApp.auth.currentUser.updatePassword(password);

      fbApp.data.ref(`users/${uid}`).update({ email, password });

      return fbApp.auth.currentUser.reauthenticateWithCredential(credential);
    } else {
      fbApp.data
        .ref(`users/${uid}`)
        .update({ name, surname, image, phone, city, speciality });
    }
  } catch (error) {
    console.log(error, "update user");
  }
};

export const updateUserCards = (data) => async (dispatch) => {
  try {
    console.log(data, "cards");
    const { uid } = fbApp.auth.currentUser;
    fbApp.data.ref(`users/${uid}/cards`).push(data);

    const cardsObj = (
      await fbApp.data.ref(`users/${uid}/cards`).once("value")
    ).val();
    const cards = [];
    for (let key in cardsObj) {
      cards.push({
        ...cardsObj[key],
      });
    }
    console.log(cards, "crt");
    dispatch(setUsersCards([...cards]));
  } catch (error) {
    console.log(error, "update card");
  }
};
