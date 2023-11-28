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