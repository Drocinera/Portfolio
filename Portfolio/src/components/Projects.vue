<template>
  <div>
    <h3>{{ projectTitle }}</h3>
    <img :src="imageSrc" alt="Image du projet" />
  </div>
</template>

<script>
export default {
  props: {
    projectTitle: String,
    imageSrc: String,
  },
};
</script>