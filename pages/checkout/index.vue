<template>
    <div>
        <the-header/>
        <main>
            <section class="recapitulatif">
                <div class="title_recapitulatif">
                    <h2>Informations<strong> personnelles</strong></h2>
                </div>
                <form @submit="submit">
                    <div class="label">
                            <p>Nom et prénom</p>
                            <input type="text">
                    </div>
                    <div class="label">
                            <p>E-mail</p>
                            <input type="email">
                    </div>
                    <div class="label">
                            <p>Téléphone portable</p>
                            <input type="text">
                    </div>
                    <div class="label">
                            <p>Code promo</p>
                            <input type="text">
                    </div>
                    <div class="label">
                            <p>Conditions de livraison</p>
                            <div class="livraison">
                                <p @click="retrait = true, livraison = false" :class="{ color_orange : retrait}">Retrait</p>
                                <p @click="retrait = false, livraison = true" :class="{ color_orange : livraison}">Livraison</p>
                            </div>
                    </div>
                    <div class="retrait" v-if="retrait">
                        <div class="title_retrait">
                            <h5>Conditions<strong> de retrait<span class="orange">.</span></strong></h5>
                            <p>Commande à retirer au 4 rue terroir, 33140 Cadaujac à la 
                                réception du SMS. </p>
                        </div>
                        
                    </div>
                    <div class="livraison_card" v-if="livraison">
                        <div class="label">
                            <p>Adresse</p>
                            <input type="text">
                        </div>
                         <div class="label">
                            <p>Adresse complémentaire</p>
                            <input type="text">
                        </div>
                        <div class="label">
                            <p>Code Postal</p>
                            <input type="text">
                        </div>
                        <div class="label">
                            <p>Ville</p>
                            <input type="text">
                        </div>
                        <div class="label">
                            <p>Préférence livraison</p>
                            <input type="text" placeholder="tranche horraire">
                        </div>
                        <div class="port_livraison">
                            <div class="title_retrait">
                            <h5>Frais<strong> de livraison<span class="orange">.</span></strong></h5>
                            <p>Livraison dans toute la métropole bordelaise. Au délà veuillez nous contactez.</p>
                            <ul>
                                    <li>Commande inférieur à 50€ = 10€ de frais</li>
                                    <li>Commande entre 50€ et 100€ = 5€ de frais</li>
                                    <li>Commande supérieur à 100€ = <span class="gratuit">Gratuit</span></li>
                            </ul>
                            <p>À noter que les frais de port seront rajoutés sur la confirmation de commande.</p>
                        </div>
                        </div>
                    </div>
                    <div class="check">
                            <input type="checkbox" required checked>
                            <p>En cochant cette case vous accepter que les informations fournies soient utilisées pour vous contacter suite à votre commande.</p>
                        </div>
            
                <cart-checkout/>
            </form>
            </section>
        </main>
    </div>
</template>

<script>
import theHeader from '../../components/default/theHeader'
import cartCheckout from '../../components/features/cartCheckout'
export default {
    components: {
        theHeader,
        cartCheckout,
    },
    data() {
        return {
            retrait: true,
            livraison: false,
        }
    },
    mounted() {
        this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 1200)
        })
    },
    methods: {
        submit(e) {
            e.preventDefault();
        }
    }
}
</script>

<style scoped>

.title_recapitulatif {
    margin-top: 100px;
    display: flex; 
    padding: 0 15px;
    align-items: center; 
    justify-content: space-between;
}

.title_recapitulatif h2 {
    font-weight: lighter; 
    font-size: 38px;
}

.orange {
    color: var(--orange);
}


.label {
    margin-bottom: 10px;
    padding: 0 15Px;
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

.label input::placeholder {
    font-size: 14px;
    color: var(--hint);
    font-family: bebas-neue-pro-expanded, sans-serif;
    font-weight: bold;
}

.livraison {
    display: flex; 
    font-family: bebas-neue-pro, sans-serif; 
    text-transform: uppercase;
}

.livraison p:nth-child(1) {
    background-color: var(--gray);
    padding: 12px 0;
    color: var(--orange); 
    font-size: 18px;
    width: 130px;
    text-align: center;
}

.color_orange {
    background-color: var(--orange)!important;
    color: white!important; 
}

.livraison p:nth-child(2) {
    background-color:white;
    padding: 12px 0Px;
    color: var(--orange); 
    width: 130px;
    text-align: center;
    font-size: 18px;
    margin-left: 20px;
}

.retrait {
    margin: 20px 15px; 
    padding: 10px 15px; 
    background-color: var(--black);
}

.retrait h5 {
    color: white;
    font-size: 20px;
    font-weight: lighter;
}

.retrait p {
    color: white;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: bold;

}

.port_livraison {
    margin: 20px 15px; 
    padding: 10px 15px; 
    background-color: var(--black);
}

.port_livraison h5 {
    color: white;
    font-size: 20px;
    font-weight: lighter;
}

.port_livraison p {
    color: white;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: bold;
}

.port_livraison ul li {
    color: var(--orange);
    font-weight: bold;
    margin-bottom: 5px;
}

.gratuit {
    color: white;
}

.check {
    display: flex; 
    margin-top: 20px;
    padding: 0 15px; 
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

@media screen and (min-width: 1024px) {
    main {
        margin: 0 300Px;
    }
    
    .bottom_of_cart {
        position: absolute; 
        right: 300px;
        left: 300px;
    }
}
</style>