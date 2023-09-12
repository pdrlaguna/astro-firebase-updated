import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA8VnSRTgxlBFN3UQqV_FQXL0Yu8SUx1Is",
  authDomain: "astro-hello-world.firebaseapp.com",
  projectId: "astro-hello-world",
  storageBucket: "astro-hello-world.appspot.com",
  messagingSenderId: "600435031990",
  appId: "1:600435031990:web:74a3731c68cf4178358b17",
  measurementId: "G-1R1FM70D0J"
};

export const app = initializeApp(firebaseConfig);
