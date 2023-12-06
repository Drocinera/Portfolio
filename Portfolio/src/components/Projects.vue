<template>
   <div>
    <div v-for="project in projects" :key="project.title" @click="openModal(project)">
      <h3>{{ project.title }}</h3>
      <img :src="project.imageSrc" alt="Image du projet" />
    </div>
    <ModalProject :project="selectedProject" :visible="modalVisible" @closeModal="closeModal" />
  </div>
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
        technologies: "HTML5, CSS3",
        visitLink: "https://drive.google.com/file/d/1k-fkIuJRiK09lMhlOtOAICTHMIwge3zY/view?usp=drive_link",
         githubLink: "https://github.com/Drocinera/CV-.git" },
         
         { projectTitle:"Cahier des charges", 
        imageSrc:"/src/assets/images/Cahier-des-charges.PNG"  ,
        title:"Création d'un cahier des charges pour une entreprise fictive",
        creationDate: "10 Novembre 2023",
        technologies: "Editeur de texte",
        visitLink: "https://drive.google.com/file/d/1zhc1vbkaO7g1XD9E8UfyL6yGx12NF-yH/view?usp=drive_link",
      },
         
         { projectTitle:"Dynamiser un espace commentaire", 
        imageSrc:"/src/assets/images/Dynamiser-un-espace-commentaire.PNG"  ,
        title:"Création d'un espace commentaire dynamique pour un site fictif",
        creationDate: "20 Novembre 2023",
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
      this.selectedProject = project;
      this.modalVisible = true;
    },
    closeModal() {
      console.log('Close modal called');
      this.selectedProject = null;
      this.modalVisible = false;
    },
  },
};
</script>

<style scoped>
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