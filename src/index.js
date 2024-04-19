import React from 'react';
import ReactDOM from 'react-dom/client';
import "./scss/custom.scss";
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSMlf57XpwFOxQS24joanXV_F3WITbN-g",
  authDomain: "james-headquarter.firebaseapp.com",
  projectId: "james-headquarter",
  storageBucket: "james-headquarter.appspot.com",
  messagingSenderId: "759364272686",
  appId: "1:759364272686:web:27507df8b07845c60f55bf",
  measurementId: "G-SET2QMTXLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = 
getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
