<template>
<div>


    <img class="phots" src="https://img.freepik.com/free-vector/restaurant-interior-cartoon-with-cafe-furniture-bottle-fridge-vector-illustration_1284-77396.jpg?t=st=1715836711~exp=1715840311~hmac=23fe3612d7269748b3a26551094dcff19cdd626c24663681a95203faf8763ee9&w=1480" alt="">
</div>
<images/>
<About/>
</template>

<script>


import images from "./images.vue"
import About from "./About.vue"
export default{
    name,
    components: {
        images,
        About
  
  }

  
}

</script>
<style>
.phots{
    width: 100%;
  max-height: 800px;
}
</style>