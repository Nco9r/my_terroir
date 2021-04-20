<template>
  <section class="blog">
      <div class="title_section">
           <div class="title_before">
                <p>blog</p>
            </div>
            <div class="title_storie">
                <h2>nos dernières <strong>actualités</strong><span class="orange">.</span></h2>
            </div>
            <hr class="hr_title">
      </div>
      <div class="cards_blog">
          <div class="cards" v-for="article in articles" :key="article.id">
              <div class="cards_img">
                  <img src="@/assets/img/jpg/mariage.jpg" alt="">
              </div>
              <div class="infos_cards">
                  <div class="date">
                      <p>Le 12/03/1993</p>
                  </div>
                  <div class="auteur">
                      <p>By <span class="orange">Stéphane E.</span></p>
                  </div>
              </div>
              <div class="categorie">
                  <p>Traiteur</p>
              </div>
              <div class="title_cards">
                  <h3>{{article.title}}</h3>
              </div>
              <div class="contentIndex">
                  <p>Dans cet article nous avons voulu vous aiguiller un petit peu sur l’organisation de vos événements afin qu’ils soient le plus réussi possible et en vous donnant les clés pour vous simplifier la vie. </p>
              </div>
              <div class="btn_cards">
                  <nuxt-link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="none"/>
                </svg>Lire la suite </nuxt-link>
              </div>
          </div>
      </div>
       <div class="btn_hero">
              <button> <svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="#fff"/>
                </svg>Tous les articles</button>
          </div>
  </section>
</template>

<script>
export default {
    async asyncData({ $strapi }) {
        const articles = await $strapi.$articles.find('')
        return { articles }
    },

}
</script>

<style scoped>

.blog {
    padding: 0 15px;
}

.orange {
    color: var(--orange);
    font-weight: bold; 
}

.title_section {
    margin-bottom: 25px;
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

.cards_blog {
    display: flex; 
    flex-flow: row nowrap; 
    overflow: scroll;
    margin-bottom: 20px;
    margin-right: 5px;
}

.cards {
    width: 345px; 
    background-color: var(--gray);
    margin-right: 25px;
 
}

.cards_img img{
    object-fit: cover;
    width: 345px; 
    height: 250px;
}

.infos_cards {
    display: flex; 
    padding: 10px 15px 5px 15px;
    justify-content: space-between;
}

.categorie {
    padding: 0 15px; 
}

.categorie p{
   font-weight: bold;
}

.title_cards {
    padding: 15px;
}
.title_cards h3 {
    text-transform: uppercase; 
    font-size: 28px;
    font-weight: lighter; 
    font-family: bebas-neue-pro, sans-serif; 
}

.contentIndex {
    padding: 0 15Px;
    height: 80px;
    overflow: hidden;
}


.btn_cards a{
    padding: 25px 15px 25px 15px;
    display: flex; 
    align-items: center; 
    color: var(--orange);
    font-weight: bold; 
    text-decoration: none; 
}

.btn_cards a svg {
    fill: var(-orange)!important;
    margin-right: 10px;
}

.btn_cards a svg path {
    fill: var(--orange);
}

.btn_hero button {
    margin: 20px auto 40px auto; 
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




</style>