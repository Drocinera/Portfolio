<template>
    <form @submit.prevent="submitForm">
      <label for="name">Nom :</label>
      <input type="text" id="name" v-model="name" required />
  
      <label for="lastName">Prénom :</label>
      <input type="text" id="lastName" v-model="lastName" required />
  
      <label for="subject">Objet du message :</label>
      <input type="text" id="subject" v-model="subject" required />
  
      <label for="message">Message :</label>
      <textarea id="message" v-model="message" required></textarea>
  
      <button type="submit">Envoyer</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        lastName: '',
        subject: '',
        message: '',
      };
    },
    methods: {
      submitForm() {
        // Ajoutez ici la logique pour envoyer le message par email
        console.log('Message envoyé :', this.name, this.lastName, this.subject, this.message);
      },
    },
  };
  </script>