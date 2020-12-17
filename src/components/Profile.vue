<template>
  <div class="container center">
      <div class="card-panel">
          <button><router-link :to="{name:'Signup'}">Signup</router-link></button>
          <button><router-link :to="{name:'Login'}">Login</router-link></button>
    
      </div>

  </div>
</template>

<script>
export default {
    name: 'Profile',
    data(){
        return {

        }
    }

}
</script>

<style>

</style>