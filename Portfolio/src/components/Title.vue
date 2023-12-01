<template>
    <div>
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      subtitle: String,
    },
  };
  </script>

  <style scoped>
  h1, h2 {
    font-family: 'Raleway', sans-serif;
  }
</style>