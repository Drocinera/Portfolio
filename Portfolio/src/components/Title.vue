<template>
    <div class="title-container">
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
    font-family: 'MoriaCitadel', sans-serif;
    text-align: center;
    color: #ffd700;
    text-shadow: 3px 3px 1px black;

  }

  .title-container {
  background-color: #86a5d9;
  padding-top: 10px;
  padding-bottom: 20px;
  margin-top: 0em;
  margin-bottom: -1em;
}

</style>