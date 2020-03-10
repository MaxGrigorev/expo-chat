import * as firebase from 'firebase';

// Set the configuration for your app
// TODO: Replace with your project's config object
const config = {
    apiKey: "AIzaSyCCMgV6rNeRGouUp7vlhgZMC2n9mzA_Ltc",
    authDomain: "itime-36fce.firebaseapp.com",
    databaseURL: "https://itime-36fce.firebaseio.com",
    storageBucket: "itime-36fce.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
const database = firebase.database();

export { database }
