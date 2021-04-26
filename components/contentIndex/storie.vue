<template>
     <section class="storie">
        <div class="block_storie">
          <div class="storie_content">
            <div class="storie_title">
              <div class="title_before">
                <p>à propos</p>
              </div>
              <div class="title_storie">
                <h2>DÉNICHEUR DE <strong>PRODUITS AUTHENTIQUES</strong><span class="orange">.</span></h2>
              </div>
              <hr class="hr_title">
            </div>
            <div class="content_text">
              <p>Notre secret : de bons produits achetés directement au <strong>producteur</strong>, une équipe passionnée, motivée et quelques bons livres de grand-mères.  Bon on avoue : il nous aura fallu 5 ans, beaucoup de travail, de nombreux voyages et autant de rencontres pour pouvoir vous proposer en toute humilité notre expertise en la matière. Pourquoi chercher compliqué quand nous pouvons vous régaler en toute simplicité!</p>
            </div>
          </div>
           <div class="storie_img">
            <img class="img_products" src="@/assets/img/jpg/terroir.jpg" alt="">
          </div>
        </div>
      </section>
</template>

<script>


export default {
    
}
</script>

<style scoped>

.orange {
  color: var(--orange); 
  font-weight: bold; 
}

.storie {
  display: flex;
  flex-flow: column; 
}

.block_storie {
  display: flex;
  flex-flow: column; 
}

.storie_img {
  display: flex;
  padding: 0 15px;
  margin-bottom: 50px;
}

.storie_img_2 img{
  margin-left: 110px;
  margin-top: -230px;
}

.storie_img img {
  object-fit: cover;
  width: 100%; 
  display: flex; 
  margin: auto;
  height: 400px;
}


.storie_img img:nth-child(2) {
  margin-top: 140px;
  margin-left: -230px;
}

.storie_content {
  padding: 0 15px; 
  margin-top: 30px;
  margin-bottom: 10px;
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

.content_text {
  margin-top: 20px;
}

.content_text p {
  font-family: bebas-neue-pro-expanded, sans-serif; 
  color: var(--black);
  font-size: 16px; 
  line-height: 28px; 
  margin-bottom: 10px;
}

.btn_hero button {
    margin: 10% auto; 
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

@media screen and (min-width:1024px) {


  .block_storie {
    display: flex; 
    margin: 120px 100px;
    align-items: center;
  }
  .storie_img {
    width: 50%;
  }

  .storie_img img {
  object-fit: cover;
  width: 500px; 
  height: 500px;
}

  .storie_content {
    width: 50%;
  }

  .title_storie h2 {
    font-size: 70px;
    line-height: 60px
  }

  .content_text p {
  font-size: 18px; 
  line-height: 28px; 

}
  .btn_hero button {
    width: 50%;
    margin-top: 30px;
  }
}
</style>