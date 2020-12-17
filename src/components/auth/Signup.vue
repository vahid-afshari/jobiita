<template>
  <div class="signup container">
      <form class="card-panel" @submit.prevent="signup">
        <h2 class="center deep-purple-text">Sign Up</h2>
        <!-- <div class="field"> 
            <label for="email">Name:</label>
            <input type="text" name="name" v-model="name">
        </div>
        <div class="field"> 
            <label for="email">Job title:</label>
            <input type="text" name="job" v-model="job">
        </div>
        <div class="field"> 
            <label for="email">Work experience:</label>
            <input type="text" name="experience" v-model="experience">
        </div> -->

        <div class="form-group"> 
            <label for="email">Email:</label>
            <input class="form-control" type="email" name="email" v-model="email">
        </div>
        <div class="form-group"> 
            <label for="password">Password:</label>
            <input class="form-control" type="password" name="password" v-model="password">          
        </div>
        <div class="form-group"> 
            <label for="alies">User Name:</label>
            <input class="form-control" type="text" name="alias" v-model="alias">          
        </div>
        <p class="alert-warning" v-if="feedback">{{feedback}}</p>
        <div class="filed center">
            <button class="btn btn-success">Sign Up</button>
            <p>
                <router-link :to="{name:'Login'}">already User? Login!</router-link>
            </p>
          </div>
      </form>
  </div>
</template>

<script>
import slugify from 'slugify'
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
    name:'Signup',
    data(){
        return{
            email: null,
            password: null,
            alias: null,
            feedback: null,
            slug: null
        }
    },
    methods:{
        signup(){
            if (this.alias && this.email && this.password) {
                this.slug = slugify(this.alias, {
                    replacement: '-',
                    remove: /[$*_~.()'"!\:@]/g,
                    lower: true
                })
                let ref = db.collection('users').doc(this.slug)
                ref.get().then(doc => {
                    if(doc.exists){
                        this.feedback = 'this alies already exits'
                    } else { 
                        firebase.auth().createUserWithEmailAndPassword(this.email , this.password)
                        .then(cred => {
                            console.log(cred.user)
                            ref.set({
                                alias: this.alias,
                                user_id:cred.user.uid,
                            

                            })
                        }).then(() => {
                            this.$router.push({name:'ViewProfile ',params: {id:doc.user_id}})
                        })
                        .catch(err => {
                            console.log(err)
                            this.feedback = err.message
                        })
                        this.feedback = 'this alies is free to use'
                    }
                })
            } else {
                this.feedback = "You must fill all fields"
            }
        }
    }

}
</script>

<style>
.signup{ 
    max-width: 400px;
    margin-top: 60px;
}
.signup h2{
    font-size:2.4em;
}
signup .field{
    margin-bottom: 16px;
}
</style>