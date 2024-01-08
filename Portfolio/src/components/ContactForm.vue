<template>
  <section id="Contact" class="Areaform">
    <form @submit.prevent="submitForm" class="formulaire">
      <div class="form-group">
        <label for="name">Nom :</label>
        <input type="text" id="name" v-model="name" required />
      </div>

      <div class="form-group">
        <label for="lastName">Prénom :</label>
        <input type="text" id="lastName" v-model="lastName" required />
      </div>

      <div class="form-group" style="grid-column: span 2;">
        <label for="mail">Votre adresse mail :</label>
        <input type="text" id="mail" v-model="mail" required/>
      </div>

      <div class="form-group" style="grid-column: span 2;">
        <label for="subject">Objet du message :</label>
        <input type="text" id="subject" v-model="subject" required />
      </div>

      <div class="form-group" style="grid-column: span 2;">
        <label for="message">Message :</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>

      <button type="submit">Envoyer</button>
      </form>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        lastName: '',
        mail: '',
        subject: '',
        message: '',
      };
    },
    methods: {
      submitForm() {
        if (
          this.name === '' ||
          this.lastName === '' ||
          this.mail === '' ||
          this.subject === '' ||
          this.message === '' ) {
          document.getElementById('error-message').style.display = 'block';
      } else {
         document.getElementById('error-message').style.display = 'none';
         
//Ici pour l'envoie des donnée par mail//

        this.name = "";
        this.lastName = "";
        this.mail = "";
        this.subject = "";
        this.message = "";
        console.log('Message envoyé :', this.name, this.lastName, this.subject, this.message);
      }
      },
    },
  };
  </script>

  <style scoped>

  .Areaform {
    background-color: #0f056b;
  }

  .form-group {
    background-color: #7f00ff ;
   padding: 2px;
  }
.formulaire {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  max-width: 400px;
  margin: auto;
}

label {
  display: block;
  margin-bottom: 0.25em;
}

input,
textarea {
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
}

button {
  background: linear-gradient(45deg, #ff00cc, #3333cc);
  transition: background 0.3s ease-in-out;
  right: 2em;
}

button:hover {
  background: linear-gradient(45deg, #ff0066, #330066);
}



  </style>