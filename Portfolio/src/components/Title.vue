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
    text-align: center;
    color: #ffd700;
    text-shadow: 3px 3px 1px #7f00ff;

  }

  div {
    background-color: #0f056b; 
    padding-top: 10px;
    padding-bottom: 20px;
    margin-top: 0em;
    margin-bottom: -1em;
    
    
  }
</style>