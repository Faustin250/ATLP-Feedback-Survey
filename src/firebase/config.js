import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  //firebase config
  apiKey: "AIzaSyBqDL46nex11hw9UxqbLb3ojpRlW1WR5UY",
  authDomain: "atlp-18d46.firebaseapp.com",
  projectId: "atlp-18d46",
  storageBucket: "atlp-18d46.appspot.com",
  messagingSenderId: "115383672010",
  appId: "1:115383672010:web:e595da60264865c2e32833",
  measurementId: "G-5TYZTR23M9"

}

class Firebase {

  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }

  //login
  async login(email, password) {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password).catch(err => {
      console.log(err);
      return err;
    });
    return user;
  }

  //signin
  async signup(email, password) {
    const user = await firebase.auth().createUserWithEmailAndPassword(email, password).catch(err => {
      console.log(err);
      return err;
    });
    return user;
  }

  //logout
  async logout() {
    const logout = await firebase.auth().signOut().catch(err => {
      console.log(err);
      return err;
    });
    return logout;
  }

  async getUserState() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }


}
export default new Firebase();