<template>
<div>
  <header>
      <div class="top_bar" :class="{top_bar_color: scrollPosition > 550}">
        <nuxt-link to='/'>
            <div class="top_bar_logo">
                <img src="@/assets/img/svg/logo.svg" alt="">
            </div>
        </nuxt-link>
        <div class="menu_header_desktop">
            <nuxt-link to='/'>Notre histoire</nuxt-link>
            <nuxt-link to='traiteur-particuliers'>Le Traiteur</nuxt-link>
            <nuxt-link to='producteurs'>Les Producteurs</nuxt-link>
            <nuxt-link to='boutique'>La Boutique</nuxt-link>
            <nuxt-link to='blog'>Le Blog</nuxt-link>   
        </div>
            <div class="top_bar_icon">
                <div class="cart"  @click="cart = !cart" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32.818" height="27.112" viewBox="0 0 32.818 27.112">
                        <g id="Groupe_331" data-name="Groupe 331" transform="translate(65.996 -32.917)">
                        <path id="Tracé_1780" data-name="Tracé 1780" d="M-66,33.352a1.078,1.078,0,0,1,.948-.435c1.983,0,3.966,0,5.949,0a.893.893,0,0,1,1.052.878c.357,1.957.7,3.915,1.054,5.873q.754,4.2,1.51,8.4c.184,1.021.374,2.04.547,3.063a1.377,1.377,0,0,0,1.553,1.317h15.275c.967,0,1.37-.319,1.553-1.258.228-1.165.44-2.333.657-3.5a1.123,1.123,0,0,0,0-.188h-.388q-4.133,0-8.264,0a.826.826,0,0,1-.94-.823.765.765,0,0,1,.627-.781,2.415,2.415,0,0,1,.509-.051q4.181,0,8.361,0c.288,0,.4-.065.446-.373q.3-1.867.676-3.724a1.628,1.628,0,0,0-1.541-1.971c-.139-.012-.279-.006-.418-.006q-6.047,0-12.092,0a1.979,1.979,0,0,1-.569-.072.8.8,0,0,1-.542-.762.8.8,0,0,1,.577-.765,1.825,1.825,0,0,1,.506-.058c4.031,0,8.063.055,12.091-.027a3.565,3.565,0,0,1,3.591,4.4c-.613,3.039-1.156,6.092-1.721,9.141a3.115,3.115,0,0,1-2.242,2.56,3.819,3.819,0,0,1,.362,3.523,3.544,3.544,0,0,1-1.458,1.747,3.721,3.721,0,0,1-4.446-.363c-1.348-1.183-1.564-2.794-.633-4.814h-4.94a3.663,3.663,0,0,1,.423,3.258,3.561,3.561,0,0,1-1.419,1.853,3.715,3.715,0,0,1-4.48-.242A3.6,3.6,0,0,1-55.1,56.778a3.675,3.675,0,0,1,.7-2.593,3.357,3.357,0,0,1-1.45-.959,3.636,3.636,0,0,1-.686-1.805q-.949-5.273-1.907-10.543Q-59,37.8-59.557,34.723c-.007-.04-.02-.079-.036-.145h-.353c-1.683,0-3.366-.008-5.049.007a1.236,1.236,0,0,1-1-.4Zm27.813,22.9a2.017,2.017,0,0,0-2.006-2.064,2.02,2.02,0,0,0-2.077,1.995,2.025,2.025,0,0,0,2.04,2.1A2.02,2.02,0,0,0-38.183,56.253Zm-11.2-.028a2.016,2.016,0,0,0-2.034-2.036,2.017,2.017,0,0,0-2.048,2.055,2.021,2.021,0,0,0,2.035,2.039A2.023,2.023,0,0,0-49.381,56.225Z" fill="#202020"/>
                    </g>
                    </svg>
                    <div class="number_products" v-if="carts.length">
                    <p>{{carts.length}}</p>
                </div>
                </div>
                <div class="search_mobile">
                    <svg id="Groupe_330" data-name="Groupe 330" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27.21" height="27.204" viewBox="0 0 27.21 27.204">
                        <defs>
                            <clipPath id="clip-path">
                            <rect id="Rectangle_158" data-name="Rectangle 158" width="27.21" height="27.204" fill="none"/>
                            </clipPath>
                        </defs>
                        <g id="Groupe_93" data-name="Groupe 93" clip-path="url(#clip-path)">
                            <path id="Tracé_1624" data-name="Tracé 1624" d="M10.416,0A10.4,10.4,0,1,1,0,10.3,10.389,10.389,0,0,1,10.416,0m-.029,1.62a8.779,8.779,0,1,0,8.759,8.815A8.732,8.732,0,0,0,10.387,1.62" transform="translate(0 0)"/>
                            <path id="Tracé_1625" data-name="Tracé 1625" d="M132.951,135.336a1.641,1.641,0,0,1,.065-.539c.218-.439,0-.694-.276-1.009a1.491,1.491,0,0,1-.421-.926c.044-.685.855-.892,1.394-.351a1.206,1.206,0,0,0,1.351.416,2.171,2.171,0,0,1,2.12.68c1.167,1.154,2.337,2.306,3.478,3.485a2.455,2.455,0,1,1-3.463,3.48c-1.206-1.146-2.411-2.3-3.539-3.52a7.068,7.068,0,0,1-.862-1.632l.152-.084m2.408-.955c-.266.243-.631.42-.67.652a1.276,1.276,0,0,0,.265.966c1.045,1.108,2.141,2.168,3.228,3.236.469.461.958.5,1.3.1.4-.46.234-.876-.147-1.257-1.078-1.077-2.15-2.16-3.238-3.226a4.66,4.66,0,0,0-.74-.475" transform="translate(-114.181 -114.082)"/>
                            <path id="Tracé_1626" data-name="Tracé 1626" d="M23.226,30.509a7.361,7.361,0,0,1,7-6.669c.563,0,.968.178.993.774s-.384.812-.927.875a7.117,7.117,0,0,0-1.541.262A5.352,5.352,0,0,0,24.993,30.5c-.1.871-.728,1.345-1.283.9-.242-.2-.327-.585-.484-.886" transform="translate(-20.042 -20.573)"/>
                            <path id="Tracé_1627" data-name="Tracé 1627" d="M35.055,100.088c.065-.536.323-.862.837-.855a.807.807,0,0,1,.02,1.614.812.812,0,0,1-.857-.759" transform="translate(-30.25 -85.63)"/>
                        </g>
                    </svg>
                </div>
                <div class="search_desktop">
                    <input type="text" placeholder="Recherche...">
                </div>
                <div class="top_bar_hamburger" @click="Menu">
                    <span></span>
                </div>
            </div>
      </div>
      <transition name='overlay' appear>
          <div class="overlay" v-if="showMenu">
          </div>
      </transition>
      <transition name="openMenu" appear>
    
      <div class="menu_header" v-if="showMenu">
          <div class="top_bar_menu">
              <nuxt-link to='/'><div class="top_bar_menu_logo">
                <img src="@/assets/img/svg/logo.svg" alt="">
              </div></nuxt-link>
              <div class="top_bar_hamburger_close" @click="Menu">
                  <span></span>
              </div>
          </div>
          <div class="content_menu">
              <div class="content_menu_title">
                  <p>au <strong>menu</strong></p>
              </div>
              <div class="content_menu_text">
                <nuxt-link to='/'>Notre histoire</nuxt-link>
                <nuxt-link to='/traiteur-particuliers'>Le Traiteur</nuxt-link>
                <nuxt-link to='/producteurs'>Les Producteurs</nuxt-link>
                <nuxt-link to='/boutique'>La Boutique</nuxt-link>
                <nuxt-link to='/blog'>Le Blog</nuxt-link>
                <div class="sociaux">
                    <div class="title_sociaux">
                        <p><strong>Suivez</strong> nous</p>
                        <div class="icon_sociaux">
                        <svg xmlns="http://www.w3.org/2000/svg" width="8.434" height="18.359" viewBox="0 0 8.434 18.359">
                            <path id="facebook_3_" data-name="facebook (3)" d="M13.082,3.048h1.54V.129A18.288,18.288,0,0,0,12.378,0c-2.22,0-3.741,1.52-3.741,4.314V6.885H6.187v3.263h2.45v8.211h3v-8.21h2.351l.373-3.263H11.64V4.637C11.641,3.694,11.874,3.048,13.082,3.048Z" transform="translate(-6.187)" fill="#fff"/>
                        </svg>
                        <svg id="instagram_2_" data-name="instagram (2)" xmlns="http://www.w3.org/2000/svg" width="17.179" height="17.183" viewBox="0 0 17.179 17.183">
                            <path id="Tracé_1502" data-name="Tracé 1502" d="M17.585,5.052a6.279,6.279,0,0,0-.4-2.085A4.4,4.4,0,0,0,14.671.453a6.3,6.3,0,0,0-2.084-.4C11.667.01,11.375,0,9.042,0S6.417.01,5.5.05a6.28,6.28,0,0,0-2.084.4,4.192,4.192,0,0,0-1.524.994A4.23,4.23,0,0,0,.9,2.964,6.3,6.3,0,0,0,.5,5.048C.459,5.968.449,6.26.449,8.593s.01,2.625.05,3.541a6.278,6.278,0,0,0,.4,2.085,4.4,4.4,0,0,0,2.514,2.514,6.3,6.3,0,0,0,2.085.4c.916.04,1.208.05,3.541.05s2.625-.01,3.541-.05a6.277,6.277,0,0,0,2.084-.4,4.395,4.395,0,0,0,2.514-2.514,6.3,6.3,0,0,0,.4-2.085c.04-.916.05-1.208.05-3.541S17.625,5.968,17.585,5.052Zm-1.547,7.015a4.71,4.71,0,0,1-.3,1.594,2.85,2.85,0,0,1-1.631,1.631,4.726,4.726,0,0,1-1.594.3c-.906.04-1.178.05-3.471.05s-2.568-.01-3.471-.05a4.707,4.707,0,0,1-1.594-.3,2.644,2.644,0,0,1-.987-.641,2.671,2.671,0,0,1-.641-.987,4.727,4.727,0,0,1-.3-1.594c-.04-.906-.05-1.178-.05-3.471s.01-2.568.05-3.471a4.707,4.707,0,0,1,.3-1.594A2.612,2.612,0,0,1,3,2.548a2.667,2.667,0,0,1,.987-.641,4.73,4.73,0,0,1,1.594-.3c.906-.04,1.178-.05,3.471-.05s2.568.01,3.471.05a4.71,4.71,0,0,1,1.594.3,2.642,2.642,0,0,1,.987.641,2.671,2.671,0,0,1,.641.987,4.729,4.729,0,0,1,.3,1.594c.04.906.05,1.178.05,3.471S16.078,11.161,16.037,12.067Zm0,0" transform="translate(-0.449 0)" fill="#fff"/>
                            <path id="Tracé_1503" data-name="Tracé 1503" d="M129.363,124.5a4.414,4.414,0,1,0,4.414,4.414A4.415,4.415,0,0,0,129.363,124.5Zm0,7.277a2.863,2.863,0,1,1,2.863-2.863A2.864,2.864,0,0,1,129.363,131.777Zm0,0" transform="translate(-120.77 -120.321)" fill="#fff"/>
                            <path id="Tracé_1504" data-name="Tracé 1504" d="M364.51,89.632a1.031,1.031,0,1,1-1.031-1.03A1.031,1.031,0,0,1,364.51,89.632Zm0,0" transform="translate(-350.298 -85.628)" fill="#fff"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30.983" height="18.359" viewBox="0 0 30.983 18.359">
                            <g id="tripadvisor-logotype" transform="translate(0)">
                                <g id="Groupe_29" data-name="Groupe 29" transform="translate(0 0)">
                                <path id="Tracé_1505" data-name="Tracé 1505" d="M18.987,20.369a16.611,16.611,0,0,1,2.548.6,17.438,17.438,0,0,1,4.135,1.885.634.634,0,0,0,.317.091c1.523.006,3.045,0,4.566.005.123,0,.245.013.367.02,0,.03,0,.042,0,.049-.071.109-.143.217-.214.326a9.34,9.34,0,0,0-1.218,2.537.292.292,0,0,0,.032.277A7.766,7.766,0,0,1,23.2,38.441a7.21,7.21,0,0,1-1.853-.238,7.773,7.773,0,0,1-3.805-2.246c-.138-.147-.268-.3-.416-.467l-1.659,2.474L13.83,35.525a.414.414,0,0,0-.055.029.253.253,0,0,0-.032.034A7.691,7.691,0,0,1,8.934,38.31a7.512,7.512,0,0,1-3.2-.18A7.774,7.774,0,0,1,.1,31.834a7.5,7.5,0,0,1,.139-3.068,7.8,7.8,0,0,1,1.208-2.623.3.3,0,0,0,.035-.225A8.668,8.668,0,0,0,.4,23.578c-.118-.186-.258-.359-.389-.538v-.062a.66.66,0,0,0,.077.008q2.337,0,4.673,0a.4.4,0,0,0,.2-.065,16.785,16.785,0,0,1,3.486-1.692,18.944,18.944,0,0,1,2.706-.733,21.676,21.676,0,0,1,2.691-.353A22.834,22.834,0,0,1,18.987,20.369ZM17.034,30.658A6.183,6.183,0,1,0,23.085,24.5,6.192,6.192,0,0,0,17.034,30.658ZM7.757,24.476a6.176,6.176,0,1,0,6.19,6.2A6.183,6.183,0,0,0,7.757,24.476Zm.307-1.614a7.889,7.889,0,0,1,7.43,6.742A7.86,7.86,0,0,1,22.806,22.9a17.587,17.587,0,0,0-6.889-1.436A19.077,19.077,0,0,0,8.064,22.862Z" transform="translate(0 -20.082)" fill="#fff"/>
                                <path id="Tracé_1506" data-name="Tracé 1506" d="M65.447,41.31a3.83,3.83,0,1,1-3.839,3.826A3.817,3.817,0,0,1,65.447,41.31Zm2.5,3.826a2.5,2.5,0,0,0-5.007-.01,2.5,2.5,0,1,0,5.007.01Z" transform="translate(-42.242 -34.637)" fill="#fff"/>
                                <path id="Tracé_1507" data-name="Tracé 1507" d="M16.033,41.31a3.83,3.83,0,1,1-3.843,3.822A3.816,3.816,0,0,1,16.033,41.31Zm2.494,3.818a2.505,2.505,0,0,0-5.01.008,2.505,2.505,0,1,0,5.01-.008Z" transform="translate(-8.358 -34.637)" fill="#fff"/>
                                <path id="Tracé_1508" data-name="Tracé 1508" d="M71.053,49.443a1.269,1.269,0,1,1-1.272,1.281A1.27,1.27,0,0,1,71.053,49.443Z" transform="translate(-47.846 -40.214)" fill="#fff"/>
                                <path id="Tracé_1509" data-name="Tracé 1509" d="M21.6,49.407a1.281,1.281,0,1,1,0,2.562,1.281,1.281,0,1,1,0-2.562Z" transform="translate(-13.933 -40.189)" fill="#fff"/>
                                </g>
                            </g>
                            </svg>
                        </div>
                    </div>
                </div>
              </div>
          </div>
          <div class="btn_menu">
              <nuxt-link to='/contact-devis'><button> <svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="#fff"/>
                </svg>Contact et devis</button></nuxt-link>
          </div>
          <div class="copyright">
              <div class="mentions_legales">
                  <nuxt-link to='/mentions-legales'><p>Mentions Légales</p></nuxt-link>
              </div>
              <div class="date">
                  <p>©{{new Date().getFullYear()}} My-Terroir</p>
              </div>
          </div>
      </div>
      </transition>
  </header>
<cart v-if="cart" />
</div>
</template>

<script>

import cart from '../features/cart'

export default {
    components: {
        cart
    },
    data() {
        return {
            showMenu: false,
            scrollPosition: null,
            cart: false,
     
        }
    },
    computed: {
        carts() {
            return this.$store.state.cart.datas
        },
    },
    methods: {
        Menu() {
            this.showMenu = !this.showMenu
        },
        updateScroll() {
        this.scrollPosition = window.scrollY
        }, 
    },
    mounted() {
    window.addEventListener('scroll', this.updateScroll);
    }   

}
</script>

<style scoped>


/* TRANSITION DU MENU */




.openMenu-enter-active {
    animation: open .3s ease-in-out; 
}

.openMenu-leave-active {
    animation: close .3s ease-in-out; 
}

@keyframes open {
    0% {
        transform: translateX(100%)
    }
    100% {
        transform: translateX(0)
    }
}

@keyframes close {
    0% {
        transform: translateX(0)
    }
    100% {
        transform: translateX(100%)
    }
}


/* MENU LIEN ACTIF */

.nuxt-link-exact-active {
    color: var(--orange)!important;
}

a {
    text-decoration: none; 
}


/* MENU STYLE */

.copyright a {
    text-decoration: none;
    color: white;
}
header {
    position: fixed;
    top: 0; 
    right: 0; 
    left: 0; 
    pointer-events: auto;
    -webkit-z-index: 1000;
    -moz-z-index: 1000;
    -ms-z-index: 1000;
    -o-z-index: 1000;
    z-index: 1000;
}

.top_bar {
    display: flex; 
    flex-flow: row; 
    justify-content: space-between; 
    align-items: center; 
    padding: 0 20px 0 10Px;
    transition: .3s all; 
}

.menu_header_desktop {
    display: none; 
}

.btn_menu_header {
    display: none; 
}

.top_bar_color {
    background-color: var(--gray);
    box-shadow: 0px 0px 10px rgba(17, 17, 17, 0.133);  
}

.top_bar_logo img {
    width: 100px;
}

.top_bar_icon {
    display: flex; 
    align-items: center;
}

.top_bar_icon .search_mobile {
    margin-right: 10px;
    display: none;
}

.top_bar_icon .cart {
    margin-right: 15px;
    display: flex; 
    margin-top: -2px;
    flex-flow: row;
    justify-content: flex-start;
    align-items: flex-start;
}

.number_products {
    margin-top: -5px;
    background-color: var(--orange);
    text-align: center;
    width: 19px;
    border-radius: 50%;
    height: 19px;

    margin-left: -5px;
}

.number_products p {
    margin-top: 2Px;
    color: white;
    font-size: 11px;
    font-weight: bold;
}

.top_bar_hamburger {
    width: 25px; 
    height: 2px;
    position: relative;
    background-color: var(--black);
    cursor: pointer; 
}

.top_bar_hamburger::after {
    content: '';
    top: -10px;
    position: absolute;
    width: 25px; 
    height: 2px;
    background-color: var(--black);
}

.top_bar_hamburger::before {
    content: '';
    top: 10px;
    position: absolute;
    width: 25px; 
    height: 2px;
    background-color: var(--black);
}

.menu_header {
    position: fixed; 
    width: 100%; 
    top: 0;
    height: 100%;
    background-color: var(--black);
    z-index: 200;
}

.top_bar_menu {
    display: flex; 
    flex-flow: row; 
    justify-content: space-between; 
    align-items: center; 
    padding: 10px 20px 10px 10px;
}

.search_desktop {
        display: none; 
    }

.top_bar_menu_logo img {
    width: 100px;
}

.top_bar_hamburger_close {
    width: 30px; 
    height: 3px;
    position: relative;
    background-color: white;
    transform: rotate(45deg);
    cursor: pointer;
}

.top_bar_hamburger_close::after {
    content: '';
    width: 30px; 
    height: 3px;
    position: absolute;
    background-color: white;
    transform: rotate(-90deg);
}


.content_menu {
    display: flex; 
    flex-flow: row;
    justify-content: flex-start; 
    align-items: flex-start; 
    margin-top: 30%;
}

.content_menu_title p{
    transform: rotate(-90deg);
    color: white; 
    font-family: bebas-neue-pro, sans-serif; 
    text-transform: uppercase; 
    font-size: 108px; 
    margin-left: -60px;
    
}

.content_menu_text {
    display: flex; 
    flex-flow: column; 
    margin-top: -82px;
    margin-left: -50px;

}

.content_menu_text a{
    color: white;
    font-family: bebas-neue-pro, sans-serif; 
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 15px;
    text-decoration: none;
    opacity: 0;
    animation: show .7s ease-in-out; 
    animation-fill-mode: forwards;
    transition: transform 1200ms cubic-bezier(0.7, 0, 0.3, 1) 50ms;
}

@keyframes show {
    0%{
        transform: translateY(20px)
    }
    100%{
        opacity: 1;
        transform: translateY(0px)
    }
}

.content_menu_text a:nth-child(2) {
    animation-delay: .2s;
}

.content_menu_text a:nth-child(3) {
    animation-delay: .3s;
}.content_menu_text a:nth-child(4) {
    animation-delay: .4s;
}.content_menu_text a:nth-child(5) {
    animation-delay: .5s;
}

.sociaux {
    margin-top: 50px;
    font-size: 26px;
    color: white;
    font-family: bebas-neue-pro, sans-serif; 
    text-transform: uppercase; 
}

.icon_sociaux {
    margin-top: 10px;
}

.icon_sociaux svg{
    margin-right: 10px;
    opacity: 0;
    animation: show .7s ease-in-out; 
    animation-fill-mode: forwards;
}

.icon_sociaux svg:nth-child(2) {
    animation-delay: .2s;
}

.icon_sociaux svg:nth-child(3) {
    animation-delay: .3s;
}

.btn_menu a{
    display: flex; 
}

.btn_menu a button  {
    margin: 10% auto; 
    padding: 8px 16px; 
    width: 80%;
    font-family: bebas-neue-pro, sans-serif; 
    background-color: var(--orange);
    box-shadow: 4px 4px rgba(218, 71, 9, 0.486);
    border: none;
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: bold; 
    border: 30px var(--orange);
    text-transform: uppercase;
    background-image: url('~assets/img/jpg/texture.png'); 
    background-size: 60%;
}

.btn_menu button svg {
    margin-right: 10px;
}

.copyright {
    display: flex; 
    justify-content: space-between;
    padding: 0 20px;
    color: white;
    font-family: bebas-neue-pro, sans-serif; 
    font-weight: bold;
    position: absolute; 
    bottom: 10px;
    right: 0;
    left: 0;
    animation: show .7s ease-in-out;
}

@media screen and (min-width:768px) {
    .menu_header {
        width: 50%;
        right: 0;
    }

    .content_menu {
        margin-top: 50%;
    }

    .overlay{
        position: fixed; 
        width: 100%; 
        top: 0;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.603);
        z-index: 190;
    }

    .overlay-enter-active {
    animation: openOverlay .3s ease-in-out; 
    }

    .overlay-leave-active {
        animation: closeOverlay .3s ease-in-out; 
    }

     @keyframes openOverlay {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes closeOverlay {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;

        }
    }

    @keyframes open {
        0% {
            transform: translateX(100%)
        }
        100% {
            transform: translateX(0)
        }
    }

    @keyframes close {
        0% {
            transform: translateX(0)
        }
        100% {
            transform: translateX(100%)
        }
    }
}

@media screen and (min-width:1024px) {

    .top_bar {
        padding: 0px 60px 0 60Px; 
        align-items: center;
    }
     .menu_header {
        width: 30%;
        right: 0;
    }
    .menu_header_desktop {
    display: flex; 
    margin-top: 20px;
    }

    .top_bar_color {
    background-color: var(--black);
    box-shadow: 0px 0px 10px rgba(17, 17, 17, 0.133);  
    transform-origin: 0;
}

    .btn_menu_header {
        display: flex; 
    }

    .menu_header_desktop a{
    color: white;
    font-family: bebas-neue-pro, sans-serif; 
    font-weight: 800;
    font-size: 20px;
    margin-right: 20px;
    margin-bottom: 15px;
    text-decoration: none;
    opacity: 0;
    animation: show .7s ease-in-out; 
    animation-fill-mode: forwards;
    transition: transform 1200ms cubic-bezier(0.7, 0, 0.3, 1) 50ms;
    
    }  

    .top_bar_hamburger {
    display: none;
    background-color: white;

    }

    .top_bar_hamburger::after {
      
        background-color: white;
    }

    .top_bar_hamburger::before {
       
        background-color: white;
    } 

    .btn_menu_header a button {
        width: 100%;
        margin: 10% auto; 
        padding: 8px 16px; 
        font-family: bebas-neue-pro, sans-serif; 
        background-color: var(--orange);
        box-shadow: 4px 4px rgba(218, 71, 9, 0.486);
        border: none;
        text-decoration: none;
        color: white;
        font-size: 18px;
        font-weight: bold; 
        border: 30px var(--orange);
        text-transform: uppercase;
        background-image: url('~assets/img/jpg/texture.png'); 
        background-size: 60%;
    }

    .btn_menu_header a svg {
        margin-right: 10px;
    }

    .content_menu {
        margin-top: 30%;
    }

    .cart path {
        fill: white;
    }

    .search_mobile {
        display: none; 
    }

    .search_desktop {
        display: flex; 
        
    }

    .search_desktop input {
        padding: 8px 20px; 
        border: none;
        border-radius: 20px;
        outline: none;
        background-color: white;
        color: var(--orange);
    }

    .search_desktop input::placeholder {
        color: var(--orange);
        font-weight: bold;
        font-family: bebas-neue-pro-expanded, sans-serif;
    }
}

</style>