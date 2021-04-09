<template>
  <section class="hero">
        <div class="hero_img">
          <img src="@/assets/img/jpg/hero_img.png" alt="">
        </div>
        <div class="hero_content">
          <div class="title">
            <h1>Produits <br><strong>de terroir.</strong></h1>
          </div>
          <div class="content">
            <p>Spécialiste en produits de terroir pour toutes les occasions : Traiteur, Épicerie et Livraison des particuliers et professionnels de la restauration. </p>
          </div>
          <div class="btn_hero">
              <button> <svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="#fff"/>
                </svg>Boutique</button>
          </div>
        </div>
        <div class="ronds">
          <img src="@/assets/img/jpg/rond.png" alt="">
        </div>
      </section>
</template>

<script>
export default {

}
</script>

<style scoped>

.hero {
  height: 100vh;
  background-image: url('~assets/img/jpg/bck_hero.jpg');
  background-repeat: no-repeat;
  background-size: cover; 
  display: flex; 
  flex-flow: row wrap; 
  justify-content: space-between;
  align-items: center;
}

.ronds {
    display: none;
  }

  .ronds img{
    width: 150px;
  }

  @keyframes move {
    from{
      transform: rotate(0)
    }
    to{
      transform: rotate(-360deg)
    }
  }

.hero_img {
  padding-top: 30px;
  text-align: center;
   
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
    background-image: url('~assets/img/jpg/texture.png'); 
    background-size: 60%;
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
    height: 100vh;
  }
  .hero_img img{
    width: 80%;
    margin-right: 300px;
  }

  .hero_content {
    margin-left: 100px;
    margin-top: 50px;
  }

  .hero_content .title h1 {
    font-family: bebas-neue-pro, sans-serif; 
    text-transform: uppercase; 
    color: white; 
    text-align: left;
    font-size: 120px;
    font-weight: lighter;
    margin-top: 100px;
    line-height: 110px;
  }



  .content p {
    padding: 0 20px 0 0;
    width: 480px;
    font-size: 20px;
    line-height: 28px;
    text-align: left;
    font-weight: bold;

  }

  .btn_hero button {
    width: 50%;
    margin: 40px 0Px; 
}
  .ronds {
    position: absolute;
    bottom: -70px; 
    left: 430px;
    display: flex;
    animation: move 10s linear infinite;
  }

  .ronds img{
    width: 200px;
  }

  
}

</style>