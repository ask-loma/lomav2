import firebase from "firebase/app";
import "firebase/auth";

/**
 * We'll have to keep this as a secret - do not include this in git
 */
const firebaseConfig = {
  apiKey: "AIzaSyCpK5nym_wncNlLRcAaAKgJJ4Ek6r5G0yg",
  authDomain: "loma-b3a1a.firebaseapp.com",
  projectId: "loma-b3a1a",
  storageBucket: "loma-b3a1a.appspot.com",
  messagingSenderId: "936413611566",
  appId: "1:936413611566:web:73c348348cb268422b41bf",
};

firebase.initializeApp(firebaseConfig);

export function authByEmailLink(email) {
  var actionCodeSettings = {
    // url should be configurable
    url: "http://localhost:3000/",
    // This must be true.
    handleCodeInApp: true,
    dynamicLinkDomain: "loma.page.link", // we need to set this up
  };

  console.log(email);

  firebase
    .auth()
    .sendSignInLinkToEmail(email, actionCodeSettings)
    .then(() => {
      window.localStorage.setItem("emailForSignIn", email);
    })
    .catch(console.error);
}

export function checkIfSignInByLink() {
  // Confirm the link is a sign-in with email link.
  if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
    // Additional state parameters can also be passed via URL.
    // This can be used to continue the user's intended action before triggering
    // the sign-in operation.
    // Get the email if available. This should be available if the user completes
    // the flow on the same device where they started it.
    var email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      // User opened the link on a different device. To prevent session fixation
      // attacks, ask the user to provide the associated email again. For example:
      email = window.prompt("Please provide your email for confirmation");
    }
    // The client SDK will parse the code from the link for you.
    firebase
      .auth()
      .signInWithEmailLink(email, window.location.href)
      .then((result) => {
        console.log("Signed in", result);
        // Clear email from storage.
        window.localStorage.removeItem("emailForSignIn");
        // You can access the new user via result.user
        // Additional user info profile not available via:
        // result.additionalUserInfo.profile == null
        // You can check if the user is new or existing:
        // result.additionalUserInfo.isNewUser
      })
      .catch((error) => {
        // Some error occurred, you can inspect the code: error.code
        // Common errors could be invalid email and invalid or expired OTPs.
      });
  }
}
