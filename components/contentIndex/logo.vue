<template>
    <section class="logo">
      <div class="grid"> 
        <div class="grid_img">
          <img src="@/assets/img/jpg/laborie_img.png" alt="">
        </div>
        <div class="grid_img_hos">
          <img src="@/assets/img/svg/hospital.svg" alt="">
        </div>
        <div class="grid_img">
          <img src="@/assets/img/jpg/laborie_img.png" alt="">
        </div>
        <div class="grid_img">
          <img src="@/assets/img/jpg/laborie_img.png" alt="">
        </div>
       
        </div>
      </section>
</template>

<script>
export default {

}
</script>

<style scoped>


.logo {
  padding: 20px 20px;
  display: flex; 
  background-color: var(--gray);
  flex-flow: row nowrap; 
  overflow-x: scroll;
}

.grid {
  display: flex; 
  flex-flow: row nowrap;
  /* animation: slide 30s infinite; */


}

.grid_img {
  overflow-x: scroll;
}

.grid_img img {
  width: 85px;
  margin-right: 60px;
}

.grid_img_hos img {
  width: 113px;
  margin-right: 60px;
}


@keyframes slide {
  0% {
    transform: translate3d(0)
  }
  50% {
    transform: translate3d(100%)
  }
  100% {
    transform: translate3d(0)
  }
}

@media screen and (min-width: 1024px) {
    .logo {
    padding: 100px 50px;
    display: none; 
    background-color: white;
    flex-flow: row nowrap; 
    justify-content: center;
    overflow-x: scroll;
  }
}

</style>