<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
import Header from "@/components/Header.vue";
import Navigation from "@/components/Navigation.vue";
import Title from "@/components/Title.vue";
import Introduction from "@/components/Introduction.vue";
import Projects from "@/components/Projects.vue";
import ContactForm from "@/components/ContactForm.vue";
import Footer from "@/components/Footer.vue"

export default {
  components: {
    Header,
    Navigation,
    Title,
    Introduction,
    Projects,
    ContactForm,
    Footer,
  },
  data() {
    return {
      isSticky: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    scrollToBottom() {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    },
    handleScroll() {
      this.isSticky = window.scrollY > 0;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<template>
  <div>
    <div class="menu-container">
      <Header :class="{ 'sticky': isSticky, 'sticky-header': isSticky }"/>
      <div class="citation-container">
        <img src="/src/assets/images/Citation-portfolio.PNG" alt="Citation indiquant: La logique vous mènera d'un point A à un point B. L'imagination vous mènera partout." class="citation"
        title="Citation de Albert Einstein" >
      </div>
      <Navigation :class="{ 'sticky': isSticky, 'sticky-navigation': isSticky }"/>
   </div>
     <div>
      <Title title="Portfolio de Pichonneau Théo" subtitle="Développeur web et web mobile " />
      <Introduction id="introduction" introduction="Salutation, voyageurs ! Bienvenu sur mon humble portfolio où se mêle magie et technologie. 
        N'ayez crainte, Tout a été verifié par de fidèle gobelin qui ont explorer les méandres de cette endroit pour vous assurer un moment paisible et serein. 
        Ici vous trouverez tout ce qui me conecerne : Mes exploits héroïque (qui sont pour le moment...basique), ma passion pour la fantasy, la magie, la nature et bien évidemment le développement web et web mobile ! 
         Prenez le temps de vérifiez chaque recoin de cette endroit enchanté, qui sais quel secret vous pourriez découvrir ?"/> 
      <Projects projectTitle="CV" imageSrc="/src/assets/images/CV.PNG" class="lastDiv" />
      <ContactForm/>
      <Footer/> 
     </div>
  </div>
</template>

<style>
  @import "./assets/main.css";

  .menu-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: bottom;
    background-color: #0f056b; /*Bleu nuit*/
    margin-bottom: 1em;
    margin-top: -1em;
    padding-top: 1em;
    position: relative;
    transition: background-color 0.3s;
    width: 100%;
    top: 0;
  }

  .sticky {
  justify-content: space-between;
  position: fixed;
  background-color: transparent;
  box-sizing: border-box;
  margin-inline-end: 10em;
}


nav.sticky.sticky-navigation {
  right: -9.75em;

}

  .citation {
    height: 10em;
    width: 30em;
    padding-right: 3em;
  
  }

  .lastDiv {
    margin-bottom: 1em;
  }

  body.modal-open {
  overflow: hidden;
}
</style>