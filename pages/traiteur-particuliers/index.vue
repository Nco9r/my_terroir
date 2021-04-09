<template>
  <div>
      <the-header/>
      <main>
          <section class="traiteur">
              <heroTraiteur/>
              <div class="block_left">
                <div class="title_traiteur">
                    <div class="title_before">
                        <p>restauration</p>
                    </div>
                    <div class="title">
                        <h1>Notre <strong>service traiteur</strong> pour vos évènements<span class="orange">.</span></h1>
                    </div>
                    <hr class="hr_title">
                </div>
                <div class="content_traiteur">
                    <p>Notre équipe vient chez vous ou dans la salle de <strong>votre choix</strong>, avec tout le matériel nécessaire pour <strong>cuire et servir</strong>.</p>
                    <p>Vous n’avez rien à penser et vous pouvez profiter entièrement de vos invités. Selon la prestation choisie, vos convives se serviront au buffet ou aux différents stands animés autour des produits de terroirs. </p>
                    <p>Dans les cocktails avec service, nos gentils serveurs viendront directement proposer à vos convives tous les bons produits que vous avez sélectionné. Bien entendu, l’histoire du produit et du producteur sera racontée.</p>
                    <p>Etant de gros mangeurs, nous avons tendance à vous proposer des quantités largement suffisante mais n’hésitez pas à nous faire savoir si vous connaissez bien vos convives, quels type de mangeurs ils sont.</p>
                </div>
            </div>
            <div class="block_right">
                <div class="prestations">
                    <div class="title_prestation">
                        <h3>Nos différents <strong>prestations.</strong></h3>
                    </div>
                    <div class="items_prestations">
                        <div class="items" >
                            <div class="title_items">
                                <h4 :class="{ title_color : plus}">cocktails et buffets</h4>
                                <span></span>
                                 <svg :class="{ rotate : plus}" @click="openContent" width="100%" height="100%" viewBox="0 0 32 34" fill="" xmlns="http://www.w3.org/2000/svg"><path :class="{ color: plus }" d="M18.982 13.6321H32V19.2453H18.982V34H13.018V19.2453H0V13.6321H13.018V0H18.982V13.6321Z" fill="#D9D9D9"></path></svg>
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
                               <div class="btn_hero">
                                <button> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                                        <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="#fff"/>
                                    </svg>En savoir plus</button>
                                </div>
                            </div>
                        </div>

                            <div class="items" >
                            <div class="title_items">
                                <h4 :class="{ title_color : plus_1}">brasero ofyr</h4>
                                <span></span>
                                 <svg  :class="{ rotate : plus_1}" @click="openContent_1" width="100%" height="100%" viewBox="0 0 32 34" fill="" xmlns="http://www.w3.org/2000/svg"><path :class="{ color: plus_1 }" d="M18.982 13.6321H32V19.2453H18.982V34H13.018V19.2453H0V13.6321H13.018V0H18.982V13.6321Z" fill="#D9D9D9"></path></svg>
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
                               <div class="btn_hero">
                                <button> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                                        <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="#fff"/>
                                    </svg>En savoir plus</button>
                                </div>
                            </div>
                        </div>

                        <div class="items" >
                            <div class="title_items">
                                <h4 :class="{ title_color : plus_2}">Repas et grillades</h4>
                                <span></span>
                                 <svg   :class="{ rotate : plus_2}" @click="openContent_2" width="100%" height="100%" viewBox="0 0 32 34" fill="" xmlns="http://www.w3.org/2000/svg"><path :class="{ color: plus_2 }" d="M18.982 13.6321H32V19.2453H18.982V34H13.018V19.2453H0V13.6321H13.018V0H18.982V13.6321Z" fill="#D9D9D9"></path></svg>
                            </div>
                        </div>

                            <div class="items" >
                            <div class="title_items">
                                <h4 :class="{ title_color : plus_3}">mariage</h4>
                                <span></span>
                                 <svg :class="{ rotate : plus_3}" @click="openContent_3" width="100%" height="100%" viewBox="0 0 32 34" fill="" xmlns="http://www.w3.org/2000/svg"><path :class="{ color: plus_3 }" d="M18.982 13.6321H32V19.2453H18.982V34H13.018V19.2453H0V13.6321H13.018V0H18.982V13.6321Z" fill="#D9D9D9"></path></svg>
                            </div>
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
import heroTraiteur from '~/components/contentIndex/heroTraiteur'


export default {
    mounted() {
        this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 200)
        })
    },
    components: {
        theHeader,
        newsletters,
        theFooter,
        heroTraiteur
    },
    data() {
        return {
            plus: true,
            plus_1: false,
            plus_2: false,
            plus_3: false,
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
    transition: 'slide-bottom'
}
</script>

<style>

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


.orange {
    color: var(--orange);
    font-weight: bold;
}

.bck {
    background-image: url('~assets/img/jpg/traiteur.jpg'); 
    background-size: cover; 
    height: 500px;
    background-repeat: no-repeat; 
}

.title_traiteur {
    padding: 20px 15px 5px 15px;
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

.title h1{
  font-family: bebas-neue-pro, sans-serif; 
  color: var(--black);
  font-weight: lighter;
  font-size: 38px; 
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

.content_traiteur {
    padding: 0 15px; 
}

.content_traiteur p{
    margin-top: 20px;
    font-size: 16px; 
    color: var(--black);
    line-height: 26px;
}

.title_prestation h3 {
    font-family: bebas-neue-pro, sans-serif; 
    font-size: 28px;
    font-weight: lighter; 
    margin-top: 20px;
    padding: 0 15Px;
    color: var(--orange);
    text-transform: uppercase; 
}

.items_prestations {
    background-color: var(--gray);
    margin-top: 20px;
    padding: 0 15px 30px 15px;
}

.items {
    padding: 10px 15px 0 15Px;
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
    margin-top: 20px;
    margin-bottom: 20px;
}

.content_traiteur ul li {
    margin-top: 10px;
    color: var(--orange);
}

.content_traiteur ul li p{
    color: var(--black); 
    font-family: bebas-neue-pro-expanded, sans-serif; 
    font-weight: lighter;
    font-size: 16px;


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

}

.btn_hero button:hover {
    transform: translate(3px, 3Px);
}

.btn_hero button svg {
    margin-right: 10px;
}





</style>