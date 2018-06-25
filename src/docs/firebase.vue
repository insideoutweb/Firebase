<template>
<div class="overallDivs">  
  <card class="cardSigup text-center">
<!--      <btn id="firebaseui-auth-container" type="button" class="googleButtons btn btn-google-plus">Sign In With Google</btn> -->
      <h1>Welcome to My Awesome App</h1>
    <div id="firebaseui-auth-container"></div>
  </card>
</div>
</template>
<script src="https://www.gstatic.com/firebasejs/5.1.0/firebase.js"></script>
<!-- <script>
import firebase from 'firebase';
</script> -->
<script>
import Btn from '../components/Button';
import Column from '../components/Col';
import Row from '../components/Row';
import Container from '../components/Container';
import Card from '../components/Card';
import CardBody from '../components/CardBody';
import firebase from 'firebase';
import * as firebaseui from 'firebaseui';
var config = {
  apiKey: "AIzaSyDMeVNgtNvWQ3D0V5T0jMit_kSksxvILCA",
  authDomain: "samplefirebase-480a4.firebaseapp.com",
  databaseURL: "https://samplefirebase-480a4.firebaseio.com",
  projectId: "samplefirebase-480a4",
  storageBucket: "samplefirebase-480a4.appspot.com",
  messagingSenderId: "828434726649",
  clientId: "1068536332853-hf72jnfj8d42siqagoa38v6u7hf3lc6k.apps.googleusercontent.com"
};
firebase.initializeApp(config);
var uiConfig = {
  signInSuccessUrl: 'http://localhost:8080/',
  signInOptions: [
  // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  // tosUrl: '<your-tos-url>'
};
var ui = new firebaseui.auth.AuthUI(firebase.auth());
console.log(ui);
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
// var baseProvider = new firebase.auth.GoogleAuthProvider();
// firebase.auth().signInWithPopup(baseProvider)
//   .then(function(result){
//     console.log(result);
//   });
export default {
  // el: '#button',
  name: 'JustDeploy',
  components: {
    Btn,
    Column,
    Row,
    Container,
    Card,
    CardBody,
  },
  data(){
    return {
    };
  }
};
</script>
<style>
.overallDivs{
    margin-top: 4em;
    padding: 7% 0;
}
.cardSigup{
    width: 50% !important;
    margin: auto !important;
    height: 650px !important;
    border-radius: 4px !important;
  }
  .logoImgs{
    margin: 4em auto 2em auto !important;
    width: 35% !important;
  }
  .googleButtons{
    margin: 2em auto 3em auto !important;
    background: #ca3523 !important;
    border-radius: 3px !important;
    text-transform: none !important;
    width: 50% !important;
    height: 9% !important;
    font-size: 17px !important;
  }
 @media only screen and (min-width: 300px) and (max-width: 639.98px)
 {
 .cardSigup{
   width: 100% !important;
   height: 650px !important;
   padding: 1em !important;
 }
 .googleButtons{
    font-size: 14px !important;
    width: 80% !important;
 }
 .logoImgs{
     margin: 4em auto 2em auto !important;
    width: 60% !important;
 }
}
@media only screen and (min-width: 640px) and (max-width: 800px){
 .cardSigup {
    width: 70% !important;
   padding: 2em !important;
 }
 .googleButtons{
    font-size: 14px !important;
    width: 70% !important;
 }
 }
</style>