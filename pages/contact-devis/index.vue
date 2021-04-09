<template>
  <div>
      <the-header/>
          <main>
              <section >
                  <div class="devis"></div>
              <div class="block_left">
                <div class="title_contact">
                    <div class="title_before">
                        <p>contact</p>
                    </div>
                    <div class="title">
                        <h1>Obtenir un <strong>devis</strong><span class="orange">.</span></h1>
                    </div>
                    <hr class="hr_title">
                </div>
                <div class="content_devis">
                    <p>Merci pour l’intérêt porté à <strong>nos services !</strong> Pour demander un devis gratuit, merci de compléter et soumettre ce formulaire. Nous vous contacterons le plus vite possible.</p>
                    <p>N’hesitez pas à nous appeler en cas de problèmes rencontrés ou dans le besoin de plus amples informations !</p>
                </div>
            </div>
            <div class="block_right">
                <div class="form_devis">
                    <div class="title_form">
                        <h4>informations <strong>personelles</strong></h4>
                        <p>Note: Les informations fournies ne seront utilisées que pour vous contacter suite à votre demande de devis.</p>
                    </div>
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
                        <div class="title_form_two">
                            <h4>Votre <strong>evènements</strong></h4>
                        </div>
                        <div class="label">
                            <p>Type de prestations</p>
                            <select v-model="type">
                                <option disabled value="">Choisir dans la liste <svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="#fff"/>
                </svg></option>
                                <option>Buffets et Cocktails</option>
                                <option>Repas et grillades</option>
                                <option>Braséro</option>
                                <option>Mariages</option>
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
                        <div class="btn_hero">
                                <button> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                                        <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="#fff"/>
                                    </svg>Soumettre votre demande</button>
                            </div>
                    </form>
                </div>
            </div>

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
            type: '',
            openType: true,
        }
    }
}
</script>

<style scoped>

.devis {
    background-image: url('~assets/img/jpg/contact.jpg'); 
    background-size: cover; 
    height: 500px;
    background-position: -250px 0; 
    background-repeat: no-repeat; 
}

.title_contact {
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

.content_devis {
    padding: 0 15px; 
}

.content_devis p{
    margin-top: 20px;
    font-size: 16px; 
    color: var(--black);
    line-height: 22px;
}

.block_right {
    margin-top: 20px;
    padding: 20px 15px 50px 15px;
    background-color: var(--gray);
}


.title_form h4 {
    font-family: bebas-neue-pro, sans-serif; 
    color: var(--orange);
    font-weight: lighter;
    font-size: 28px; 
    text-transform: uppercase; 
    line-height: 28px; 
    margin-bottom: 10px; 
}

.title_form p {
    font-style: italic; 
    font-size: 12Px; 
    margin-top: 15px;
    margin-bottom: 10px;
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