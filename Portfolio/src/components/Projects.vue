<template>
   <section id="projet">
      <div>
        <div v-for="project in projects" :key="project.title" @click="openModal(project)">
          <h3>{{ project.title }}</h3>
            <img :src="project.imageSrc" alt="Image du projet" />
        </div>
          <ModalProject ref="modalProject" :project="selectedProject" :visible="modalVisible" @closeModal="closeModal" @nextImage="nextImage" />
      </div>
  </section>
</template>

<script>
import ModalProject from "@/components/ModalProject.vue";

export default {
  components: {
    ModalProject,
  },
    data() {
      return {
        projects: [
        { projectTitle:"CV", 
        imageSrc:"/src/assets/images/CV.PNG"  ,
        title:"Création d'un CV",
        creationDate: "14 Octobre 2023",
        images: [
        "/src/assets/images/CV/Header-CV.PNG",
        "/src/assets/images/CV/Experience-CV.PNG",
        "/src/assets/images/CV/Diplome_Compétence-CV.PNG",
        "/src/assets/images/CV/Aside-CV.PNG",
        "/src/assets/images/CV/Footer-CV.PNG",
        ],
        technologies: "HTML5, CSS3",
        visitLink: "https://drive.google.com/file/d/1k-fkIuJRiK09lMhlOtOAICTHMIwge3zY/view?usp=drive_link",
         githubLink: "https://github.com/Drocinera/CV-.git" },
         
         { projectTitle:"Cahier des charges", 
        imageSrc:"/src/assets/images/Cahier-des-charges.PNG"  ,
        title:"Création d'un cahier des charges pour une entreprise fictive",
        creationDate: "10 Novembre 2023",
        images: [
        "/src/assets/images/Cahier-des-charges/Titre-Cahier.PNG",
        "/src/assets/images/Cahier-des-charges/sommaire-Cahier.PNG",
        "/src/assets/images/Cahier-des-charges/Présentation-Cahier.PNG",
        "/src/assets/images/Cahier-des-charges/Cibles-Cahier.PNG",
        "/src/assets/images/Cahier-des-charges/Objectifs-Cahier.PNG",
        "/src/assets/images/Cahier-des-charges/Quantitatif-Cahier.PNG",
        "/src/assets/images/Cahier-des-charges/Périmètre-Cahier.PNG",
        "/src/assets/images/Cahier-des-charges/Maquettage-Cahier.PNG",
        "/src/assets/images/Cahier-des-charges/Graphisme-Cahier.PNG",
        "/src/assets/images/Cahier-des-charges/spécificité-Cahier.PNG",
        "/src/assets/images/Cahier-des-charges/Livrable-Cahier.PNG",
        "/src/assets/images/Cahier-des-charges/Planning-Cahier.PNG",
        ],
        technologies: "Editeur de texte",
        visitLink: "https://drive.google.com/file/d/1zhc1vbkaO7g1XD9E8UfyL6yGx12NF-yH/view?usp=drive_link",
      },
         
         { projectTitle:"Dynamiser un espace commentaire", 
        imageSrc:"/src/assets/images/Dynamiser-un-espace-commentaire.PNG"  ,
        title:"Création d'un espace commentaire dynamique pour un site fictif",
        creationDate: "20 Novembre 2023",
        images: [
        "/src/assets/images/Espace-commentaire/Liste-commentaire.PNG",
        "/src/assets/images/Espace-commentaire/formulaire-commentaire.PNG",
        "/src/assets/images/Espace-commentaire/Erreur-commentaire.PNG",
        "/src/assets/images/Espace-commentaire/Dyanmique-commentaire.PNG",
        ],
        technologies: "HTML5, CSS3, JavaScript",
         githubLink: "https://github.com/Drocinera/DynamiserUnEspaceCommentaires.git" },

              ],
              selectedProject:null,
              modalVisible: false,
      };
    },
  methods: {
    openModal(project) {
      console.log('Open modal called')
      project.currentImageIndex = 0;
      this.selectedProject = project;
      this.modalVisible = true;
      document.body.classList.add('modal-open');
    },
    closeModal() {
      console.log('Close modal called');
      this.selectedProject = null;
      this.modalVisible = false;
      document.body.classList.remove('modal-open');
    },
    nextImage() {
    this.$refs.modalProject.nextImage();
    },
  },
};
</script>

<style scoped>

section {
  padding-bottom: 1em;
}
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #7f00ff;
  }

  img {
    width: 20em;
    height: 20em;
    padding-bottom: 0.5em;
    cursor: pointer;
  }

  h3 {
    color: #ffd700;
    border-bottom: 3px solid #0f056b;
  }


</style>

