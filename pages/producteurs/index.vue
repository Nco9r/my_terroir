<template>
  <div>
      <the-header/>
      <main>
          <section>
               <div class="producteurs"></div>
                <div class="block_left_producteurs">
                <div class="title_producteurs">
                    <div class="title_before">
                        <p>fournisseurs</p>
                    </div>
                    <div class="title">
                        <h1>nos producteurs de <strong>confiance</strong><span class="orange">.</span></h1>
                    </div>
                    <hr class="hr_title">
                </div>
                <div class="content_producteurs">
                    <p>Nous travaillons uniquement avec les meilleurs agriculteurs ! Nous cherchons à nous associer à des éleveurs qui travaillent avec la nature, dans le respect du bien être de l’animal et de l’environnement. </p>
                    <p>Chacun à leur façon, ils répondent tous à une charte bien précise:</p>
                    <ul>
                        <li>Un amour inconditionnel pour les animaux</li>
                        <li>La meilleure alimentation</li>
                        <li>Aucun antibiotique préventif</li>
                        <li>Travailler en faveur de la durabilité environnementale</li>
                    </ul>
                </div>
            </div>
            <categorie/>
            
          </section>
          <newsletters/>
      </main>
      <the-footer/>
  </div>
</template>

<script>
import theHeader from '~/components/default/theHeader'
import newsletters from '~/components/default/newsletters'
import theFooter from '~/components/default/theFooter'
import categorie from '~/components/default/categorie'


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
        theFooter,
        categorie
    }
}
</script>

<style>

.producteurs {
    background-image: url('~assets/img/jpg/ferme.jpg'); 
    background-size: cover; 
    height: 500px;
    background-position: -200px 0; 
    background-repeat: no-repeat; 
}

.title_producteurs{
    padding: 20px 15px 5px 15px;
}

.categorie {
    padding: 0 15px;
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

.content_producteurs {
    padding: 0 5px 0 10px; 
}

.content_producteurs p:nth-child(1){
    margin-top: 20px;
    font-size: 16px; 
    font-family: bebas-neue-pro, sans-serif;
    color: var(--black);
    line-height: 22px;
    font-weight: bold;
    margin-bottom: 10px;
}

.content_producteurs ul {
    margin-top: 20px;
}

.content_producteurs ul li {
    color: var(--orange);
    font-weight: bold;
    margin-bottom: 5px;
}


</style>