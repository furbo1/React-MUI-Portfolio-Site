import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBGSdHLJMivr78-U5301SGoaAIyHGAnppo",
    authDomain: "portfolio-59e14.firebaseapp.com",
    databaseURL: "https://portfolio-59e14.firebaseio.com",
    projectId: "portfolio-59e14",
    storageBucket: "portfolio-59e14.appspot.com",
    messagingSenderId: "177896325807",
    appId: "1:177896325807:web:75669802358834c9db4a5a"
  });


  const db = firebaseApp.firestore()

  export {db};