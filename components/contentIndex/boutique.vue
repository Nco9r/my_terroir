<template>
  <section class="concept">
      <div class="block_concept">
          <div class="title_concept">
           <div class="title_before">
                <p>boutique</p>
            </div>
            <div class="title_storie">
                <h2>profitez de nos produits <strong>en toute simplicité</strong><span class="orange">.</span></h2>
            </div>
            <hr class="hr_title">
          </div>
          <div class="items_concept">
              <div class="items">
                      <img src="@/assets/img/svg/phone_1.svg" alt="">
                      <h4><span class="orange">#1.</span>passez commande</h4>
                      <p> Sur notre boutique en ligne.</p>
                  </div>
                <div class="items">
                      <img src="@/assets/img/svg/phone_2.svg" alt="">
                      <h4><span class="orange">#2.</span>confirmation</h4>
                      <p>Recevez la confirmation.</p>
                  </div>
                   <div class="items">
                      <img src="@/assets/img/svg/bag.svg" alt="">
                      <h4><span class="orange">#3.</span>livraison</h4>
                      <p>Vous êtes livrés.</p>
                  </div>
              </div>
              <div class="btn_hero">
              <button> <svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="#fff"/>
                </svg>Commandez</button>
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

.concept {
    background-color: var(--gray);
    background-image: url('~assets/img/jpg/craft.jpg');
    background-size: cover;
}

.block_concept {
    padding: 40px 15px; 
}
.title_concept {
    text-align: center; 
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

.items_concept {
    display: flex; 
    margin: 5px auto;
    flex-flow: column;
}

.items {
    text-align: center;
}

.items h4 {
    margin-top: -70px;
    font-family: bebas-neue-pro, sans-serif; 
    font-size: 24px; 
    margin-bottom: 5px;
    text-transform: uppercase;
}

.items p {
    font-family: bebas-neue-pro-expanded, sans-serif; 
    font-size: 16px; 
    margin-bottom: 5px;
    color: gray;
    padding: 0 60px;
    font-weight: bold;
}

.btn_hero button {
    margin: 20px auto; 
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
    cursor: pointer; 
    outline: none; 
    background-image: url('~assets/img/jpg/texture.png'); 
    background-size: 60%;

}

.btn_hero button svg {
    margin-right: 10px;
}

@media screen and (min-width: 1024px) {

    .concept {
        margin: 50px 100px;
        border-radius: 10px;
    }

    .title_storie h2 {
        font-size: 60px; 
        line-height: 50px;
    }
    .items_concept {
        display: flex; flex-flow: row; 
    }

    .items {
    text-align: center;
    width: 33%;
    }

    .btn_hero {
        width: 300px;
        display: flex; 
        margin: 40px auto 30px auto; 
    }

    .btn_hero button {
        text-align: center;
    }
}

</style>