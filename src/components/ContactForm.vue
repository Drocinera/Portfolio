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
        <p v-if="formSent">Le message a bien été envoyée </p>
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
  font-size: 1.6em;
  color: #b8d8ff;
  text-shadow: 0 0 8px #4db8ff;
  margin-bottom: 1em;
}

/* Conteneur global */
.Areaform {
  display: flex;
  justify-content: center;
  padding: 0em 1em;
}

/* Formulaire façon "verre magique" */
.formulaire {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5em;
  width: 100%;
  max-width: 650px;
  padding: 4em;
  
  background: rgba(15, 15, 35, 0.55); /* effet verre sombre */
  border: 1px solid rgba(100, 150, 255, 0.45);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 25px rgba(100, 150, 255, 0.3);

  border-radius: 1.2em;
}

/* Pour forcer certains champs à s’étendre sur 2 colonnes */
.form-group[style*="grid-column: span 2"] {
  grid-column: span 2 !important;
}

/* Style des champs */
.form-group label {
  color: #cde6ff;
  font-weight: 600;
  text-shadow: 0 0 4px #2e7af0;
  margin-bottom: 0.3em;
  display: block;
}

input,
textarea {
  width: 100%;
  padding: 0.8em 1em;
  border-radius: 10px;
  border: 1px solid rgba(140, 180, 255, 0.4);
  background: rgba(20, 20, 45, 0.6);
  color: #e8f4ff;
  font-size: 1em;
  
  transition: 0.2s ease-in-out;
}

input:focus,
textarea:focus {
  outline: none;
  box-shadow: 0 0 10px #5ab8ff;
  border-color: #5ab8ff;
  background: rgba(30, 30, 60, 0.7);
}

/* Bouton magique */
button {
  grid-column: span 2;
  margin-top: 1em;
  padding: 0.8em 1.6em;

  border: none;
  border-radius: 12px;

  background: linear-gradient(135deg, #4d5fff, #6f00ff);
  color: white;
  font-size: 1.2em;
  cursor: pointer;

  box-shadow: 0 0 12px #6f00ff;
  transition: 0.3s;
}

button:hover {
  background: linear-gradient(135deg, #6a7eff, #9b00ff);
  box-shadow: 0 0 18px #9b00ff;
}

/* Message envoyé */
p {
  grid-column: span 2;
  margin-top: 0.5em;
  text-align: center;
  color: #7affb5;
  font-weight: bold;
  text-shadow: 0 0 8px #00ffaa;
}


/* 📱 Responsive : 1 colonne sur mobile */
@media (max-width: 550px) {
  .formulaire {
    grid-template-columns: 1fr;
  }
  .form-group[style*="grid-column: span 2"] {
    grid-column: span 1 !important;
  }
  button {
    grid-column: span 1;
  }
}

  </style>