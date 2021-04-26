<template>
  <div>
      <the-header/>
      <main>
        <section class="boutique_hero">
            <div class="title_boutique">
                <h2>Notre <strong> boutique</strong></h2>
            </div>
            <div class="filter">
                <p><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 16 13">
        <path d="M4 2.5V0H3v2.5H0v1h3V6h1V3.5h12v-1H4zM13 7h-1v2.5H0v1h12V13h1v-2.5h3v-1h-3V7z"></path>
      </svg> filtres (0)</p>
            </div>
        </section>
        <!-- <section class="query">
            <div class="title_query">
                <h3>Tous nos <strong>produits.</strong>
                </h3>
            </div>
            <div class="search">
                <input type="text" placeholder="Recherche...">
                <button>OK</button>
            </div>
            <categorie/>
            <hr class="hr">
        </section> -->
        <section class="month">
            <div class="title_products">
                <h3>Produits <strong>du mois</strong></h3>
                <div class="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                    <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="#202020"/>
                </svg>
                </div>
            </div>
            <div class="cards_products">
                <div class="products_items">
                    <div class="items_products" v-for="product in productsMonth" :key="product">
                        <div class="introduction">
                            <div class="localisation">
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7.369" height="10.551" viewBox="0 0 7.369 10.551">
                                    <path id="placeholder" d="M-2.565,0A3.68,3.68,0,0,0-6.25,3.667c0,2.542,3.688,6.883,3.688,6.883S1.119,6.084,1.119,3.667A3.68,3.68,0,0,0-2.565,0Zm1.112,4.741A1.571,1.571,0,0,1-2.565,5.2a1.571,1.571,0,0,1-1.112-.458,1.561,1.561,0,0,1,0-2.213A1.565,1.565,0,0,1-2.565,2.07a1.566,1.566,0,0,1,1.112.458A1.561,1.561,0,0,1-1.454,4.741Zm0,0" transform="translate(6.25)" fill="#e75720"/>
                                    </svg>{{product.localisation}}</p>
                            </div>
                            <div class="poids">
                                <p>{{product.poids}}gr</p>
                            </div>
                        </div>
                        <div class="title_cards_products">
                            <h3>{{product.products_title}}</h3>
                            <hr class="hr_products">
                        </div>
                        <div class="price_cart">
                            <div class="cart_number">
                                <p>-</p>
                                <p>1</p>
                                <p>+</p>
                            </div>
                            <div class="price">
                                <p>{{product.price}}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="cta_cart">
                            <p>Ajouter</p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </section>

        <section class="Best">
            <div class="title_products">
                <h3>Produits <strong>Recommandés</strong></h3>
                <div class="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                    <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="#202020"/>
                </svg>
                </div>
            </div>
            <div class="cards_products">
                <div class="products_items">
                    <div class="items_products" v-for="product in productsMonth" :key="product">
                        <div class="introduction">
                            <div class="localisation">
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7.369" height="10.551" viewBox="0 0 7.369 10.551">
                                    <path id="placeholder" d="M-2.565,0A3.68,3.68,0,0,0-6.25,3.667c0,2.542,3.688,6.883,3.688,6.883S1.119,6.084,1.119,3.667A3.68,3.68,0,0,0-2.565,0Zm1.112,4.741A1.571,1.571,0,0,1-2.565,5.2a1.571,1.571,0,0,1-1.112-.458,1.561,1.561,0,0,1,0-2.213A1.565,1.565,0,0,1-2.565,2.07a1.566,1.566,0,0,1,1.112.458A1.561,1.561,0,0,1-1.454,4.741Zm0,0" transform="translate(6.25)" fill="#e75720"/>
                                    </svg>{{product.localisation}}</p>
                            </div>
                            <div class="poids">
                                <p>{{product.poids}}gr</p>
                            </div>
                        </div>
                        <div class="title_cards_products">
                            <h3>{{product.products_title}}</h3>
                            <hr class="hr_products">
                        </div>
                        <div class="price_cart">
                            <div class="cart_number">
                                <p>-</p>
                                <p>1</p>
                                <p>+</p>
                            </div>
                            <div class="price">
                                <p>{{product.price}}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="cta_cart">
                            <p>Ajouter</p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </section>

        <section class="month">
            <div class="title_products">
                <h3>Nouveaux<strong>Produits</strong></h3>
                <div class="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                    <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="#202020"/>
                </svg>
                </div>
            </div>
            <div class="cards_products">
                <div class="products_items">
                    <div class="items_products" v-for="product in productsMonth" :key="product.id">
                        <div class="introduction">
                            <div class="localisation">
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7.369" height="10.551" viewBox="0 0 7.369 10.551">
                                    <path id="placeholder" d="M-2.565,0A3.68,3.68,0,0,0-6.25,3.667c0,2.542,3.688,6.883,3.688,6.883S1.119,6.084,1.119,3.667A3.68,3.68,0,0,0-2.565,0Zm1.112,4.741A1.571,1.571,0,0,1-2.565,5.2a1.571,1.571,0,0,1-1.112-.458,1.561,1.561,0,0,1,0-2.213A1.565,1.565,0,0,1-2.565,2.07a1.566,1.566,0,0,1,1.112.458A1.561,1.561,0,0,1-1.454,4.741Zm0,0" transform="translate(6.25)" fill="#e75720"/>
                                    </svg>{{product.localisation}}</p>
                            </div>
                            <div class="poids">
                                <p>{{product.poids}}gr</p>
                            </div>
                        </div>
                        <div class="title_cards_products">
                            <h3>{{product.products_title}}</h3>
                            <hr class="hr_products">
                        </div>
                        <div class="price_cart">
                            <div class="cart_number">
                                <p>-</p>
                                <p>1</p>
                                <p>+</p>
                            </div>
                            <div class="price">
                                <p>{{product.price}}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="cta_cart">
                            <p @click="addOne(product)">Ajouter</p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </section>
      </main>
      <newsletters/>
      <the-footer/>
  </div>
</template>

<script>
import theHeader from '~/components/default/theHeader'
import newsletters from '~/components/default/newsletters'
import theFooter from '~/components/default/theFooter'
// import categorie from '~/components/default/categorie'
// import heroBoutique from '~/components/contentIndex/heroBoutique'
import { mapMutations } from 'vuex';
import { mapState } from 'vuex';



export default {
    mounted() {
        this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 1200)
        })
    },
    components: {
        theHeader,
        newsletters,
        // heroBoutique,
        theFooter,
        // categorie
    },
    computed: {
    productsMonth() {
      return this.$store.state.products_month.datas
    }
  },
  methods: {
    ...mapMutations('cart', ['addOne']),
  }
}
</script>

<style scoped>

.query {
    margin-top: 20px;
    padding: 0 15px;
}

.title_query h3 {
    font-size: 32px;
    text-transform: uppercase;
    font-weight: lighter;
    margin-bottom: 10px; 
}

.search {
    margin-bottom: 20px;
}

.search input {
    width: 60%; 
    border: none; 
    background-color: var(--gray); 
    padding: 10px 16px; 
    font-size: 16px; 
    outline: none; 
    border-radius: 0px;
    -webkit-appearance: none;
}

.search input::placeholder {
    color: var(--hint);

}

.search button {
    border: none;
    background-color: var(--orange);
    font-family: bebas-neue-pro, sans-serif; 
    font-weight: bold;
    font-size: 16px;
    color: white;
    padding: 10px 16px;
    outline: none; 
    box-shadow: 2px 2px rgba(218, 71, 9, 0.486);
}

.hr {
    margin-right: 10px; 
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%; 
    height: 1px;
    border: none; 
    background-color: var(--gray);
}

.title_boutique h2{
    padding: 100px 0 30px 0;
    display: flex; 
    font-weight: lighter;
    font-size: 52px;
    justify-content: center;
}

.filter p svg {
    width: 15px;
}

.title_products {
    display: flex; 
    justify-content: space-between;
    padding: 0 15px;
    align-items: center; 
    margin-top: 20px;
}

.title_products h3 {
    font-size: 32px;
    text-transform: uppercase;
    font-weight: lighter;
    margin-bottom: 10px; 
    color: var(--black);
}

.cards_products {
    display: flex; 
    flex-flow: row nowrap;
    overflow-x: scroll;
}

.products_items {
    display: flex; 
}

.items_products {
    width: 250px; 
    background-color: var(--orange-light);
    /* box-shadow: 0 0 10px rgb(0 0 0 / 20%); */
    border-right: 1px solid var(--black);
    border-left: 1px solid var(--black);
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 20px;
    border-radius: 0px;
    padding: 15px;
    margin-bottom: 40px;
}

.introduction {
    display: flex; 
    justify-content: space-between;
    align-items: center;
}

.localisation p svg{
    margin-right: 5px;
}

.localisation p {
    color: var(--orange);
    font-weight: bold;
}

.poids p {
    background-color: var(--orange-light);
    padding: 5px 10px;
    color: var(--orange);
    font-weight: bold;
}

.title_cards_products {
    margin-top: 10px;
    height: 120px;

}

.title_cards_products h3{
    width: 220px;
    font-size: 28px;
    color: var(--black);
    text-transform: none; 
}

.hr_products {
    border: none; 
    width: 40px;
    height: 1px;
    background-color: var(--hint);
    margin-top: 5px;
}

.price_cart {
    display: flex; 
    justify-content: space-between; 
    align-items: flex-end;
    align-items: center;
}

.cart_number {
     display: flex; 
    justify-content: space-between; 
    width: 75px;
margin-top: 20px;
    font-weight: bold;
}

.cart_number p {
    font-size: 24px;
    color: var(--black)
}

.price p {
    font-size: 62px;
    font-weight: bold; 
    color: var(--black);
    position: relative;
    margin-right: 25px;
    font-family: bebas-neue-pro, sans-serif;
}

.price p::after {
    content: 'TTC'; 
    font-size: 16px; 
    position: absolute; 
    top: 0;
}
hr {

    border: none;
    width: 100%;
    height: 1px;
    background-color: var(--black);
    margin-top: 5px;
    margin-bottom: 5px;
}

.cta_cart {
    width: 100%;
    color: white; 
    background-color: var(--orange);
    padding: 8px 3px;
    margin-top: 15px;
    text-align: center;
    font-weight: bold; 
    font-size: 20px;
    text-transform: uppercase;
    font-family: bebas-neue-pro, sans-serif;
    cursor: pointer;
}










</style>