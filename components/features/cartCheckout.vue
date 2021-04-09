<template>
    <section class="panier">
        <div class="title_panier">
            <h2>Récapitulatif du <strong>panier</strong></h2>
        </div>
        <div class="products_panier">
            <p>Il y a <strong>2</strong> produits dans votre panier</p>
        </div>
        <div class="table_panier">
            <p>Produits</p>
            <p>Quantité</p>
            <p>Prix</p>
        </div>
        <div class="items_products_cart">
        <div class="products_items" v-for="item in carts" :key="item">
            <p class="title_products">{{item.products_title}}</p>
            <div class="number_products">
                <p>1</p>
            </div>
            <p class="price_products">{{item.price}}€</p>
        </div>
        </div>
        <div class="bottom_of_cart">
            <div class="table_bottom">
            <p>TOTAL</p>
            <p>TTC</p>
            </div>
            <div class="result">
                <div class="dispo">
                    <p>Disponibilité</p>
                    <p>3/4 jours ouvrés</p>
                </div>
                <div class="price_cart">
                    <p>{{total}}€</p>
                </div>
            </div>
            <hr>
            <div class="cta_cart">
                <nuxt-link to="/boutique">Continuer mes achats</nuxt-link>
                <button @click="commande = !commade"> Valider la commande</button>
            </div>
             <div class="icon_cart">
                <img src="@/assets/img/jpg/american-express-png.jpeg" alt="">
                <img src="@/assets/img/jpg/visa-png.jpeg" alt="">
                <img src="@/assets/img/jpg/pay-pal-png.jpeg" alt="">
                <img src="@/assets/img/jpg/mastercard-png.jpeg" alt="">
            </div>
        </div>
        <div class="commande_valide" v-if="commande">
            <div class="svg_valide">
                <img src="@/assets/img/svg/valide.svg" alt="">
            </div>
            <div class="content_valide">
                <h2><strong>Merci</strong> pour votre commande</h2>
                <p>Vous allez recevoir un mail de confirmation de commande! À bientôt chez my terroir ! </p>
            </div>
            <div class="btn_valide" @click="commande = !commade">
              <nuxt-link to="/boutique"><button> <svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="#fff"/>
                </svg>Boutique</button></nuxt-link>
          </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            commande: false, 
        }
    },
    computed: {
        carts() {
            return this.$store.state.cart.datas
        },
        total() {
            return this.carts.reduce((acc, v) => {
                acc += v.price;
                return acc;
            }, 0)
        },
    }

}
</script>

<style scoped>

.panier {
    width: 100%; 
    top: 0; 
    right: 0;
    bottom: 0;
    left: 0;
    background-color: white;
    z-index: 100;
    padding: 0 15px;
}

.title_panier {
    margin-top: 20px;
    display: flex; 
    align-items: center; 
    justify-content: space-between;
}

.title_panier h2 {
    font-weight: lighter; 
    font-size: 38px;
}

.table_panier {
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    background-color: var(--gray);
    padding: 8px 10px;
    margin-top: 30px;
}

.table_panier p{
    font-family: bebas-neue-pro, sans-serif; 
    font-weight: bold;
}

.products_items {
    display: flex; 
    justify-content: space-between; 
    margin-top: 10px;
    padding: 0 5px;
}

.title_products {
    width: 120px;
}

.number_products {
    display: flex; 
    width: 50px;
    justify-content: center;
}

.number_products p{
    font-weight: bold;
    color: var(--orange);
}

.price_products {
    width: 100px;
    justify-content: flex-end;
    display: flex;
    font-weight: bold;
}


.bottom_of_cart {
    position: absolute; 
    left: 0;
    right: 0;
    background-color: var(--gray);
}

.table_bottom {
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    background-color: white;
    margin: 0 15px;
    padding: 8px 10px;
    margin-top: 30px;
}

.table_bottom p{
    font-family: bebas-neue-pro, sans-serif; 
    font-weight: bold;
}

.result {
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    padding: 8px 10px;
    margin: 0 15px;
    margin-top: 10px;
}

.dispo p:nth-child(1) {
    color: var(--hint);
    font-weight: bold;
}

.dispo p:nth-child(2) {
    color: var(--black);
    font-weight: bold;
}

.price_cart {
    font-size: 42px;
    font-family: bebas-neue-pro, sans-serif; 
    font-weight: bold;
}

hr {
    border: none; 
    width: 90%; 
    height: 2Px;
    background-color: white;
    display: flex; 
    margin: 5px auto 0 auto; 
}

.cta_cart {
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    margin: 20px 15px;
}

.cta_cart a  {
    width: 48%;
    border: none; 
    padding: 15px 2px;
    font-family: bebas-neue-pro, sans-serif; 
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
}

.cta_cart button  {
    width: 48%;
    border: none; 
    padding: 15px 2px;
    font-family: bebas-neue-pro, sans-serif; 
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: white; 
    background-color: var(--orange);
}

.cta_cart a:nth-child(1) {
    color: white; 
    background-color: var(--black);
}

.paiement {
    margin: 0 15px;
    font-size: 12px;

}

.paiement p:nth-child(1) {
    color: var(--hint);
    font-weight: bold;
}

.paiement p:nth-child(2) {
    color: var(--black);
    font-weight: bold;
}

.icon_cart {
    margin: 10px 15px;
}

.icon_cart img {
    width: 30px;
    margin-right: 10px;
}

.items_products_cart {
    overflow: scroll;
    max-height: 400px;
    margin-bottom: 10px;
}
.commande_valide {
    position: fixed; 
    background-color: var(--black); 
    width: 100%; 
    height: 100%;
    top: 0; 
    left: 0; 
    bottom: 0; 
    right: 0;
    z-index: 900;
    text-align: center;
    padding: 0 30px;
}

.svg_valide {
    margin-top: 150px;
    margin-bottom: 20px;
}

.content_valide h2{
    color: white;
    font-weight: lighter;
    font-size: 38px;
}

.content_valide p{
    color: white;
    margin-top: 20px;
}

.btn_valide button {
    margin: 50px auto; 
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

}

.btn_valide button svg {
    margin-right: 10px;
}

@media screen and (min-width: 1024px) {
    
    
    .bottom_of_cart {
        position: absolute; 
        right: 300px;
        left: 300px;
    }
}

</style>