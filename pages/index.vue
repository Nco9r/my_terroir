<template>
<div>
<the-header/>
  <main>
    <div class="btn_menu_header">
              <nuxt-link to='contact-devis'><button> <svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="#fff"/>
                </svg>Contact et devis</button></nuxt-link>
    </div>
    <div class="container">
      <hero/>
      <logo/>
      <storie/>
      <concept/>
      <traiteur/>
      <boutique/>
      <clients/>
      <blog-index/>
      <newsletters/>
      <theFooter/>
    </div>
  </main>

</div>
</template>

<script>
import theHeader from '~/components/default/theHeader'
import hero from '~/components/contentIndex/hero'
import logo from '~/components/contentIndex/logo'
import storie from '~/components/contentIndex/storie'
import concept from '~/components/contentIndex/concept'
import traiteur from'~/components/contentIndex/traiteur'
import boutique from'~/components/contentIndex/boutique'
import clients from'~/components/contentIndex/clients'
import blogIndex from'~/components/contentIndex/blogIndex'
import newsletters from '~/components/default/newsletters'
import theFooter from '~/components/default/theFooter';


import { gsap } from 'gsap'
import  { ScrollTrigger }  from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)




export default {
  components: {
    theHeader,
    hero,
    logo,
    storie,
    concept,
    traiteur,
    boutique,
    clients,
    blogIndex,
    newsletters,
    theFooter
  }, 
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1200)
    })
  }
}
</script>

<style scoped>

.btn_menu_header a button {
        position: fixed; 
        bottom: 20px; 
        right: 20px; 
        padding: 8px 15px; 
        font-family: bebas-neue-pro, sans-serif; 
        background-color: var(--orange-light);
        border-radius: 20px;
        border: none;
        text-decoration: none;
        color: var(--orange);
        font-size: 18px;
        font-weight: bold; 
        border: 30px var(--orange);
        text-transform: uppercase;
        background-image: url('~assets/img/jpg/texture.png'); 
        background-size: 60%;
        cursor: pointer
    }

    .btn_menu_header a svg {
        margin-right: 10px;
    }

     .btn_menu_header a path {
        fill: var(--orange)
    }

</style>
