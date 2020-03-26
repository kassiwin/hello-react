import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB7tabETWn0u6FLF18jpcIuy8jdJdd2Z_I",
    authDomain: "hello-react-bb8f1.firebaseapp.com",
    databaseURL: "https://hello-react-bb8f1.firebaseio.com",
    projectId: "hello-react-bb8f1",
    storageBucket: "hello-react-bb8f1.appspot.com",
    messagingSenderId: "189532553163",
    appId: "1:189532553163:web:db045c23a6ac41bbc2804e",
    measurementId: "G-YGM9GF6KMB"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;