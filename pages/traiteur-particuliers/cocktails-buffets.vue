<template>
  <div>
      <the-header/>
      <main class="content_prestations">
          <div class="block_right">
              <div class="title_block_content">
                  <h2>Cocktails et buffets <img src="@/assets/img/svg/service.svg" alt=""><div class="items_price_title">
                                <p>à partir de <br> 8€/pers</p>
                            </div></h2>
                  <p>Des prestations en toute simplicité qui épateront tous vos invités par la qualité des
                                    produits utilisés et l’ambiance chaleureuse qui en ressort.</p>
              </div>
              <div class="title_img">
                  <p>En image</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                                        <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="#fff"/>
                                    </svg>
              </div>
              <div class="img_block">
                  <img src="@/assets/img/jpg/cocktails.jpg" alt="">
              </div>
              <hr>
              <!-- <div class="info">
                  <div class="service">
                      <img src="@/assets/img/svg/service.svg" alt="">
                      <p>avec et sans service</p>
                  </div>
                   <div class="service">
                      <img src="@/assets/img/svg/mobilier.svg" alt="">
                      <p>Location de matériel disponible</p>
                  </div>
              </div> -->
              <div class="title_img">
                  <p>Contenu de la prestation</p>
              </div>
              <div class="details">
                  <div class="details_group">
                      <h3>Buffets <strong>déposés</strong></h3>
                  </div>
                  <div class="group">
                      <div class="title_group" @click="apero = !apero">
                          <p>L'apéro</p>
                         <div class="price_content">
                              <p>8€/pers </p>
                              <p class="plus" :class="{ plus_open : apero}">+</p>
                          </div>
                      </div>
                      <div class="content_group" v-if="apero">
                          <p>Assortiment de charcuteries artisanales et fromages affinés du moment</p>
                      </div>
                      <div class="title_group" @click="bBasque = !bBasque">
                          <p>Buffet Basque</p>
                          <div class="price_content">
                              <p>15	€/pers </p>
                              <p class="plus" :class="{ plus_open : bBasque}">+</p>
                          </div>
                      </div>
                      <div class="content_group" v-if="bBasque">
                          <p><strong>Amuses bouches :</strong> <br>
                          tartelette de boudin au piment d’espelette et confits d’oignons <br>
                            tortilla au chorizo <br>
                            pintxo piperade et txistorra <br>
                            pintxo de filet de thon et poivrons grillees </p>
                            <p><strong>Charcuteries :</strong> <br> jambon de bayonne de la ferme elizaldia <br>
                            lomo seché au piment d’espelette <br>
                            coppa basque <br>
                            Guindillas </p>
                            <p><strong>Fromages :</strong> <br>
                            tomme de vache au lait cru de la fromagerie des aldudes <br>
                            ossau-iraty fermier de la ferme ekiola <br>
                            cremeux de brebis de la fromagerie des aldudes <br>
                            confiture de cerise</p>
                      </div>
                      <div class="title_group" @click="bFrance = !bFrance">
                          <p>Buffet Français</p>
                          <div class="price_content">
                              <p>15	€/pers </p>
                              <p class="plus" :class="{ plus_open : bFrance}">+</p>
                          </div>
                      </div>
                      <div class="content_group" v-if="bFrance">
                          <p><strong>Amuses-bouches : </strong> <br>
                        Biscuit sablé cantaloup <br>
                        Navette fromage frais de brebis ciboulette et truite de la ferme du ciron fumée <br>
                        Mini burger magret seché basque foie gras mi-cuit et confit d’oignons <br>
                        Navette bleu d’auvergne, poire pochée et noix</p>
                        <p><strong>Charcuteries : </strong><br>
                        Jambon de cochon fermier 12 mois laborie <br>
                        Saucisse seche du haut mont <br>
                        Terrine de campagne <br>
                        Cornichons</p>
                        <p><strong>Fromages : </strong><br>
                        Comte de chez vagne <br>
                        Cantal affinage entre deux <br>
                        Saint nectaire fermier <br>
                        Noix du perigord </p>
                      </div>
                  </div>
                   <div class="details_group">
                      <h3>Coktails <strong>avec service</strong></h3>
                  </div>
                  <div class="group">
                      <div class="title_group" @click="cBasque = !cBasque">
                          <p>Cocktails Basque</p>
                          <div class="price_content">
                              <p>25	€/pers </p>
                              <p class="plus" :class="{ plus_open : cBasque}">+</p>
                          </div>
                      </div>
                      <div class="content_group" v-if="cBasque">
                          <p><strong>Amuses bouches :</strong> <br>
                          tartelette de boudin au piment d’espelette et confits d’oignons <br>
                            tortilla au chorizo <br>
                            pintxo piperade et txistorra <br>
                            pintxo de filet de thon et poivrons grillees <br>
                            Cassolette d’axoa de veau <br>
                            Cassolette de txistora deglacée au vinaigre de cidre et pommes de terre <br>
                            Cabillaud en croute de chorizo </p>
                            <p><strong>Charcuteries :</strong> <br> 
                            jambon de bayonne de la ferme elizaldia <br>
                            lomo seché au piment d’espelette <br>
                            coppa basque <br>
                            Guindillas </p>
                            <p><strong>Fromages :</strong> <br>
                            tomme de vache au lait cru de la fromagerie des aldudes <br>
                            ossau-iraty fermier de la ferme ekiola <br>
                            cremeux de brebis de la fromagerie des aldudes <br>
                            confiture de cerise </p>
                            <p><strong>Desserts :</strong> <br>
                            Mini gâteau basque <br>
                            Mini flans basque (koka)  </p>
                      </div>
                      <div class="title_group" @click="cFrance = !cFrance">
                          <p>Cocktails Français</p>
                          <div class="price_content">
                              <p>25	€/pers </p>
                              <p class="plus" :class="{ plus_open : cFrance}">+</p>
                          </div>
                      </div>
                      <div class="content_group" v-if="cFrance">
                          <p><strong>Amuses-bouches : </strong> <br>
                        Biscuit sablé cantaloup <br>
                        Navette fromage frais de brebis ciboulette et truite de la ferme du ciron fumée <br>
                        Mini burger magret seché basque foie gras mi-cuit et confit d’oignons <br>
                        Navette bleu d’auvergne, poire pochée et noix <br>
                        Crémeux de vache roti et ventreche grillée <br>
                        Croque monsieur à la truffe <br>
                        Parmentier de canard gratiné</p>
                        <p><strong>Charcuteries : </strong><br>
                        Jambon de cochon fermier 12 mois laborie <br>
                        Saucisse seche du haut mont <br>
                        Terrine de campagne <br>
                        Cornichons </p>
                        <p><strong>Fromages : </strong><br>
                        Comte de chez vagne <br>
                        Cantal affinage entre deux <br>
                        Saint nectaire fermier <br>
                        Noix du perigord </p>
                        <p><strong>Desserts : </strong><br>
                        Cannelés <br>
                        Moelleux au chocolat </p>
                      </div>
                  </div>
              </div>
          </div>
          <hr>
          <transition name="overlay" appear>
            <div class="overlay" v-if="active_devis"></div>  
          </transition>
          <div class="devis_mobile">
              <div class="intro" @click="active_devis = !active_devis">
                 <p>Obtenir un devis</p> 
                 <p class="fleche_bottom" :class="{ fleche_top : active_devis}"><svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                                        <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="#fff"/>
                                    </svg></p>
              </div>  
              <div class="formulaire" v-if="active_devis">
                  <form >
                        <div class="label">
                            <p>Nom et prénom</p>
                            <input type="text">
                        </div>
                        <div class="label">
                            <p>E-mail</p>
                            <input type="mail">
                        </div>
                        <div class="label">
                            <p>Téléphone</p>
                            <input type="phone">
                        </div>
                        <div class="label">
                            <p>Société (facultatif)</p>
                            <input type="text">
                        </div>
                        <div class="label">
                            <p>Type de prestations</p>
                            <select >
                                <option disabled selected value="">Buffets et Cocktails</option>
                            </select>
                        </div>
                         <div class="label">
                            <p>Nombre de convives</p>
                            <input type="number">
                        </div>
                        <div class="label">
                            <p>Lieu</p>
                            <input type="text">
                        </div>
                        <div class="label">
                            <p>Date et heure</p>
                            <input type="text">
                        </div>
                        <div class="check">
                            <input type="checkbox" required>
                            <p>En cochant cette case vous accepter que les informations fournies soient utilisées pour vous contacter suite à votre demande de devis.</p>
                        </div>
                        <div class="btn_form">
                                <button> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                                        <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="#fff"/>
                                    </svg>Soumettre votre demande</button>
                            </div>
                    </form>
              </div>
          </div>
          <section class="others">
              <div class="prestations">
                    <div class="items_prestations">
                        <div class="title_prestation">
                        <h3>Nos autres <strong>prestations.</strong></h3>
                    </div>
                        <div class="items" >
                            <div class="items_img">
                                    <img src="@/assets/img/jpg/cocktails.jpg" alt="">
                            </div>
                            <div class="items_price">
                                <p>à partir de <br> 8€/pers</p>
                            </div>
                            <div class="title_items">
                                <h4 :class="{ title_color : plus}">cocktails et buffets</h4>
                                <span></span>
                                 <svg :class="{ rotate : plus}" @click="openContent" width="100%" height="100%" viewBox="0 0 32 34" fill="" xmlns="http://www.w3.org/2000/svg"><path :class="{ color: plus }" d="M18.982 13.6321H32V19.2453H18.982V34H13.018V19.2453H0V13.6321H13.018V0H18.982V13.6321Z" fill="#D9D9D9"></path></svg>
                            </div>
                            <div class="description_content">
                                <p>Des prestations en toute simplicité qui épateront tous vos invités par la qualité des
                                    produits utilisés et l’ambiance chaleureuse qui en ressort. </p>
                            </div>
                            <div class="content_items" v-if="plus">
                                <div class="title_content">
                                    <p><strong>Sans service</strong></p>
                                </div>
                                <div class="content_traiteur">
                                    <ul>
                                        <li>
                                            <p>Buffet Cocktail livré et prêt à servir pour tous vos cocktails et apéritifs.</p>
                                        </li>
                                        <li>
                                            <p>Budget <span class="orange">à partir de 8€</span> par personne. Nécessaire de service inclus.</p>
                                        </li>
                                        <li>
                                            <p>Livraison sur site incluse dans la limite de 20km.</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="title_content">
                                    <p><strong>Avec service</strong></p>
                                </div>
                                <div class="content_traiteur">
                                    <ul>
                                        <li>
                                            <p>Cocktail plus complet avec pièces froides et chaudes. Repas de tout types en fonction des produits de saison.</p>
                                        </li>
                                        <li>
                                            <p>Budget <span class="orange">à partir de 25€</span> par personne</p>
                                        </li>
                                        <li>
                                            <p>Prestation avec service et ramassage des déchets.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr>
                            <div class="btn_hero">
                                <nuxt-link to='traiteur-particuliers/cocktails-buffets'><button> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                                        <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="#fff"/>
                                    </svg>En savoir plus
                                </button></nuxt-link>
                                </div>
                        </div>

                            <div class="items" >
                                <div class="items_img">
                                    <img src="@/assets/img/jpg/brasero.jpg" alt="">
                                </div>
                                 <div class="items_price">
                                <p>à partir de <br> 25€/pers</p>
                            </div>
                            <div class="title_items">
                                <h4 :class="{ title_color : plus_1}">brasero ofyr</h4>
                                <span></span>
                                 <svg  :class="{ rotate : plus_1}" @click="openContent_1" width="100%" height="100%" viewBox="0 0 32 34" fill="" xmlns="http://www.w3.org/2000/svg"><path :class="{ color: plus_1 }" d="M18.982 13.6321H32V19.2453H18.982V34H13.018V19.2453H0V13.6321H13.018V0H18.982V13.6321Z" fill="#D9D9D9"></path></svg>
                            </div>
                            <div class="description_content">
                                <p>My Terroir s’associe au célèbre brasero-plancha OFYR. La cuisson de légumes, poissons, cuisinés en cocotte, brochettes, tout est possible ! </p>
                            </div>
                            <div class="content_items" v-if="plus_1">
                                <div class="title_content">
                                    <p>4h de prestation</p>
                                </div>
                                <div class="content_traiteur">
                                    <ul>
                                        <li>
                                            <p><strong>Magnifique braséro</strong> faisant office de plancha pour cuire viandes, poissons et légumes au feu de bois.</p>
                                        </li>
                                        <li>
                                            <p>Budget <span class="orange">à partir de 25€</span> par personne. Nécessaire de service inclus.</p>
                                        </li>
                                        <li>
                                            <p>Prestation avec service et ramassage des déchets</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr>
                            <div class="btn_hero">
                                <button> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                                        <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="#fff"/>
                                    </svg>En savoir plus</button>
                                </div>
                        </div>

                        <div class="items" >
                            <div class="items_img">
                                    <img src="@/assets/img/jpg/grillades.jpg" alt="">
                            </div>
                            <div class="items_price">
                                <p>sur devis</p>
                            </div>
                            <div class="title_items">
                                <h4 :class="{ title_color : plus_2}">Repas et grillades</h4>
                                <span></span>
                                 <svg   :class="{ rotate : plus_2}" @click="openContent_2" width="100%" height="100%" viewBox="0 0 32 34" fill="" xmlns="http://www.w3.org/2000/svg"><path :class="{ color: plus_2 }" d="M18.982 13.6321H32V19.2453H18.982V34H13.018V19.2453H0V13.6321H13.018V0H18.982V13.6321Z" fill="#D9D9D9"></path></svg>
                            </div>
                             <div class="description_content">
                                <p>Une prestation haut de gamme que vous n’êtes pas prêt d’oublier. Nous présentons les viandes fraîches à table
avant cuisson. </p>
                            </div>
                            <hr>
                             <div class="btn_hero">
                                <button> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                                        <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="#fff"/>
                                    </svg>En savoir plus
                                </button>
                                </div>
                        </div>

                            <div class="items" >
                                <div class="items_img">
                                    <img src="@/assets/img/jpg/mariages.jpg" alt="">
                            </div>
                            <div class="items_price">
                                <p>sur devis</p>
                            </div>
                            <div class="title_items">
                                <h4 :class="{ title_color : plus_3}">mariage</h4>
                                <span></span>
                                 <svg :class="{ rotate : plus_3}" @click="openContent_3" width="100%" height="100%" viewBox="0 0 32 34" fill="" xmlns="http://www.w3.org/2000/svg"><path :class="{ color: plus_3 }" d="M18.982 13.6321H32V19.2453H18.982V34H13.018V19.2453H0V13.6321H13.018V0H18.982V13.6321Z" fill="#D9D9D9"></path></svg>
                            </div>
                            <div class="description_content">
                                <p> Mariages chic dans des demeures d’exception, demandez-nous toutes les folies nous savons vous les réaliser. </p>
                            </div>
                            <hr>
                            <div class="btn_hero">
                                <button> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                                        <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="#fff"/>
                                    </svg>En savoir plus
                                </button>
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
import theHeader from '../../components/default/theHeader'
import theFooter from '../../components/default/theFooter'
import newsletters from '../../components/default/newsletters'

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
        theFooter
    },
    data() {
        return {
            plus: false,
            plus_1: false,
            plus_2: false,
            plus_3: false,
            active_devis: false,
            apero: true,
            bBasque: false,
            bFrance: false,
            cBasque: false,
            cFrance: false,
        }
    }, 
    methods: {
        openContent() {
            this.plus = !this.plus
        },
        openContent_1() {
            this.plus_1 = !this.plus_1
        },
         openContent_2() {
            this.plus_2 = !this.plus_2
        },
         openContent_3() {
            this.plus_3 = !this.plus_3
        },
        
    },


}
</script>

<style scoped>

/* TRANSITION */

.overlay-enter-active {
    animation: openOverlay .3s ease-in-out
}

@keyframes openOverlay {
    from {
        opacity: 0; 
    }
    to {
        opacity: 1;
    }
    
}

.overlay-leave-active {
    animation: closeOverlay .3s ease-in-out
}

@keyframes closeOverlay {
    from {
        opacity: 1; 
    }
    to {
        opacity: 0;
    }
    
}

.devis-enter-active {
    animation: openDevis .3s ease-in-out;
}

.intro-enter-active {
    animation: openDevis .3s ease-in-out;
}

@keyframes openDevis {
    from {
       transform: translateY(300px); 
    }
    to {
        transform: translateY(0); 

    }
    
}






/* DEFAULT  */


a {
    text-decoration: none; 
}


.color {
    fill: var(--orange)!important;
}

.rotate {
    transform: rotate(45deg);
    fill: var(--orange)!;
    transition: .3s all; 
    z-index: 20;
}

.title_color {
    color: var(--orange)!important;
}

.plus {
    font-size: 24px;
    color: var(--orange);
    margin-top: 2px;
    margin-left: 5px;
    transition: all .4s ease-in-out;
}



.plus_open {
    font-size: 24px;
    color: white;
    transform: rotate(45deg)!important;
    margin-top: 2px;
    margin-left: 5px;
}



/* CONTENT */




.content_prestations {
    background-color: var(--gray);
    padding: 90px 10px 15px 10px;
}

.img_block {
    margin-top: 10px;
    margin-bottom: 20px;
}

.img_block img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.title_img {
    display: flex; 
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}

.title_img p {
    font-weight: bold; 
    font-size: 14px;
}

.title_img svg {
    width: 20px;
}

.title_img  path {
    fill: var(--black);
}

.info {
    background-color: var(--black);
    padding: 15px;
    display: flex; 
    justify-content: space-between;
}

.service {
    display: flex; 
    align-items: center;
    margin-bottom: 10px;
}

.service p {
    color: white;
    font-weight: bold;
}

.service img {
    width: 30px;
    margin-right: 10px;
}

.details {
    background-color: var(--black);
    margin-top: -1px;
    padding: 15px 10px;
    margin-top: 10px;
    margin-bottom: 20px;
}

.details_group {
    display: flex; 
    margin-top: 10px; 
    font-size: 18px;
    color: white; 
    justify-content: space-between;
    align-items: center; 
}

.details_group h3 {
    color: white; 
    font-size: 24px;
    font-weight: lighter;
}

.title_group {
    display: flex; 
    margin-top: 1px;
    font-weight: 20px;
    justify-content: space-between; 
    align-items: center;
    color: var(--orange);
    font-weight: bold; 
}

.content_group {
    margin-top: 5px;
    color: white;
}

.content_group p {
    line-height: 22px;
    margin-bottom: 10px;
}

.devis_mobile {
    position: absolute;
    bottom: 0; 
    left: 0;
    right: 0;
    position: fixed;
    z-index: 20;
    overflow: scroll;
}

.intro {
    background-color: var(--orange);
    padding: 15px 20px;
    display: flex; 
    flex-flow: row; 
    justify-content: space-between; 
    align-items: center;
}

.fleche_bottom {
    transform: rotate(-90deg);
    transition: .6s all; 
}

.fleche_top{
    transform: rotate(90deg);
}

.intro p {
    color: white;
    font-weight: bold;
    font-size: 18px;
    background-color: var(--orange);
}

.title_block_content h2 {
    font-family: bebas-neue-pro, sans-serif; 
    font-size: 32px;
    font-weight: bold; 
    margin-top: 20px;
    margin-bottom: 10px;
    color: var(--orange);
    text-transform: uppercase; 
    text-align: left;
}


.title_block_content p {
    color: var(--black);
    line-height: 22px;
    text-align: left;
}

.price_content {
    display: flex;
    justify-content: flex-start; 
    align-items: center;
}


/* FORMMMMMMM */
.overlay {
    position: absolute;
    bottom: 0; 
    top: 0;
    background-color: rgba(0, 0, 0, 0.603);
    left: 0;
    right: 0;
    position: fixed;
    z-index: 10;
}

form {
    overflow: scroll;
    padding: 15px 20px;
    height: 52vh;
    background-color: var(--gray);
    z-index: 20;
}

.label {
    margin-bottom: 10px;
}

.label p {
    padding: 10px 0 5px 5px;
    font-size: 14px; 
    font-weight: bold;
    color: var(--black);
}

.label input {
    width: 100%; 
    border: none; 
    background-color: white; 
    padding: 10px 16px; 
    font-size: 16px; 
    outline: none; 
    border-radius: 0px;
    -webkit-appearance: none;
}

.title_form_two h4 {
    font-family: bebas-neue-pro, sans-serif; 
    color: var(--orange);
    font-weight: lighter;
    font-size: 28px; 
    margin-top: 50px;
    text-transform: uppercase; 
    line-height: 28px; 
    margin-bottom: 10px;
}

select {
     width: 100%; 
    border: none; 
    border-radius: 0px;
    background-color: var(--black); 
    margin-top: -1px;
    -webkit-appearance: none;
    font-family: bebas-neue-pro, sans-serif; 
    outline: none; 
    font-size: 16px;
    padding: 10px 16px; 
    color: white;
    font-weight: bold;
}

.check {
    display: flex; 
    margin-top: 20px;
}

.check input {
    margin-right: 10px;
}

.check p {
    margin-top: -2px;
    font-size: 12px; 
    font-weight: bold; 
}

input[type="checkbox" i] {
    background-color: var(--black)!important;
    width: 30px; 
    height: 20px;
    border-radius: 0px;
    -webkit-appearance: none;
    outline: none; 
    transition: all .3s; 

}

input[type="checkbox" i]:checked {
    background-color: var(--orange)!important;
    width: 30px; 
    height: 20px;
    -webkit-appearance: none;
    display: flex; 
    transition: all .3s; 

}

input[type="checkbox" i]:checked::after {
    content: 'x';
    font-size: 16px;
    color: white; 
    font-weight: bold;
    display: flex; 
    margin: auto;
}

.btn_form button {
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

}

.btn_form button:hover {
    transform: translate(3px, 3Px);
}

.btn_form button svg {
    margin-right: 10px;
}




/* AUTRE PRESTATIONS */


.title_prestation h3 {
    font-family: bebas-neue-pro, sans-serif; 
    font-size: 28px;
    font-weight: lighter; 
    margin-top: 20px;
    color: var(--black);
    text-transform: uppercase; 
    text-align: left;
}

.items {
    padding: 20Px 15px 20px 15px;
    background-color: #fff;
    border-radius: 5Px;
    margin-top: 20px;
    margin-bottom: 30px;
    position: relative;
}

.items_price_title {
    position: absolute; 
    right: 20px;
    top: 80px;
    width: 70px;
    height: 70px;
    background-color: var(--black);
    border-radius: 50%;
    display: flex; 
    z-index: 0;
}

.items_price {
    position: absolute; 
    right: 50px;
    top: 220px;
    width: 70px;
    height: 70px;
    background-color: var(--orange);
    border-radius: 50%;
    display: flex; 
}

.items_price_title p{
    font-size: 14px; 
    font-weight: bold; 
    color: white;
    display: flex; 
    margin: auto; 
    text-transform: lowercase;
    text-align: center; 
    line-height: 16px;
    transform: rotate(20deg);

}

.items_price p{
    font-size: 14px; 
    font-weight: bold; 
    color: white;
    display: flex; 
    margin: auto; 
    text-align: center; 
    line-height: 16px;
}

.items_img img{
    width: 100%; 
    height: 250px;
    object-fit: cover;
}

.description_content {
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 16px; 
    color: var(--black);
    line-height: 24px;
}

.title_items {
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    margin-top: 20px;
}

.title_items h4 {
    color: var(--black); 
    text-transform: uppercase; 
    font-size: 22px;
    transition: .3s all; 
}

.title_items svg{
    width: 13px;
    transition: .3s all; 

}

.title_items path{
   fill: var(--black);
}

.content_items {
    color: var(--black); 
    margin-top: 10px;
    line-height: 24px;
}

.content_traiteur {
    margin-top: 5px;
    margin-bottom: 20px;
}

.content_traiteur ul li {
    color: var(--orange);
}

.content_traiteur ul li p{
    color: var(--black); 
    font-family: bebas-neue-pro-expanded, sans-serif; 
    font-weight: lighter;
    font-size: 16px;
}

hr {
    border: none;
    height: 1px;
    width: 100%;
    background-color: var(--black);
    opacity: .1;
}

.btn_hero {
display: flex; 
    justify-content: flex-start;

}

.btn_hero button {
    margin-top: 15px; 
    padding: 8px 0px; 
    font-family: bebas-neue-pro, sans-serif; 
    border: none; 
    display: flex; 
    justify-content: space-around;
    background-color: white;
    text-decoration: none;
    color: var(--orange);
    font-size: 16px;
    font-weight: bold; 
    text-transform: uppercase;
    cursor: pointer; 
    outline: none; 
}

.btn_hero button:hover {
    transform: translate(3px, 3Px);
}

.btn_hero button svg {
    margin-right: 10px;
    width: 20px;
}

.btn_hero button path{
    margin-right: 10px;
    fill: var(--orange);
}

</style>