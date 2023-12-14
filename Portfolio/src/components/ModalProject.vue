<template>
  <div v-if="visible" class="modal-overlay" ref="modal"  @mousedown="handleMouseDown" @mouseup="handleMouseUp" @click="handleClickOutside">
    <div class="modal-content" @click.stop="handleclickInside" >
      <h2>{{ project.title }}</h2>
      <p>Date de création: {{ project.creationDate }}</p>
      <p>Technologies utilisées: {{ project.technologies }}</p>
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
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-content {
    color: white;
    padding: 20px;
    border-radius: 8px;
    text-align: left;
    max-width: 600px;
    background: linear-gradient(to right, #360033, #0b8793);
  }
  
  a {
    text-decoration: none;
    color: #ffd700;
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
  </style>