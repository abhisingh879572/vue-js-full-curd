<template>
    <div class="registers">
        <img src="../assets/images/logo.webp" alt="Logo" class="logo">
        <h1> * SIGN-UP *</h1>
        <div class="register">
            <input type="text" placeholder="Enter Name" name="name" v-model="name"/> <br/>
            <input type="text" placeholder="Enter Email" name="email" v-model="email"/> <br/>
            <input type="password" placeholder="Enter Password" name="password" v-model="password"/> <br/>
           
            <button @click="addUser">Sign Up</button>
            <p>
               <button> <router-link to="/login">Login</router-link> </button> <!-- Use router-link to navigate to the "Login" page -->
              </p>
          
        </div>
       
    </div>

</template>

<script>
import axios from 'axios';

export default {
    name: 'SignUp', // Specify the component's name
    data() {
        return {
            name: '',
            email: '',
            password: '',
        };
    },
    methods: {
        async addUser() {
    // Check if any field is empty
    if (!this.name || !this.email || !this.password) {
        alert('Please fill all input fields.'); // You can replace this with your preferred way of displaying messages
        return; // Don't proceed if any field is empty
    }
    try {
        const response = await axios.post("http://localhost:5000/api/register", {
            name: this.name,
            email: this.email,
            password: this.password
        });
        console.log("User added", response.data);
        alert('Register successfully');
        localStorage.setItem("user-info",JSON.stringify(response.data))
        this.$router.push({ name: 'Login' }); // Corrected syntax for navigation

        this.name = "";
        this.email = "";
        this.password = "";
    } catch (error) {
        console.error("Error adding user:", error);
        alert('Error registering user');
    }
}

    },
    mounted(){
        console.log("mount")

        let user = localStorage.getItem('user-info')
        if(user)
        {
            this.$router.push({ name: 'Home' }); // Corrected syntax for navigation

        }
    }

    
};
</script>

<style scoped>
.registers {
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
  max-width: 150px;
  margin-bottom: 20px;
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
    max-width: 150px;
    margin-bottom: 20px;
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

