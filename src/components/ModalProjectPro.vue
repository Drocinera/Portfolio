<template>
  <div v-if="visible" class="modal-overlay" @click="handleClickOutside">
    <div class="modal-content fixed-modal" @click.stop>
      <h2>{{ project.title }}</h2>
      <p>Date de création : {{ project.creationDate }}</p>

      <div class="diaporama-container">
        <p>Détails en image :</p>
        <img :src="project.images[project.currentImageIndex]" class="project-image" />
        <button @click="nextImage" class="scroll-button button-next">Suivant</button>
      </div>

      <p>Technologies : {{ project.technologies }}</p>
      <p><a v-if="project.visitLink" :href="project.visitLink" target="_blank">Visiter</a></p>
      <p><a v-if="project.githubLink" :href="project.githubLink" target="_blank">GitHub</a></p>

      <div class="button-container">
        <button @click="$emit('closeModal')" class="close-button">Fermer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
    visible: Boolean,
  },
  methods: {
    nextImage() {
      if (this.project.currentImageIndex < this.project.images.length - 1) {
        this.project.currentImageIndex++;
      } else {
        this.project.currentImageIndex = 0;
      }
    },
    handleClickOutside() {
      this.$emit("closeModal");
    }
  }
};
</script>

<style scoped>
.fixed-modal {
    width: 50em;
    height: 30em;
  }
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-content {
    padding: 20px;
    padding-bottom: 10em;
    margin-top: -5em;
    border-radius: 8px;
    text-align: left;
    max-width: 400px;
    background: linear-gradient(to right, #86A5D9, #C4EBC8);
  }
  
  a {
    text-decoration: none;
    color: #e5ff00;
  }

  .button-container {
  text-align: center;
}

  .close-button {
    position: absolute;
    cursor: pointer;
    background: linear-gradient(to right, #360033, #0b8793);
    margin-top: 2em;
    margin-left: -3em;
  }

  .diaporama-container {
  position: relative;
}

  .project-image {
  max-width: 100%;
  height: 20em;
  margin-bottom: 10px;
  object-fit: contain;
}

.button-next {
  position: absolute;
  bottom: -18px; 
  left: -5px; 
  cursor: pointer;
  background: linear-gradient(to right, #360033, #0b8793);
  color: white;
  border: none;
  padding: 8px 16px;
  margin-top: 10px;
}

.scroll-button {
  cursor: pointer;
  background: linear-gradient(to right, #360033, #0b8793);
  color: white;
  border: none;
  padding: 8px 16px;
  margin-top: 10px;
}
</style>
