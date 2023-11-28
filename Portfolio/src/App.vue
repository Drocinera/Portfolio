<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
import Header from "@/components/Header.vue";
import Navigation from "@/components/Navigation.vue";
import TitleSubtitle from "@/components/TitleSubtitle.vue";
import Introduction from "@/components/Introduction.vue";
import Project from "@/components/Project.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
  components: {
    Header,
    Navigation,
    TitleSubtitle,
    Introduction,
    Project,
    ContactForm,
  },
};
</script>

<template>
  <div>
    <Header />
    <Navigation />
    <TitleSubtitle title="Portfolio de Pichonneau Théo" subtitle="Développeur web et web mobile " />
    <Introduction introduction="Présentation" />
    <Project projectTitle="CV" imageSrc="Portfolio\src\assets\CV.PNG" />
    <Project projectTitle="Cahier des charges" imageSrc="Portfolio\src\assets\Cahier des charges.PNG" />
    <Project projectTitle="Dynamiser un espace commentaire" imageSrc="Portfolio\src\assets\Dynamiser un espace commentaire.PNG" />
    <ContactForm />
  </div>
</template>

