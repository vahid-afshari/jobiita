<template> 
      <div class="row">
        <div class="col-sm-2 panel shadow">
            <nav id="sidebar">
                <div class="sidebar-header">
                    <h3>Menu</h3>
                </div>
                 <ul class="list-unstyled components">
                    <ul >
                        <li class="far fa-id-card" @click="ShowProfile()"><a> Company profile</a></li>
                        <li class="far fa-plus-square" @click="ShowJob()"><a> Submit new Job</a></li>
                        <li class="fas fa-bullhorn" @click="ShowMarket()"><a> Market insight</a></li>
                    </ul>
                </ul>        
            </nav>
        </div>
        <div class="col-sm-10">
            <div v-if="profile">
                <CompanyProfile />
            </div>
            <div v-if="newjob">
                <NewJob />
            </div>
            <div v-if="marketinsight">
                <MarketInsight />
            </div>
        </div>
  </div>
</template>

<script>
import CompanyProfile from '@/components/CompanyProfile.vue'
import NewJob from '@/components/NewJob.vue'
import MarketInsight from '@/components/MarketInsight.vue'
export default {
    name:'Company',
    components:{CompanyProfile,NewJob,MarketInsight},
    data(){
        return{
           newjob: false,
           marketinsight: true,
           profile: false,
        }
    },
    methods:{
        ShowJob(){
            this.newjob = true,
            this.marketinsight = false,
            this.profile = false
        },
        ShowMarket(){
            this.newjob = false,
            this.marketinsight = true,
            this.profile = false
        },
        ShowProfile(){
            this.newjob = false,
            this.marketinsight = false,
            this.profile = true
        }
    }
}
</script>

<style>
#sidebar {
border-right: 1px;
}
</style>