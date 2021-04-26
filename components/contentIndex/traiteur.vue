<template>
     <section class="storie">
        <div class="block_storie">
          <div class="storie_img">
            <img src="@/assets/img/jpg/brasero.jpg" alt="">
          </div>
          <div class="storie_content">
            <div class="storie_title">
              <div class="title_before">
                <p>savoir faire</p>
              </div>
              <div class="title_storie">
                <h2>un service <strong>traiteur</strong><span class="orange">.</span></h2>
              </div>
              <hr class="hr_title">
            </div>
            <div class="content_text">
              <p>Cassez les codes, choisissez un traiteur pas comme les autres qui vous propose une sélection de produits de qualité dénichée chez des producteurs artisanaux en France, Espagne et en Italie. Vous organisez votre mariage, un anniversaire ou simplement des retrouvailles entre copains. Choisissez avec nous les produits qui s’accorderont au mieux avec votre événement.
                Nous pouvons nous occuper des services complémentaires comme la vaisselle ou le mobilier.</p>
            </div>
            <div class="btn_hero">
              <nuxt-link to='traiteur-particuliers'><button> <svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="#fff"/>
                </svg>nos prestations</button></nuxt-link>
          </div>
          </div>
        </div>
      </section>
</template>

<script>
export default {

}
</script>

<style scoped>

.orange {
  color: var(--orange); 
  font-weight: bold; 
}

.storie {
  display: flex; 
  margin-top: 120px;

}

.storie_img {
  display: flex;
}

.storie_img_2 img{
  margin-left: 110px;
  margin-top: -230px;
}

.storie_img img {
  object-fit: cover;
  width: 100%; 
  height: 300px;
}
.storie_img img:nth-child(2) {
  margin-top: 140px;
  margin-left: -230px;
}

.storie_content {
  padding: 0 15px; 
  margin-top: 30px;
  margin-bottom: 10px;
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
}

.content_text {
  margin-top: 20px;
}

.content_text p {
  font-family: bebas-neue-pro-expanded, sans-serif; 
  color: var(--black);
  font-size: 16px; 
  line-height: 26px; 
  margin-bottom: 10px;
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

@media screen and (min-width:1024px) {


  .block_storie {
    display: flex; 
    margin: 0 100px;
    flex-flow: row-reverse;
    align-items: center;
    justify-content: space-between;
  }
  .storie_img {
    width: 50%;
  }

  .storie_img img {
  object-fit: cover;
  width: 500px; 
  height: 500px;
  border-radius: 10px
}

  .storie_content {
    width: 50%;
  }

  .title_storie h2 {
    font-size: 70px;
    line-height: 60px
  }

  .content_text p {
  font-size: 18px; 
  line-height: 28px; 

}
  .btn_hero button {
    width: 50%;
    margin-top: 30px;
  }
}
</style>