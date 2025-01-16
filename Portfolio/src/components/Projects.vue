<template>
   <section id="projet">
      <div class="project-container">
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

          { projectTitle:"E-Commerce WordPress fictif", 
          imageSrc:"/src/assets/images/la_vie_des_plantes_acceuil.PNG"  ,
          title:"Création d'un site e-commerce avec WordPress",
          creationDate: "23 Mars 2024",
          images: [
            "/src/assets/images/La_vie_des_plantes/CE_Page_acceuil.PNG",
            "/src/assets/images/La_vie_des_plantes/CE_Page_mon_panier.PNG",
            "/src/assets/images/La_vie_des_plantes/CE_Page_boutique.PNG", 
            "/src/assets/images/La_vie_des_plantes/CE_Page_contact.PNG",
            "/src/assets/images/La_vie_des_plantes/CE_Page_a_propos.PNG",
           ],
          technologies: "WordPress",
          githubLink: "https://github.com/Drocinera/Site_Commerce_WP.git" },

          { projectTitle:"Site vitrine \"Au Petit Village\" ", 
          imageSrc:"/src/assets/images/Au-petit-village.PNG"  ,
          title:"Création d'un site vitrine fictif pour \"Au Petit Village\" ",
          creationDate: "03 Avril 2024",
          images: [
            "/src/assets/images/Au-Petit-Village/page-acceuil-Angular.PNG",
            "/src/assets/images/Au-Petit-Village/page-produit-angular.PNG",
            "/src/assets/images/Au-Petit-Village/Page-propos-angular.PNG", 
           ],
          technologies: "Html, CSS, TypeScript",
          githubLink: "https://github.com/Drocinera/angular-app.git" },

          { projectTitle:"Portail Professionel fictif \"Trouve ton artisan\" ", 
          imageSrc:"/src/assets/images/Trouve-Ton-Artisan.PNG"  ,
          title:"Création d'un site portail professionel fictif pour \"Trouve ton artisan\" ",
          creationDate: "05 juin 2024",
          images: [
            "/src/assets/images/Trouve-Ton-Artisan/Acceuil-Trouve-Ton-Artisan.PNG",
            "/src/assets/images/Trouve-Ton-Artisan/Recherche-trouve-Ton-Artisan.PNG",
            "/src/assets/images/Trouve-Ton-Artisan/Page-Alimentation-Trouve-Ton-Artisan.PNG", 
            "/src/assets/images/Trouve-Ton-Artisan/Page-batiment-Trouve-Ton-Artisan.PNG", 
            "/src/assets/images/Trouve-Ton-Artisan/Page-Fabrication-Trouve-Ton-Artisan.PNG",
            "/src/assets/images/Trouve-Ton-Artisan/Page-Service-Trouve-Ton-Artisan.PNG",
            "/src/assets/images/Trouve-Ton-Artisan/Contact-Artisan-Trouve-Ton-Artisan.PNG", 
           ],
          technologies: "Html, SCSS, JavaScript",
          githubLink: "https://github.com/Drocinera/react-app-trouve-ton-artisan.git" },

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

.project-container {
  display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: flex-start;
}

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #86a5d9;
  }

img {
    width: 20em;
    height: 20em;
    margin-bottom: 0.5em;
    cursor: pointer;
  }

img:hover {
  box-shadow: 5px 5px 4px 3px black;
}

h3 {
  width: 15em;
  text-align: center;
}

h3:hover {
background:linear-gradient(#582900,#008000) ;
}

</style>

