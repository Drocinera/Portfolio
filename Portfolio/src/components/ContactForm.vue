<template>
  <section id="Contact" class="Areaform">
    <div>
      <h3>Formulaire de contact</h3>
      <form @submit.prevent="submitForm"  class="formulaire">
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
          <p v-if="formSent">Le message a bien été envoyé </p>
        </form>
      </div>
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
        formSent: false,
      };
    },
    methods: {
      validateForm() {
    return this.name !== '' && this.lastName !== '' && this.mail !== '' && this.subject !== '' && this.message !== '';
  },

  async submitForm() {
    if (this.validateForm()) {
      try {
        const response = await fetch('https://formspree.io/f/mvoegbko', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.name,
            lastName: this.lastName,
            mail: this.mail,
            subject: this.subject,
            message: this.message,
          }),
        });

        if (response.ok) {
          this.formSent = true;

          this.name = "";
          this.lastName = "";
          this.mail = "";
          this.subject = "";
          this.message = "";

          console.log('Message envoyé :', this.name, this.lastName, this.mail, this.subject, this.message);
        } else {
          console.error('Erreur lors de l\'envoi du formulaire');
        }
      } catch (error) {
        console.error('Une erreur est survenue :', error);
      }
    }
  },
},
  };
  </script>

  <style scoped>

h3 {
  text-align: center;
  color: #e217ac ;
}
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

p {
  color : red;
}
  </style>