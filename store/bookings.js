import fbApp from "../firebaseInit";
import * as firebase from "firebase";
import { selectUserData, selectAuthStatus } from "./auth";

//Action types
const SET_BOOKINGS = "SET_BOOKINGS";
const CREATE_BOOKINGS = "CREATE_BOOKINGS";
const REMOVE_ALL_BOOKINGS = 'REMOVE_ALL_BOOKINGS';

//Selectors
export const MODULE_NAME = "bookings";
export const selectBookings = (state) => state[MODULE_NAME].bookings;

// Reducer

const initialState = {
  bookings: [],
};

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_BOOKINGS:
      return {
        ...state,
        bookings: payload,
      };
    case CREATE_BOOKINGS:
      return {
        ...state,
        bookings: [ payload,...state.bookings],
      };
      case REMOVE_ALL_BOOKINGS: 
      return {
        ...state,
        bookings: []
      }
    default:
      return state;
  }
}
// Action creators
export const setBookings = (payload) => ({
  type: SET_BOOKINGS,
  payload,
});
export const createBookings = (payload) => ({
  type: CREATE_BOOKINGS,
  payload,
});
export const removeAllBookings = (payload) => ({
  type: REMOVE_ALL_BOOKINGS,
  payload,
});

export const createBook = (studio, fields) => async (dispatch, getState) => {
  try {
    const state = getState();
    const authStatus = selectAuthStatus(state);
    if (authStatus) {
      const userID = selectUserData(state).userID;
      const { id, studioName, imgArray, rentPrice } = studio;
      const bookingData = {
        studioID: id,
        studioName,
        imgArray,
        rentPrice,
        fields: {
          city: studio.locatedCity,
          date: fields.date.toString(),
          endTime: fields.endTime.toString(),
          startTime: fields.startTime.toString(),
        },
      };
      const data = await (await fbApp.data.ref(`bookings/${userID}`).push(bookingData)).key;

      dispatch(
        createBookings({
          id: data,
          ...bookingData,
        })
      );
    } else {
      console.log("need to login");
    }

  } catch (error) {
    console.log(error, "createBook");
  }
};

export const loadBook = (setRefreshed) => async (dispatch, getState) => {
  try {
    const state = getState();
    const authStatus = selectAuthStatus(state);
    if (authStatus) {
      const userID = selectUserData(state).userID;
      const data = (
        await fbApp.data.ref(`bookings/${userID}`).once("value")
      ).val();

      
      let dataArray = [];
      for (let item in data) {
        dataArray.push({
          id: item,
          ...data[item],
        });
      }
      
      // const userBookings = dataArray.filter(
      //   (booking) => booking.userID == userID
      // );
      dispatch(setBookings(dataArray.reverse()));
      if(setRefreshed) {
        setRefreshed(false)
      }
    } else {
      dispatch(setBookings([]));
    }
  } catch (error) {
    console.log(error, "loadBook");
  }
};
