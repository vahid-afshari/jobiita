<template>
  <div class="container">
      <div class="row">
          <div class="col-sm-6"></div>
          <div class="col-sm-6">
              <h3>JobSeeker Area</h3>
              <signup/>
              </div>
      </div>
  </div>
</template>

<script>
import signup from '@/components/auth/Signup.vue'
export default {
    name:'Area',
    components:{signup},
    data(){
        return{

        }
    }

}
</script>

<style>

</style>