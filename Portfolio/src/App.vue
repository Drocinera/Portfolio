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

export default {
  components: {
    Header,
    Navigation,
    Title,
    Introduction,
    Projects,
    ContactForm,
  },
};
</script>

<template>
  <div>
    <Header />
    <Navigation />
    <Title title="Portfolio de Pichonneau Théo" subtitle="Développeur web et web mobile " />
    <Introduction introduction="Présentation" />
    <Projects projectTitle="CV" imageSrc="/src/assets/images/CV.PNG"/>
    <Projects projectTitle="Cahier des charges" imageSrc="/src/assets/images/Cahier-des-charges.PNG" />
    <Projects projectTitle="Dynamiser un espace commentaire" imageSrc="/src/assets/images/Dynamiser-un-espace-commentaire.PNG"/>
    <ContactForm />
  </div>
</template>

