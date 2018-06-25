<template>
<div class="overallDivs">  
  <card class="cardSigup text-center">
    <p class="font-weight-bold" style="font-size: 20px;">Sign Up for free</p>
    <p style="font-size: 16px;">14 days of free trial with all premium features unlocked</p>
   <btn id="button" v-on:click.native="googlesignin" type="button" class="googleButtons btn btn-google-plus">Sign In With Google</btn>
   <p>By signing up,you are agreeing to our <a href="#"><span style="color: rgb(139, 195, 74); font-weight: bold;">Terms of Service </span></a><span>and </span><a><span style="color: rgb(139, 195, 74); font-weight: bold;">Privacy Policy</span></a></p>
  <p>Already have an account ?<a href="#/signin"><span class="ml-2"style="color: rgb(139, 195, 74); font-weight: bold;">Singn In</span></a></p>
  </card>
</div>
<!-- <ui-auth
    firebase="playground"
    google='email'
></ui-auth> -->
</template>
<script>
import Btn from '../components/Button';
import Column from '../components/Col';
import Row from '../components/Row';
import Container from '../components/Container';
import Card from '../components/Card';
import CardBody from '../components/CardBody';
import VueSession from 'vue-session';
import axios from 'axios';
import Vue from 'vue';
Vue.use(VueSession);
// import firebase from 'firebase';
// var Vue = require('vue');
// var firebaseAuth = require('vueui-firebase-auth');
// var firebase = require('firebase');

// Vue.use(firebaseAuth);
// var config = {
//   apiKey: "AIzaSyAdTPHGq3UD6nAEd-5JlBLouo3sXsu0_SM",
//   authDomain: "playground-a5eaf.firebaseapp.com",
//   databaseURL: "https://playground-a5eaf.firebaseio.com",
//   projectId: "playground-a5eaf",
//   storageBucket: "playground-a5eaf.appspot.com",
//   messagingSenderId: "708792043522"
// };
// firebase.initializeApp(config);

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
      // firebase: 'playground',
      // providers: ['google'],
      // scopes: {
      //   google: 'email',
      // }
    };
  },
  methods: {
    googlesignin() {
      this.isShow = 1;
      var baseProvider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(baseProvider)
      .then(function(result){
        console.log(result);
        let oldUser = {
          "firstName": result.user.displayName,
          "lastName": result.user.displayName,
          "email": result.user.email, 
          "profileImage": result.user.photoURL,
          "googleId": result.user.uid, 
        };
        console.log(oldUser);
        this.login(oldUser);
      }.bind(this))
      .catch(function(err){
        if (err){
          this.errorpopup();
        }
      });
    },
    login(oldUser) {
      // console.log("hfjdhjk");
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.post("https://justdeployengine-elinor.herokuapp.com/users/google_login", oldUser)
      .then(function(response){
        if (response.status === 200) {
          console.log(response);
          var res = response.data;
          // console.log(res.message);
          // console.log(res.data.email);    
          this.$session.start();
          // this.$session.set(res.data);
          this.$session.set('userName',res.data.firstName);
          this.$session.set('lastname',res.data.lastName);
          this.$session.set('email',res.data.email);
          this.$session.set('userId',res.data._id);
          this.$session.set('profileImage',res.data.profileImage);
          this.$session.set('loggedIn', '1');
          // console.log(this.$session.get('userName'));
          // console.log(this.$session.get('lastname'));
          // console.log(this.$session.get('email'));
        
          // this.isModalVisiblesigups=false;
          // this.isModalVisiblelog=false;
          // console.log(this.$session.get('firstName'));
          this.$notify.success('LoggedIn Successfully!!');

          // this.$router.push('/dashboard');
          // this.isShow = 0;
        }
        else {
          this.$router.push('/');
        }
      }.bind(this))
      .catch(function(err){
        if (err){
          this.errorpopup();
        }
      }.bind(this));
    }
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