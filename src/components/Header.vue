<template>
    <div>
      <div class="flex items-center justify-between p-4 text-white bg-gray-800 nav">
        <div class="text-lg font-bold uppercase">restaurant</div>
        <button @click="toggleMenu" class="block text-right md:hidden" style="margin-left: 200px;">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          
        <div class="hidden md:flex md:items-center">
          <router-link class="px-4 py-2 rounded cursor-pointer text-1xl hover:bg-red-700"   to="/">Home</router-link>
          <router-link class="px-4 py-2 rounded text-1xl hover:bg-red-700" to="/add">Add Restaurant</router-link>
          <router-link class="px-4 py-2 rounded text-1xl hover:bg-red-700" to="/about">About</router-link>
          <router-link class="px-4 py-2 rounded text-1xl hover:bg-red-700" to="/Showdata">ShowData</router-link>
          <router-link class="px-4 py-2 rounded text-1xl hover:bg-red-700" to="/edit/:id">Update Restaurant</router-link>
          <a @click="logout" class="px-4 py-2 rounded cursor-pointer text-1xl hover:bg-red-700">Logout</a>
        </div>
      </div>
      <div :class="{'translate-x-0': menuOpen, '-translate-x-full': !menuOpen}" class="fixed inset-y-0 left-0 w-64 text-white transition-transform transform bg-gray-800 md:hidden">
        <button @click="toggleMenu" class="absolute top-4 right-4">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <router-link class="block px-4 py-2 mt-4 text-sm rounded hover:bg-gray-700" to="/">Home</router-link>
        <router-link class="block px-4 py-2 mt-2 text-sm rounded hover:bg-gray-700" to="/add">Add Restaurant</router-link>
        <router-link class="px-4 py-2 rounded text-1xl hover:bg-red-700" to="/about">About</router-link>
        <router-link class="block px-4 py-2 mt-2 text-sm rounded hover:bg-gray-700" to="/Showdata">ShowData</router-link>
        <router-link class="block px-4 py-2 mt-2 text-sm rounded hover:bg-gray-700" to="/edit/:id">Update Restaurant</router-link>
        <a @click="logout" class="block px-4 py-2 mt-2 text-sm rounded cursor-pointer hover:bg-gray-700">Logout</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name,
    data() {
      return {
        menuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      },
      logout() {
        localStorage.clear();
        this.$router.push({ name: 'Login' });
      }
    }
  };
  </script>
  
  
<!-- 
<style scoped>
.nav{
background-color: #333;
    overflow: hidden;
  
    
}
.nav router-link{
    float: left;
    color: azure;
    text-align: center;
    padding: 19px 16px;
    text-decoration: none;
    font-size:3000px;
    margin-right: 30px;
    text-decoration: none;
 
}
.nav router-link:hover{
    background-color:#ddd ;
    color: #222;
    border-radius: 2px;
   
   
 


}
</style> -->
<style>
.nav
{
    background-color: #333;
    overflow: hidden;

}
.gg {
    float: left;
    color: azure;
    text-align: center;
    padding: 18px 16px;
    text-decoration: none;
    font-size:17px;
    margin-right: 30px;
    text-decoration: none;
    text-transform: uppercase;
 
}
.gg:hover{
    background-color:#ddd ;
    color: #222;
    border-radius: 2px;
   
   
 


}
</style>