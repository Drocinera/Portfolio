<template>
    <div v-if="visible" class="modal-overlay">
        <div class="modal-content">
        
        <h2>{{ project.title }}</h2>
        <p>Date de création: {{ project.creationDate }}</p>
        <p>Technologies utilisées: {{ project.technologies }}</p>
        <p><a v-if="project.visitLink" :href="project.visitLink" target="_blank">Visiter le site</a></p>
        <p><a v-if="project.githubLink" :href="project.githubLink" target="_blank">Repository GitHub</a></p>
        <button @click="closeModal" class="close-button">Fermer</button>
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
      closeModal() {
        this.$emit("closeModal");
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
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    text-align: left;
    max-width: 600px;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  </style>