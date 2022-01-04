import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBSB8j4G_uBWRsqS1WPpd07rVfP5cLQiNU",
  authDomain: "my-app-react-4b8d6.firebaseapp.com",
  projectId: "my-app-react-4b8d6",
  storageBucket: "my-app-react-4b8d6.appspot.com",
  messagingSenderId: "986363507536",
  appId: "1:986363507536:web:89b98c31806ae4dbb77255"
};


const app = initializeApp(firebaseConfig);

export  const getFirestoreApp = () => {
    return app
}