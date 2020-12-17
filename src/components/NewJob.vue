<template>
  <div class="">
      
      <div class="row">
          <div class="col-sm-10">
              <form class="card-panel" @submit.prevent="NewJob">
        <h2 class="center deep-purple-text">Submit new Job</h2>
        <div class="form-group"> 
            <label for="jobtype">Job Type:</label>
            <p>
                <label class="radio-inline"><input type="radio" name="jobtype" value="full time" v-model="jobtype">Full Time</label>
                <label class="radio-inline"><input type="radio" name="jobtype" value="part time" v-model="jobtype">Part Time</label>
                <label class="radio-inline"><input type="radio" name="jobtype" value="remote" v-model="jobtype">Remote</label>
            </p>
        </div>
        <div class="form-group"> 
            <label for="email">Job title:</label>
            <input class="form-control" type="text" name="job" v-model="jobtitle">
        </div>
        <div class="form-group"> 
            <label for="seniority">Seniority:</label>
            <label class="radio-inline"><input type="radio" name="seniority" value="senoir" v-model="seniority">Senior</label>
            <label class="radio-inline"><input type="radio" name="seniority" value="mid" v-model="seniority">Mid Level</label>
            <label class="radio-inline"><input type="radio" name="seniority" value="jonior" v-model="seniority">Junior</label>
        </div> 
        <div class="form-group"> 
            <label for="seniority">What kind of a position do you want to fill:</label>
            <p>
                <input type="radio" name="seniority" class="grid-selection-item" v-model="category" value="Sales Business Development" /><span> Sales Business Development</span><br>
                <input type="radio" name="seniority" class="grid-selection-item" v-model="category" value="seniority"><span> Administration & Office Support</span><br>
                <input type="radio" name="seniority" class="grid-selection-item" v-model="category" value="CToplevelManagement"><span> C & Top level Management</span><br>
                <input type="radio" name="seniority" class="grid-selection-item" v-model="category" value="Construction"><span> Construction</span><br>
                <input type="radio" name="seniority" class="grid-selection-item" v-model="category" value="Engineering"><span> Engineering</span><br>
                <input type="radio" name="seniority" class="grid-selection-item" v-model="category" value="HospitalityRestaurant"><span> Hospitality & Restaurant</span><br>
                <input type="radio" name="seniority" class="grid-selection-item" v-model="category" value="LogisticsSupplyChain"><span> Logistics & Supply Chain</span><br>
                <input type="radio" name="seniority" class="grid-selection-item" v-model="category" value="MarketingPRMedia"><span> Marketing & PR & Media</span><br>
                <input type="radio" name="seniority" class="grid-selection-item" v-model="category" value="RealEstate"><span> Real Estate</span><br>
                <input type="radio" name="seniority" class="grid-selection-item" v-model="category" value="Retail"><span> Retail</span><br>
                <input type="radio" name="seniority" class="grid-selection-item" v-model="category" value="CustomerSupport"><span> Customer Support</span><br>
                <input type="radio" name="seniority" class="grid-selection-item" v-model="category" value="HRRecruitment"><span> HR &amp; Recruitment</span><br>
                <input type="radio" name="seniority" class="grid-selection-item" v-model="category" value="Finance"><span> Finance</span><br>
                <input type="radio" name="seniority" class="grid-selection-item" v-model="category" value="Legal"><span> Legal</span><br>
                <input type="radio" name="seniority" class="grid-selection-item" v-model="category" value="Design"><span> Design</span><br>
                <input type="radio" name="seniority" class="grid-selection-item" v-model="category" value="ProjectManagemen"><span> (Tech) Project Management</span><br>
                <input type="radio" name="seniority" class="grid-selection-item" v-model="category" value="SoftwareEngineering"><span> Software Engineering</span><br>
                <input type="radio" name="seniority" class="grid-selection-item" v-model="category" value="DataAnalytics"><span> Data &amp; Analytics</span><br>
                <input type="radio" name="seniority" class="grid-selection-item" v-model="category" value="ITSysadmin"><span> IT &amp; Sysadmin</span><br>
            </p>
        </div>
        <div class="form-group"> 
            <label for="password">Description:</label>
            <textarea class="form-control" type="textarea" name="password" v-model="description"> </textarea>         
        </div>
        <div class="form-group"> 
            <label for="alies">Prefered Language:</label>
            <p>
                <input type="checkbox" name="seniority" class="grid-selection-item" v-model="language" value="English"><span>English</span>
                <input type="checkbox" name="seniority" class="grid-selection-item" v-model="language" value="Estonian"><span>Estonian</span>
                <input type="checkbox" name="seniority" class="grid-selection-item" v-model="language" value="Finnish"><span>Finnish</span>
                <input type="checkbox" name="seniority" class="grid-selection-item" v-model="language" value="Swedish"><span>Swedish</span>
                <input type="checkbox" name="seniority" class="grid-selection-item" v-model="language" value="Germany"><span>Germany</span>
                <input type="checkbox" name="seniority" class="grid-selection-item" v-model="language" value="French"><span>French</span>          
            </p>
        </div>
        <div class="form-group" v-for="(input,k) in inputs" :key="k"> 
            <label for="alies">Job benefits:</label>
            <input class="form-control" type="text" name="benefits" v-model="input.name">
            <span>
                <i class="fas fa-minus-circle" @click="remove(k)" v-show="k || (!k && input.length > 1)"></i>
                <i class="fas fa-plus-circle" @click="add(k)" v-show="k == inputs.length-1"></i>    
            </span>          
        </div>
        <div class="form-group"> 
            <label for="alies">Conditions:</label>
            <input class="form-control" type="text" name="alias" v-model="conditions">          
        </div>
        
        <div class="filed center">
            <button class="btn btn-success">Submit</button>
          </div>
      </form>
          </div>
          <div class="col-sm-2"></div>
          
      </div>
       
  </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from '@/firebase/init'
export default {
    name: 'NewJob',
    data(){
        return {
         
            jobtype: null,
            jobtitle : null,
            seniority : null,
            description: null,
            category: null,
            language: [],
            inputs:[{name: ''}],
            conditions:null,
            }
        },
    methods:{
        add(index){
            this.inputs.push({ name: ''});
        },
        remove(index){
            this.inputs.splice(index, 1);
        },
                NewJob(){
            db.collection('newjob').add({
                jobtype: this.jobtype,
                jobtitle : this.jobtitle,
                seniority : this.seniority,
                description: this.description,
                category: this.category,
                language: this.language,
                inputs:this.inputs,
                conditions:this.conditions,
            }).then((docRef)=>{
                console.log("Document written ID:", docRef.id);
            })
            .catch((error)=>{
                console.error("Error", error);
            });
        }

    }

    };

</script>

<style>

</style>