<template>
  <section class="clients">
       <div class="storie_title">
              <div class="title_before">
                <p>plaisir</p>
              </div>
              <div class="title_storie">
                <h2>clients <strong>heureux</strong><span class="orange"> !</span></h2>
              </div>
              <hr class="hr_title">
        </div>
        <div class="grid_logo">
            <img src="@/assets/img/jpg/so.png" alt="">
            <img src="@/assets/img/jpg/bast.jpg" alt="">
            <img src="@/assets/img/jpg/deca.jpg" alt="">
            <img src="@/assets/img/jpg/cros.jpg" alt="">
            <img src="@/assets/img/jpg/pr.jpg" alt="">
            <img src="@/assets/img/jpg/da.png" alt="">
            <img src="@/assets/img/jpg/club.jpg" alt="">
            <img src="@/assets/img/jpg/trip.jpg" alt="">
            <img src="@/assets/img/jpg/follow_.jpg" alt="">
        </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>



.storie_title {
    text-align: center; 
    padding: 40px 0 60px 0; 
}

.title_before p {
  font-family: bebas-neue-pro, sans-serif; 
  color: var(--orange);
  font-size: 14px; 
  text-transform: uppercase; 
  font-weight: bold; 
  letter-spacing: 1.2px; 
  margin-bottom: 10px;
}

.title_storie h2{
  font-family: bebas-neue-pro, sans-serif; 
  color: var(--black);
  font-weight: lighter;
  font-size: 42px; 
  text-transform: uppercase; 
  line-height: 42px; 
  margin-bottom: 10px;
}

.hr_title {
  border: none; 
  width: 30px;
  height: 2px;
  background-color: var(--orange);
  display: flex; 
  margin: auto; 
}

.grid_logo {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
   grid-gap: 60px 30px;
   padding: 0 50px;
   align-items: center;
   justify-content: center;
   padding-bottom: 70px;
}
.grid_logo img {
    width: 100px;
}

</style>