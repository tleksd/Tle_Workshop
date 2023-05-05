<template>
  <div id="app">
   <template>
      
      <v-bottom-navigation v-model="value">
        <v-btn value="profile" @click="goToHome()">
          <router-link to="/">Profile</router-link> 

          <v-icon>mdi mdi-account-circle</v-icon>
        </v-btn>
        

        <v-btn value="contact" @click="goToPage2()">
          <router-link to="/contact">Contact</router-link>

          <v-icon>mdi mdi-phone</v-icon>
        </v-btn>

        
        <v-btn value="project" @click="goToPage3()">
          <router-link to="/project">Project</router-link> 

          <v-icon>mdi mdi-book-open-variant</v-icon>
        </v-btn>
      </v-bottom-navigation>
</template>
    <router-view />
  </div>
</template>

<script>
export default {
   name: 'App',

   data: () => ({
      //
   }),
   methods: {
     goToHome(){
       this.$router.push('/');
     },
     goToPage2(){
       this.$router.push('/contact');
     },
     goToPage3(){
       this.$router.push('/project');
     },
   }

  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-exact-active {
  color: blue;
}
</style>