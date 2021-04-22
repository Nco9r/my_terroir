<template>
<div>
<the-header/>
  <main>
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
//   async asyncData({ $strapi }) {
//         const articles = await $strapi.$articles.find('')
//         return { articles }
//     },
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

    .blog {
    padding: 0 15px;
    background-color: #fff;
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
