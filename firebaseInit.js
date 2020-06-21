import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBINadZsn9VOaT7xtxctuRw2CGJtUb7lLE",
  authDomain: "photo-studio-36b5b.firebaseapp.com",
  databaseURL: "https://photo-studio-36b5b.firebaseio.com",
  projectId: "photo-studio-36b5b",
  storageBucket: "photo-studio-36b5b.appspot.com",
  messagingSenderId: "25834722357",
  appId: "1:25834722357:web:9692e32d77732c81578d7c",
};

firebase.initializeApp(firebaseConfig);

const fbApp = {
  root: firebase,
  data: firebase.database(),
  auth: firebase.auth(),
};
export default fbApp;
