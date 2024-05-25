<template>
    <div class="formss">
      <section>
        <div class="section-header">
          <div class="container">
            <h2>Contact Us</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
  
        <div class="container">
          <div class="row">
            <div class="contact-info">
              <div class="contact-info-item">
                <div class="p-4 contact-info-icon">
                  <img src="https://uxwing.com/wp-content/themes/uxwing/download/location-travel-map/address-icon.png" alt="" />
                </div>
                <div class="contact-info-content">
                  <h4 class="text-3xl">Address</h4>
                  <p>4671 Sugar Camp Road,<br/> Owatonna, Minnesota, <br/>55060</p>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="p-4 contact-info-icon">
                  <i class="fas fa-phone"></i>
                  <img src="https://cdn-icons-png.freepik.com/256/14441/14441223.png?ga=GA1.1.1412387950.1715750148&semt=ais_hybrid" alt="" />
                </div>
                <div class="contact-info-content">
                  <h4>Phone</h4>
                  <p>571-457-2321</p>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="p-4 contact-info-icon">
                  <img src="https://cdn-icons-png.freepik.com/256/8918/8918199.png?ga=GA1.1.1412387950.1715750148&semt=ais_hybrid" alt="" />
                </div>
                <div class="contact-info-content">
                  <h4>Email</h4>
                  <p>ntamerrwael@mfano.ga</p>
                </div>
              </div>
            </div>
            <div class="contact-form">
              <form @submit.prevent="addRestaurant" id="contact-form">
                <h2>Send Message</h2>
                <div class="input-box">
                  <input type="text" v-model="name" />
                  <span>Full Name</span>
                </div>
                <div class="input-box">
                  <input type="text" v-model="address" />
                  <span>Address</span>
                </div>
                <div class="input-box">
                  <input type="number" v-model="contact" />
                  <span>Contact</span>
                </div>
                <div class="input-box">
                  <input type="file" @change="handleFileUpload" required />
                </div>
                <div class="input-box">
                  <textarea v-model="massages"></textarea>
                  <span>Type your Message...</span>
                </div>
                <div class="input-box">
                 <input type="submit" value="Send" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>

  export default {
    name: 'ContactForm',
    data() {
      return {
        name: '',
        contact: '',
        massages: '',
        address: '',
        img: null,
      };
    },
    methods: {
      handleFileUpload(event) {
        this.img = event.target.files[0];
      },
      async addRestaurant() {
        if (!this.name || !this.contact || !this.massages || !this.address || !this.img) {
          alert('Please fill all input fields.');
          return;
        }
        const formData = new FormData();
        formData.append('name', this.name);
        formData.append('contact', this.contact);
        formData.append('massages', this.massages);
        formData.append('address', this.address);
        formData.append('img', this.img);
        try {
          const response = await fetch('http://localhost:5000/api/content', {
            method: 'POST',
            body: formData,
          });
          const data = await response.json();
          console.log(data);
          this.$router.push({ name: 'Showdata' }); 

          alert('Post successful');

        } catch (error) {
          console.error('Error:', error);
        }
      },
    },
  };
  </script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

.formss {
  min-height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
  background-size: cover;
  background-position: center;
  position: relative;
}

.formss::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.8);
}

section {
  position: relative;
  z-index: 3;

}

.container {
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
}

.section-header {
  margin-bottom: 50px;
  text-align: center;
}

.section-header h2 {
  color: #FFF;
  font-weight: bold;
  font-size: 3em;
  margin-bottom: 20px;
}

.section-header p {
  color: #FFF;
}

.row  {
  display: flex;
  flwx-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.contact-info {
  width: 50%;
}

.contact-info-item {
  display: flex;
  margin-bottom: 30px;
}

.contact-info-icon {
  height: 70px;
  width: 70px;
  background-color: #fff;
  text-align: center;
  border-radius: 50%;
}

.contact-info-icon i {
  font-size: 30px;
  line-height: 70px;
}

.contact-info-content {
  margin-left: 20px;
}

.contact-info-content h4 {
  color: #1da9c0;
  font-size: 1.4em;
  margin-bottom: 5px;
}

.contact-info-content p {
  color: #FFF;
  font-size: 1em;
}

.contact-form {
  background-color: #fff;
  padding: 40px;
  width: 45%;
  padding-bottom: 20px;
  padding-top: 20px;
}

.contact-form h2 {
  font-weight: bold;
  font-size: 2em;
  margin-bottom: 10px;
  color: #333;
}

.contact-form .input-box {
  position: relative;
  width: 100%;
  margin-top: 10px;
}

.contact-form .input-box input,
.contact-form .input-box textarea{
  width: 100%;
  padding: 5px 0;
  font-size: 16px;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #333;
  outline: none;
  resize: none;
}

.contact-form .input-box span {
  position: absolute;
  left: 0;
  padding: 5px 0;
  font-size: 16px;
  margin: 10px 0;
  pointer-events: none;
  transition: 0.5s;
  color: #666;
}

.contact-form .input-box input:focus ~ span,
.contact-form .input-box textarea:focus ~ span{
  color: #e91e63;
  font-size: 12px;
  transform: translateY(-20px);
}

.contact-form .input-box input[type="submit"]
{
  width: 100%;
  background: #00bcd4;
  color: #FFF;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #00bcd4;
  transition: 0.5s;
}

.contact-form .input-box input[type="submit"]:hover
{
  background: #FFF;
  color: #00bcd4;
}

@media (max-width: 991px) {
  section {
    padding-top: 50px;
  }
  
  .row {
    flex-direction: column;
  }
  
  .contact-info {
    margin-bottom: 40px;
    width: 100%;
  }
  
  .contact-form {
    width: 100%;
  }
}
</style>