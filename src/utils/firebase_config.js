// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd-DXCPyETCTFpjCIdtgcIEgM5Ia_wsZc",
  authDomain: "finalggu.firebaseapp.com",
  projectId: "finalggu",
  storageBucket: "finalggu.appspot.com",
  messagingSenderId: "523893564727",
  appId: "1:523893564727:web:1a8b824023740207a7e6b2",
  measurementId: "G-XL3HTRS808",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

export { firestore };
