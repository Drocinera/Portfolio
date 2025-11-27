<template>
  <div v-if="visible" class="modal-overlay" @click="closeModalInternal">
    <div class="modal-content" @click.stop>
      
      <h2>{{ project.title }}</h2>
      <p>Date de création: {{ project.creationDate }}</p>

      <div class="image-wrapper">
        <img :src="project.images[project.currentImageIndex]" class="project-image" />
      </div>

      <button @click="nextImage" class="next-btn">Suivant</button>

      <p>Langages utilisées: {{ project.Langages }}</p>

      <p><a v-if="project.visitLink" :href="project.visitLink" target="_blank">Visiter le site</a></p>
      <p><a v-if="project.githubLink" :href="project.githubLink" target="_blank">Repository GitHub</a></p>

      <div class="button-container">
        <button @click="closeModalInternal" class="close-button">Fermer</button>
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
  /* Detection du click de la souris en dehors ou dans le modal*/
  methods: {
    handleMouseDown() {
      this.mouseDownTime = Date.now();
    },
    handleMouseUp() {
      const mouseUpTime = Date.now();
      const clickDuration = mouseUpTime - this.mouseDownTime;

      if (clickDuration < 300) {

        return;
      }

      this.closeModalInternal();
    },
    closeModalInternal() {
      console.log('Closing modal...');
      this.$emit('closeModal');
    },
    handleclickInside() {

    },
    handleClickOutside() {
  console.log('Clicked outside the modal!');
  this.closeModalInternal();
    },
    nextImage() {
    try {
      if (this.project.currentImageIndex < this.project.images.length - 1) {
        this.project.currentImageIndex++;
      } else {
        this.project.currentImageIndex = 0;
      }
      this.$forceUpdate(); 
    } catch (error) {
      console.error('Error in nextImage:', error);
    }
  },
    mounted() {
  document.addEventListener('click', this.handleClickOutside);
},

beforeDestroy() {
  document.removeEventListener('click', this.handleClickOutside);
    },
  },
};
</script>
  
  <style scoped>

  .modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  z-index: 999;
}

.modal-content {
  width: 70vw;
  max-width: 900px;
  height: 80vh;
  background: linear-gradient(to right, #86A5D9, #C4EBC8);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;        /*empêche la mise en page de bouger */
  position: relative;
}

.image-wrapper {
  flex: 1;                 /* occupe tout l'espace disponible */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  background: #00000020;
  border-radius: 8px;
  overflow: hidden;        /* empêche l’image de dépasser */
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: contain; /* empêche les déformations et le mouvement */
}

.next-btn {
  align-self: center;
  margin-bottom: 1rem;
  cursor: pointer;
  background: linear-gradient(to right, #360033, #0b8793);
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 6px;
}

.close-button {
  cursor: pointer;
  background: linear-gradient(to right, #360033, #0b8793);
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 6px;
}

  </style>