<template>
   <section id="projet">
    <h2>Projets Scolaires</h2>
<div class="project-container">
  <div class="projet-card" v-for="p in projetsScolaires" :key="p.title" @click="openModal(p, 'scolaire')">
    <h3>{{ p.title }}</h3>
    <img :src="p.imageSrc" />
  </div>
</div>
<ModalProjectScolaire
  v-if="modalVisible && currentModalType === 'scolaire'"
  :project="selectedProject"
  :visible="true"
  @closeModal="closeModal"
/>

<h2>Projets Professionnels</h2>
<div class="project-container">
  <div v-for="p in projetsProfessionnels" :key="p.title" @click="openModal(p, 'pro')">
    <h3>{{ p.title }}</h3>
    <img :src="p.imageSrc" />
  </div>
</div>
<ModalProjectPro
  v-if="modalVisible && currentModalType === 'pro'"
  :project="selectedProject"
  :visible="true"
  @closeModal="closeModal"
/>

<h2>Projets Personnels</h2>
<div class="project-container">
  <div v-for="p in projetsPersonnels" :key="p.title" @click="openModal(p, 'perso')">
    <h3>{{ p.title }}</h3>
    <img :src="p.imageSrc" />
  </div>
</div>
<ModalProjectPerso
  v-if="modalVisible && currentModalType === 'perso'"
  :project="selectedProject"
  :visible="true"
  @closeModal="closeModal"
/>
  </section>
</template>

<script>
import ModalProjectScolaire from "@/components/ModalProjectScolaire.vue";
import ModalProjectPerso from "@/components/ModalProjectPerso.vue";
import ModalProjectPro from "@/components/ModalProjectPro.vue";

export default {
  components: {
    ModalProjectScolaire,
    ModalProjectPerso,
    ModalProjectPro,
  },
    data() {
      return {
        projetsScolaires: [
        { projectTitle:"CV", 
          imageSrc:"/src/assets/images/CV.PNG"  , 
          title:"Création d'un CV",
          creationDate: "14 Octobre 2023",
          images: [
            "/src/assets/images/CV/Header_CV.jpg",
            "/src/assets/images/CV/Interet_CV.jpg",
            "/src/assets/images/CV/Competence_CV.jpg",
            "/src/assets/images/CV/Aside_CV.jpg",
            "/src/assets/images/CV/Education_CV.jpg",
            ],
          technologies: "HTML5, CSS3",
          visitLink: "https://drive.google.com/file/d/1WwIK3sdgiRXrJpBVTpT_pES5jQ__YyS8/view?usp=sharing",
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

          { projectTitle:"Projet Mediatheque Python ", 
          imageSrc:"/src/assets/images/Python-logo-notext.svg"  ,
          title:"Création d'une médiatheque fictive en utilisant python ",
          creationDate: "21 Aout 2024",
          images: [
            "/src/assets/images/Projet_Python-Mediatheque/Python-logo-notext.svg",
           ],
          technologies: "Python",
          githubLink: "https://github.com/Drocinera/Python_Mediatheque.git" },

          { projectTitle:"Projet port de plaiscance ", 
          imageSrc:"/src/assets/images/API_image.svg"  ,
          title:"Création d'une API pour des réservations de quai dans un port de plaisance",
          creationDate: "16 Septembre 2024",
          images: [
            "/src/assets/images/Projet_API/API_image.svg",
           ],
          technologies: "Javascript, EJS",
          githubLink: "https://github.com/Drocinera/port_de_plaisance.git" },

          { projectTitle:"Projet E-commerce Stubborn", 
          imageSrc:"/src/assets/images/Acceuil_Stubborn.png"  ,
          title:"Création d'un site e-commerce fictif pour un magasin de sweat-shirt",
          creationDate: "18 Octobre 2024",
          images: [
            "/src/assets/images/Symfony-Stubborn/Acceuil_Stubborn.PNG",
            "/src/assets/images/Symfony-Stubborn/Boutique_stubborn.PNG",
            "/src/assets/images/Symfony-Stubborn/Fiche_presentation_stubborn.PNG", 
            "/src/assets/images/Symfony-Stubborn/Panier_remplis_Stubborn.PNG", 
            "/src/assets/images/Symfony-Stubborn/Panier_Stubborn.PNG",
           ],
          technologies: "PHP, Twig",
          githubLink: "https://github.com/Drocinera/Symfony_e_commerce.git" },


              ],
        projetsProfessionnels: [
        ],
        projetsPersonnels: [
        ],
              selectedProject:null,
              modalVisible: false,
              currentModalType: null, // "scolaire", "pro", "perso"
      };
    },
  methods: {
    openModal(project, type) {
      project.currentImageIndex = 0;
      this.selectedProject = project;
      this.modalVisible = true;
      this.currentModalType = type;
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

h2 {
  text-align: center;
  text-transform: uppercase;
  font-weight: bolder;
  color: #ffe8a3;
}


.project-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 0;
}


.projet-card {
  background: rgba(20, 20, 40, 0.6);
  border-radius: 12px;
  padding: 1rem;
  flex: 1 1 250px;    
  max-width: 300px;   
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
    position: relative;
  overflow: hidden;
  border: 1px solid rgba(120, 150, 255, 0.3);
  box-shadow: 0 0 15px rgba(120, 120, 255, 0.15);
}

.projet-card::before {
  content: "";
  position: absolute;
  inset: -50%;
  background: radial-gradient(circle, 
    rgba(140, 100, 255, 0.25) 0%, 
    rgba(30, 10, 60, 0) 60%
  );
  animation: pulseMagic 4s infinite ease-in-out;
  transform: scale(0.6);
  z-index: -1;
}

.projet-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow:
    0 0 25px rgba(150, 150, 255, 0.5),
    0 0 50px rgba(100, 180, 255, 0.3);
  border-color: rgba(180, 200, 255, 0.9);
}

@keyframes pulseMagic {
  0% { opacity: 0.4; transform: scale(0.7);}
  50% { opacity: 0.8; transform: scale(1);}
  100% { opacity: 0.4; transform: scale(0.7);}
}

.projet-card::after {
  content: "";
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    transparent,
    rgba(200, 200, 255, 0.15),
    transparent
  );
  animation: scan 6s linear infinite;
}

@keyframes scan {
  0% { top: -100%; }
  100% { top: 200%; }
}

.projet-card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.projet-card h3 {
  margin-top: 0.7rem;
  font-size: 1.15rem;
  text-align: center;
  color: #ffe8a3;
}

@media (min-width: 600px) {
  .projet-card {
    flex: 1 1 calc(50% - 2rem);  /* 2 par ligne */
  }
}

@media (min-width: 900px) {
  .projet-card {
    flex: 1 1 calc(33% - 2rem);  /* 3 par ligne */
  }
}

@media (min-width: 1200px) {
  .projet-card {
    flex: 1 1 calc(25% - 2rem);  /* 4 par ligne */
  }
}

/* A faire : mettre image modal assez grand pour etre lisible sans que ca modifie les textes du modal*/
</style>

