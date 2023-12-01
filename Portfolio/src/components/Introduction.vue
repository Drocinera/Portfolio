<template>
  <div>
    <p>{{ introduction }}</p>
  </div>
</template>

<script>
export default {
  props: {
    introduction: String,
  },
};
</script>

<style scoped> 
  p {
    color:#ffd700 ;
    background-color:#0f056b ;
    text-align: center ;
    
  }
</style>