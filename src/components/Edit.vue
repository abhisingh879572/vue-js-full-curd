<template>
    <div class="mt-5 contact-form">
      <form @submit.prevent="updateCategory" id="contact-form">
        <h2>UPDATE THE DATA</h2>
        <div class="input-box">
          <input type="text" v-model="name" />
        </div>
        <div class="input-box">
          <input type="text" v-model="address" />
        </div>
        <div class="input-box">
          <input type="number" v-model="contact" />
        </div>
        <div class="input-box">
          <input type="file" @change="handleFileUpload" required />
        </div>
        <div class="input-box">
          <textarea v-model="massages"></textarea>
        </div>
     <router-link to="/Showdata"> <div class="input-box">
        <input type="submit" value="Send" />
    </div>
    </router-link>   
        
      </form>
    </div>
  </template>
  
  
  <script>
export default {
  name: "EditCategory",
  data() {
    return {
      name: '',
      address: '',
      contact: '',
      massages: '',
      img: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      this.img = event.target.files[0];
    },
    async updateCategory() {
      try {
        const formData = new FormData();
        formData.append('name', this.name);
        formData.append('address', this.address);
        formData.append('contact', this.contact);
        formData.append('massages', this.massages);
        if (this.img) {
          formData.append('img', this.img);
        }

        const response = await fetch(`http://localhost:5000/api/putCategory/${this.$route.params.id}`, {
          method: 'PUT',
          body: formData
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Update successful:', data);
          this.$router.push({ name: 'add' }); // Change 'add' to the name of the route you want to redirect to
        } else {
          console.error('Failed to update category');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
    async fetchCategory() {
      try {
        const response = await fetch(`http://localhost:5000/api/getCategory/${this.$route.params.id}`);
        const data = await response.json();
        this.name = data.name;
        this.address = data.address;
        this.contact = data.contact;
        this.massages = data.massages;
      } catch (error) {
        console.error('Error:', error);
      }
    }
  },
  mounted() {
    this.fetchCategory();
  }
};
</script>

  
  <style scoped>
  .contact-form {
    margin: 0px auto;
    max-width: 600px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
  }
  
  .input-box {
    position: relative;
    margin: 20px 0;
  }
  
  .input-box input,
  .input-box textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .input-box span {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.3s;
    pointer-events: none;
    color: #aaa;
  }
  
  .input-box input:focus + span,
  .input-box input:valid + span,
  .input-box textarea:focus + span,
  .input-box textarea:valid + span {
    top: 0;
    left: 10px;
    font-size: 12px;
    color: #007bff;
  }
  
  .input-box input[type="submit"] {
    background: #007bff;
    color: #fff;
    cursor: pointer;
    border: none;
    transition: 0.3s;
  }
  
  .input-box input[type="submit"]:hover {
    background: #0056b3;
  }
  </style>
  