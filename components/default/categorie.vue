<template>
  <div class="categorie">
                <div class="title_categorie">
                    <p>Catégories</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                    <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="#202020"/>
                </svg>
                </div>
                <div class="items_categorie">
                    <div class="items_box">
                        <div class="items_icones active">
                           <img src="@/assets/img/svg/charcuterie.svg" alt="">
                        </div>
                        <div class="content_items">
                            <p>Charcuteries</p>
                        </div>
                    </div>

                    <div class="items_box">
                        <div class="items_icones">
                           <img src="@/assets/img/svg/fromage.svg" alt="">
                        </div>
                        <div class="content_items">
                            <p>Fromageries</p>
                        </div>
                    </div>

                      <div class="items_box">
                        <div class="items_icones viande">
                           <img  src="@/assets/img/svg/viande.svg" alt=""> 
                        </div>
                        <div class="content_items">
                            <p>Viandes</p>
                        </div>
                    </div>

                    <div class="items_box">
                        <div class="items_icones vins">
                           <img  src="@/assets/img/svg/vins.svg" alt="">  
                        </div>
                        <div class="content_items">
                            <p>Vins</p>
                        </div>
                    </div>

                    <div class="items_box">
                        <div class="items_icones epicerie">
                           <img  src="@/assets/img/svg/epicerie.svg" alt="">  
                        </div>
                        <div class="content_items">
                            <p>Epicerie</p>
                        </div>
                    </div>

                </div>
            </div>
</template>

<script>
export default {

}
</script>

<style>

.categorie {
    margin-bottom: 10px;
}

.title_categorie {
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
}

.title_categorie p {
    font-weight: bold; 
}

.items_categorie {
    display: flex; 
    flex-flow: row nowrap; 
    overflow-x: scroll;
}

.items_box {
    margin-top: 10px;
    display: flex; 
    flex-flow: column; 
    align-items: center;
    margin-right: 25px;
}

.items_icones {
    background-color: var(--gray);
    width: 80px;
    height: 80px;
    display: flex; 
}

.items_icones img {
    display: flex; 
    margin: auto; 
    width: 45px;
}

.vins img{
    width: 23px;
}

.epicerie img{
    width: 33px;
}

.viande img {
    width: 55px;

}

.content_items p{
    font-size: 14px;
    font-weight: bold; 
    color: var(--black);
    font-family: bebas-neue-pro, sans-serif;
    margin-top: -8px;

}

</style>