<template>

    <nav class="navbar navbar-default">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand" ><span >Jobitta</span></router-link>

        <ul class="nav navbar-nav">
          <li><router-link to="/about" ><span >about us</span></router-link></li>      
          <li><router-link to="/form" ><span ></span></router-link></li>  
          <li><router-link to="/company" ><span >for Companies</span></router-link></li>  
          <li v-if="!user"><router-link :to="{name:'Signup'}">Signup</router-link></li>
          <li v-if="!user"><router-link :to="{name:'Login'}">Login</router-link></li>
          <li style="color:#fff;" v-if="user">{{user.email}}</li>
          <li v-if="user"><a @click="logout">Lougout</a></li>
        </ul>
      </div>
    </nav>

</template> 

<script>
import firebase from 'firebase'
export default {
    name: 'Navbar',
    data(){
      return {
        user: null
      }
    },
    methods: {
      logout(){
        firebase.auth().signOut().then(()=>{
          this.$router.push({
            name:'Login'
          })
        })
      }
    },
    created(){
     // let user =firebase.auth().currentUser
     firebase.auth().onAuthStateChanged((user) => {
       if(user){
         this.user = user
       } else {
         this.user = null
       }
     })
    }
}
</script>

<style>
  .navbar {
    margin-bottom: 0;
    background-color: #571ef4;
    z-index: 9999;
    border: 0;
    font-size: 12px !important;
    line-height: 1.42857143 !important;
    letter-spacing: 4px;
    border-radius: 0;
    font-family: Montserrat, sans-serif;
  }
  .navbar li a, .navbar .navbar-brand {
    color: #fff !important;
  }
  .navbar-nav li a:hover, .navbar-nav li.active a {
    color: #f4511e !important;
    background-color: #fff !important;
  }
  .navbar-default .navbar-toggle {
    border-color: transparent;
    color: #fff !important;
  }
</style>