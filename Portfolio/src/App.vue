<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
import Home from "@/views/Home.vue";
export default {
  views: {
    Home,
  },
};
</script>

<template>
  <div>
    <RouterView>
    </RouterView>
  </div>
</template>

<style>
  @import "./assets/main.css";

  .menu-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: linear-gradient(to top, #5f4bb6 20%, #86a5d9 100%); /*Bleu nuit*/
    margin-bottom: 1em;
    margin-top: -1em;
    padding-top: 1em;
    position: relative;
    transition: background-color 0.3s;
    width: 100%;
    top: 0;
  }

  .sticky {
  justify-content: space-between;
  position: fixed;
  background-color: transparent;
  box-sizing: border-box;
  margin-inline-end: 10em;
  z-index: 9999;
}

header.sticky.sticky-header {
  filter: opacity(50%);
}


nav.sticky.sticky-navigation {
  right: -9.75em;

}

  .citation {
    height: 10em;
    width: 30em;
    padding-right: 3em;
  
  }

  .citation-container {
position: relative ;
  }

  body.modal-open {
  overflow: hidden;
}

</style>