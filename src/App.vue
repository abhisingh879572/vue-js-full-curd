<template>
  <Header/>

 <router-view/>
 <footear/>
</template>

<script>
import Header from "./components/Header"
import footear from "./components/footear.vue";

export default {
  name: 'App',
  components: {
    Header,
    footear
  
  }
}
</script>

<style>
<!-- #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
} -->
body{
  padding: 0px;
  margin: 0px;
}
.logo {
  height: 200px;
  width: 200px;
}

.registers ,.login {
  background-color: blueviolet;
  min-height: 440px;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  box-shadow: 0px 0px 2px black;
}

.register input , .login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}

.register button ,.login button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background-color: red;
  color: black;
  text-transform: uppercase;
}

.login {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.logo {
  max-width: 200px;
  margin-bottom: 20px;
  margin: 0px auto;
}

h1 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.input-container {
  margin-bottom: 20px;
}

input[type="text"],
input[type="password"] {
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.sign-up-button {
  background-color: #28a745;
}

.sign-up-button:hover {
  background-color: #218838;
}

p {
  margin-top: 20px;
}

p button {
  width: auto;
  padding: 5px 10px;
  background-color: #6c757d;
  border: none;
  border-radius: 5px;
  color: white;
}

p button:hover {
  background-color: #5a6268;
}
</style>
