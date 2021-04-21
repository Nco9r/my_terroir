<template>
  <section class="newsletters">
      <div class="block_left">
           <div class="img">
          <img src="@/assets/img/svg/heart.svg" alt="">
        </div>
        <div class="title_newsletters">
          <h3>inscrivez vous à la <strong>newsletter</strong></h3>
          <p>Et recevez nos bons plans ! </p>
        </div>
      </div>
      <div class="block_right">
          <div class="input">
              <form  @submit="subscribe">
              <input type="email" placeholder="Adressse mail..." v-model="form.email">
              <button>OK</button>
              <transition name="popup" appear>
              <div class="valide"  v-if="validate">
                  <div class="overlay"></div>
                  <div class="popup">
                      <div class="title_popup">
                          <h3><strong>Merci</strong> pour votre inscription !</h3>
                          <p>Retrouvez toutes nos actus, bon plan et béneficiez d'une réduction de <strong>10%</strong> sur votre prochaine commande passée sur notre boutique en ligne avec le code <strong>NEWS2021.</strong></p>
                          <p>* Remise effectué lors de la réception du mail de confirmation.</p>
                          <div class="btn_news" @click="validate = !validate">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                            <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="none"/>
                            </svg>Retour
                            </div>
                      </div>
                      
                  </div>
              </div>
              <div class="valide"  v-if="error">
                  <div class="overlay"></div>
                  <div class="popup">
                      <div class="title_popup">
                          <h3><strong>Une erreur</strong> s'est produite !</h3>
                          <p>Une erreur s'est produite lors de votre inscription. Merci de ressayer ultérieurment ou de conctatez le support à l'adresse suivante : <strong>support@my-terroir.fr</strong></p>
                          <div class="btn_news" @click="error = !error">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                            <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="none"/>
                            </svg>Retour
                            </div>
                      </div>
                      
                  </div>
              </div>
              </transition>
              </form>
          </div>
      </div>
      <div class="img_scooter">
          <img class="scooter" src="@/assets/img/svg/scooter.svg" alt="">
      </div>
  </section>
</template>

<script>
import axios from 'axios'
import { gsap } from 'gsap'
import  { ScrollTrigger }  from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default {
    mounted() {
        gsap.to(".scooter", {
            scrollTrigger: {
                trigger: ".scooter",
                start: "70% 70%",
                end: "top",
                scrub: true,
                toggleActions: "restart pause reverse pause"
            },
            x: 250,
        })
    }, 
    data() {
        return {
            form: {
                email: ''
            },
            validate: false,
            error: false
        }
    },
    methods: {
            async subscribe(e){
            e.preventDefault();
            const formData = {...this.form}
            try{
                const {data, status} = await axios.post('/api/newsletter/subscribe', formData)
                this.validate = true,
                this.form = ''
            }catch(e){
                this.error = true,
                this.form = ''
            }
        }
    },
}
</script>

<style scoped>

.newsletters {
    background-color: var(--orange);
    width: 100%; 
    text-align: center; 
    background-image: url('~assets/img/jpg/texture.png'); 
    background-repeat: no-repeat; 
    background-size: 200%;
    background-position: -170px -70px; 
    display: flex;
    flex-flow: column;
}

.img img {
    width: 30px;
    margin-top: 30px;
}

.scooter {
    width: 100px;
}

.title_newsletters h3{
    margin-top: 10px;
    font-family: bebas-neue-pro, sans-serif; 
    text-transform: uppercase;
    color: white;
    font-weight: lighter;
    font-size: 46Px;
    padding: 0 20px;
}

.title_newsletters p{
    margin-top: 10px;
    font-family: bebas-neue-pro-expanded, sans-serif; 
    color: white;
    font-size: 16Px;
    line-height: 24px;
}

.input {
    margin-top: 30px;
}

.input input {
    border: none;
    background-color: white;
    font-family: bebas-neue-pro, sans-serif; 
    font-weight: bold;
    color: var(--hint);
    font-size: 22px;
    padding: 12px 20px;
    width: 70%;
    outline: none; 
    -webkit-appearance: none; 
    border-radius: 0px;

}

.input input::placeholder {

    color: var(--hint);

}

.input button {
    border: none;
    background-color: var(--black);
    font-family: bebas-neue-pro, sans-serif; 
    font-weight: bold;
    font-size: 22px;
    color: white;
    padding: 12px 20px;
    outline: none; 
    box-shadow: 3px 3Px rgba(0, 0, 0, 0.39);
}

.img_scooter {
    text-align: left; 
    margin-top: 50px;
}

.img_scooter img{
    width: 110px;
}

.valdie {
    display: flex; 
    margin: auto; 
}

.overlay {
    position: fixed; 
    top: 0; 
    width: 100%;
    bottom: 0; 
    right: 0;
    bottom: 0; 
    position: fixed; 
    z-index: 1001;
    background-color: rgba(0, 0, 0, 0.692);
}

.popup {
    position: fixed; 
    top: 20%; 
    width: 100%;
    padding: 20px; 
    display: flex; 
    margin: auto;
    z-index: 1002;
    background-color: white; 
}

.title_popup h3 {
    font-weight: lighter;
    font-size: 32px;
    text-align: left;
}

.title_popup p {
    margin-top: 10px;
    text-align: left; 
    margin-right: 20px;
    line-height: 24px;
}

.title_popup p:nth-child(3) {
    margin-top: 10px;
    font-size: 12px;
    text-align: left; 
    margin-right: 40px;
    line-height: 20px;
    font-weight: bold;
}

.btn_news {
    margin-top: 20px;
    display: flex; 
    align-items: center; 
    color: var(--orange);
    font-weight: bold; 
    text-decoration: none; 
}

.btn_news  svg {
    fill: var(-orange)!important;
    margin-right: 10px;
}

.btn_news  svg path {
    fill: var(--orange);
}

.popup-enter-active {
    animation: opacityOpen .7s; 
}

.popup_leave-active {
    animation: opacityClose .7s; 
}

@keyframes opacityOpen {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes opacityClose {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

@media screen and (min-width: 1024px) {
    .newsletters {
        display: flex; 
        background-image: url('~assets/img/jpg/texture.png'); 
        flex-flow: column;
        justify-content: space-between; 
        align-items: center;
        background-size: 80%;
        background-position: 100px -300Px;

        padding: 0 200px;
    }

    .title_newsletters h3{ 
        font-size: 62px;
    }

    .input {
        display: flex;
        flex-flow: row nowrap;
    }

    .input input {
        width: 100%;
    }
    .img_scooter {
        display: none;
    }

    .title_newsletters p {
        font-size: 18px; 
    }
    
}






</style>