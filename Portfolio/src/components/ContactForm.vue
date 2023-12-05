<template>
  <!--Error Message-->

   <div id="error-message" style="display: none;" class="mt-4 mx-auto max-w-4xl">        
          <div class="rounded-md bg-red-50 p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-red-400" x-description="Heroicon name: mini/x-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-red-800">Tous les champs doivent être remplis</h3>
              </div>
            </div>
          </div>          
        </div>

  <div class="Areaform">
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
    </div>
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
}

button:hover {
  background: linear-gradient(45deg, #ff0066, #330066);
}


  </style>