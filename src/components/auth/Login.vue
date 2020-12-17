<template>
  <div class="login container">
      <form @submit.prevent="login" class="card-panel">
        <h2 class="center deep-purple-text">Login </h2>
        <div class="form-group"> 
            <label for="email">Email:</label>
            <input class="form-control" type="email" name="email" v-model="email">
        </div>
        <div class="form-group"> 
            <label for="password">Password:</label>
            <input class="form-control" type="password" name="password" v-model="password">          
        </div>
        <p v-if="feedback" class="red-text center">{{feedback}}</p>
        <div class="form-group">
            <button class="btn btn-success">Login</button>
        </div>
      </form>
      
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'Login',
    data(){
        return {
            email:null,
            password:null,
            feedback:null
        }
    
    },
    methods:{
        login(){
           if(this.email && this.password){
               firebase.auth().signInWithEmailAndPassword(this.email,this.password)
               .then(cred=>{
                   console.log(cred.user)
                    this.$router.push({name:'Form'})
               }).catch(err => {
                   this.feedback = err.message
               })

               this.feedback = null
           } else {
               this.feedback = 'Please fill in both fields'
           }
        }
    }
}
</script>

<style>
.login{
    max-width: 480px;
    margin-top: 60px;

}
.login h2 {
    font-size: 2.4em;
}
.login .field{
    margin-bottom:16px;
}
</style>