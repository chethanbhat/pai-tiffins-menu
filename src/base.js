import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCAi8ssoOA5v6j69P0Nocz8BVWTqG6Ttjs",
    authDomain: "pai-tiffins-menu.firebaseapp.com",
    databaseURL: "https://pai-tiffins-menu.firebaseio.com"
  }
);

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;