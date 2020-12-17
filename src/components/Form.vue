<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col s3"></div>
        <div class="col s6 card">
          <form @submit.prevent="updateFirebase" class="">
            <input placeholder="First Name"  type="text" name="name" v-model="fname" /> 
            <input placeholder="Last Name"  type="text" name="name" v-model="lname" /> 
            <!-- <input placeholder="Email"  type="email" name="name" v-model="email" /> -->
            <input placeholder="Phone"  type="tel" name="name" v-model="tel" />
            <input placeholder="Current Location" type="text" name="name" v-model="location" />
            <input placeholder="Age" type="text" name="name" v-model="age" />
            <input placeholder="Job title"  type="text" name="name" v-model="jobtitle" />
            <input placeholder="Experience" type="text" name="name" v-model="experience" />
            <label>
                <input type="checkbox" class="filled-in"/>
                <span>Europe Work Permit?</span>
            </label>
            <button class="btn deep-purple">Update</button>
          </form>  
        </div>   
      </div>
    <div class="col s3"></div>
  </div>
</div>   
</template>

<script>
import Navbar from './Navbar.vue'
import db from '@/firebase/init.js' 
import firebase from 'firebase'
const documentPatch = 'Form';
export default {
    name:'Form',
  data() {
    return {
      fname: null,
      lname: null,
      tel:null,
      location:null,
      jobtitle:null,
      age:null,
      experience:null    };
  },
firestore() {
  return {
    firebaseData: db.doc(documentPatch),
    };
  },
  methods: {
     updateFirebase() {
       db.collection('Form').add({
         fname:this.fname,
         lname:this.lname,
         tel:this.tel,
         location:this.location,
         age:this.age,
         experience:this.experience,
         jobtitle:this.jobtitle
       })
     }
  },
  created() {
    db.collection('form').get()
    .then(snapshot =>{
      snapshot.forEach(doc => {
        console.log(doc.data(), doc.id)
        let jobseekers = doc.data()
        jobseekers.id = doc.id
        this.jobseekers.push(jobseekers)
      })
    })
  }
  }
  
</script>

<style>
</style>
