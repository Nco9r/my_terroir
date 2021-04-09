<template>
  <section class="hero">
        <div class="hero_img">
          <img src="@/assets/img/jpg/Traiteur.png" alt="">
        </div>
        <div class="hero_content">
          <div class="title">
            <h1>Traiteur à <strong>votre service.</strong></h1>
          </div>
          <div class="content">
            <p>Spécialiste en produits de terroir, nous allons à la rencontre des agriculteurs et éleveurs à la recherche de produits exceptionnels pour égayer vos papilles. </p>
          </div>
          <div class="btn_hero">
              <button> <svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="#fff"/>
                </svg>découvrir</button>
          </div>
        </div>
      </section>
</template>

<script>
export default {

}
</script>

<style scoped>

.hero {
  height: 100%;
  background-image: url('~assets/img/jpg/bck_hero.jpg');
  background-repeat: no-repeat;
  background-size: cover; 
  display: flex; 
  flex-flow: row wrap; 
  justify-content: space-between;
  align-items: center;
}

.hero_img {
  padding-top: 30px;
  margin-left: -00px;
  text-align: center; 
  margin-top: 50px;
  margin-bottom: 50px;
   
}

.hero_img img {
  width: 90%;

}

.hero_content {
  padding: 0 15px; 
}

.hero_content .title h1 {
    font-family: bebas-neue-pro, sans-serif; 
    text-transform: uppercase; 
    color: white; 
    font-size: 70px;
    text-align: center;
    font-weight: lighter;
    margin-top: -20px;
    line-height: 60px;
}

.content p {
    font-family: bebas-neue-pro-expanded, sans-serif; 
    color: white; 
    font-size: 18px;
    text-align: center;
    font-weight: 500;
    padding: 0 10px;
    margin-top: 20px;
    line-height: 24px;
}

.btn_hero {
    display: flex; 
}

.btn_hero button {
    margin: 10% auto; 
    padding: 8px 16px; 
    width: 100%;
    font-family: bebas-neue-pro, sans-serif; 
    background-color: var(--orange);
    border: none; 
    box-shadow: 4px 4px rgba(218, 71, 9, 0.486);
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: bold; 
    text-transform: uppercase;
}

.btn_hero button svg {
    margin-right: 10px;
}

@media screen and (min-width:768px) {
  
}

@media screen and (min-width:1024px) {

  .hero {
    display: flex; 
    flex-flow: row-reverse;
    align-items: flex-start;
    height: 100%;
    position: relative;
  }
  .hero_img img{
    width: 95%;
  }

  .hero_content {
    margin-left: 100px;
    margin-top: 130px;
  }

  .hero_content .title h1 {
    font-family: bebas-neue-pro, sans-serif; 
    text-transform: uppercase; 
    color: white; 
    text-align: left;
    font-size: 110px;
    font-weight: lighter;
    margin-top: 100px;
    line-height: 100px;
  }



  .content p {
    padding: 0 20px 0 0;
    width: 500px;
    font-size: 20px;
    line-height: 28px;
    text-align: left;

  }

  .btn_hero button {
    width: 50%;
    margin: 40px 0Px;
  }
}

</style>