<template>
  <div class="introduction-div">
    <pre>Salutation, voyageurs ! 
        Bienvenu sur mon humble portfolio où se mêle <a @click.prevent="showPortailImage" @click="showMagicalImage" href=#>magie</a> et technologie. 
        N'ayez crainte, Tout a été verifié par de fidèle gobelin qui ont explorer les méandres de cette endroit
         pour vous assurer un moment paisible et serein. 
        Ici vous trouverez tout ce qui me concerne : Mes exploits héroïque (qui sont pour le moment...basique),
         Ma passion pour la fantasy, la <a @click.prevent="showPortailImage" @click="showMagicalImage" href=#>magie</a> <a @click.prevent="showNaturalImage" href="#">la nature</a> et bien évidemment le <a @click.prevent="showTechImage" href="#">développement web et web mobile</a>  ! 
         Prenez le temps de vérifiez chaque recoin de cette endroit enchanté, qui sais quel secret vous pourriez découvrir ?</pre>
         <div class="animation-image-div">
          <img src="src/assets/images/Animation-image/illustration-blue-fire-dragon.jpg" alt="Image magique" class="magical-image" />
          <img v-if="isNatureImageVisible" src="src/assets/images/Animation-image/Iggdrasil-tree.jpg" alt="Image d'arbre" class="nature-image">
          <img v-if="isTechImageVisible" src="src/assets/images/Animation-image/Developpement-web.jpg" alt="image de déveloopement web sur un ordinateur" class="tech-image">
        </div>
        <img v-show="isPortalVisible" src="src/assets/images/Animation-image/portail-magique-_1_.png" alt="Portail magique--Image by rawpixel.com</a> on Freepik" id="Portail-apparition">
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPortalVisible: false,
      isNatureImageVisible: false,
      isTechImageVisible: false,
    };
  },
  methods: {
    showPortailImage() {
      this.isPortalVisible = true;
      setTimeout(() => {
        this.isPortalVisible = false;
      }, 2000); 
    },
    showMagicalImage() {
      const magicalImage = document.querySelector('.magical-image');
      magicalImage.style.opacity = '1';
    },
    showNaturalImage() {
      this.isNatureImageVisible = true;
  },
  showTechImage() {
      this.isTechImageVisible = true;
},
},
};
</script>

<style scoped> 

  pre {
    font-family: 'MedievalSharp', cursive;
    color:#ff8000 ;
    text-align: center ;   
    font-size: 1.25em;
  }

  @media only screen and (max-width: 600px) {
  div.introduction-div {
    overflow-wrap:break-word ;
  }
}

  a {
    text-decoration: none;
    color : #ff8000;
  }

  .introduction-div {
    height: 341px; 
    background-color:#0f056b ;
    margin-bottom: 1em;
    padding-top: 1em;
    justify-content: center;
  }

.animation-image-div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 5em;
  padding-left: 8em;
  padding-right: 8em;
}

.magical-image {
  opacity: 0;
}

.nature-image {
  animation: natureImageAnimation 1s ease-out;
}

.tech-image {
  animation: techImageAnimation 1s ease-in-out;
}

#Portail-apparition {
  height: 11em;
  width: 11em;
  position: relative;
  left: 5em;
  bottom: 8em;
  animation: fadeInOutRotate 2s ease-in-out;
}

@keyframes fadeInOutRotate {
  0% {
    opacity: 0;
    transform: rotate(0deg); 
  }
  50% {
    opacity: 1;
    transform: rotate(360deg); 
  }
  100% {
    opacity: 0;
    transform: rotate(720deg); 
  }
}

@keyframes natureImageAnimation {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  50%{
    transform: translateY(50%);
    opacity: 0.5;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes techImageAnimation {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.isPortalVisible #Portail-apparition {
  animation: fadeInOut 2s ease-in-out;
}
</style>
