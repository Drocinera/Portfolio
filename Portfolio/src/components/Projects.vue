<template>
    <div>
      <h3>{{ projectTitle }}</h3>
      <img :src="imageSrc" alt="Project Image" />
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