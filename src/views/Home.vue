<template>
    <div>
      <div class="menu-container">
        <Header :class="{ 'sticky': isSticky, 'sticky-header': isSticky }"/>
           <div class="title-container">
            <h1>Pichonneau Theo</h1>
            <h2>Developpeur web et web mobile</h2>
          </div>
        <Navigation :class="{ 'sticky': isSticky, 'sticky-navigation': isSticky }"/>
      </div>
      <div class="native-galaxy-separator"></div>
      <div>
        <section id="introduction">
          <div>
          <Introduction/> 
          </div>
            <div class="electric-separator"></div>
        </section>
          <div>
          <Projects projectTitle="CV" imageSrc="/src/assets/images/CV.PNG"/>
          </div>
          <div class="electric-separator"></div>
          <ContactForm/>
          <div class="native-galaxy-separator"></div>
          <Footer/> 
      </div>
    </div>
    <!--Bug visuel sur le séparateur entre projet et contact. La ligne apparait par dessus l'ouverture d'un modal -->
  </template>

  <script>
import Header from "@/components/Header.vue";
import Navigation from "@/components/Navigation.vue";
import Introduction from "@/components/Introduction.vue";
import Projects from "@/components/Projects.vue";
import ContactForm from "@/components/ContactForm.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Navigation,
    Introduction,
    Projects,
    ContactForm,
    Footer,
  },
  data() {
    return {
      isSticky: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    scrollToBottom() {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    },
    handleScroll() {
      this.isSticky = window.scrollY > 0;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
  .menu-container {
      background-image: url("/src/assets/Images/Ciel-étoilés.jpg"); 
      background-size: cover;
  }

  h1, h2 {
    font-family: 'MoriaCitadel', sans-serif;
    text-align: center;
    color: #ffd700;
    text-shadow: 3px 3px 1px black;

  }

  .title-container {
  padding-top: 10px;
  padding-bottom: 20px;
  margin-top: 0em;
  margin-bottom: -1em;
}

.electric-separator {
    height: 6px;
    width: 100%;
    margin: 60px 0;

    background: linear-gradient(90deg,
        rgba(0, 120, 255, 0) 0%,
        rgba(0, 150, 255, 1) 30%,
        rgba(100, 220, 255, 1) 50%,
        rgba(0, 150, 255, 1) 70%,
        rgba(0, 120, 255, 0) 100%
    );

    filter: drop-shadow(0 0 10px rgba(0, 150, 255, 1))
            drop-shadow(0 0 25px rgba(0, 200, 255, 0.9));

    animation: electricPulse 2.5s ease-in-out infinite;
}

@keyframes electricPulse {
    0% {
        filter: drop-shadow(0 0 6px rgba(0, 140, 255, 0.8))
                drop-shadow(0 0 12px rgba(0, 200, 255, 0.5));
        opacity: 0.7;
    }
    50% {
        filter: drop-shadow(0 0 20px rgba(100, 240, 255, 1))
                drop-shadow(0 0 35px rgba(0, 200, 255, 1));
        opacity: 1;
    }
    100% {
        filter: drop-shadow(0 0 6px rgba(0, 140, 255, 0.8))
                drop-shadow(0 0 12px rgba(0, 200, 255, 0.5));
        opacity: 0.7;
    }
}

.native-galaxy-separator {
    height: 6px;
    width: 100%;

    background: linear-gradient(90deg,
        rgba(6, 13, 31, 0) 0%,              /* noir bleu profond */
        rgba(25, 37, 58, 0.7) 15%,         /* bleu nuit */
        rgba(47, 60, 84, 1) 30%,           /* bleu froid intense */
        rgba(187, 151, 164, 1) 50%,        /* rose cosmique 🌸 */
        rgba(47, 60, 84, 1) 70%,           /* retour bleu froid */
        rgba(25, 37, 58, 0.7) 85%,         /* bleu nuit à nouveau */
        rgba(6, 13, 31, 0) 100%            /* fondu spatial */
    );

    filter:
        drop-shadow(0 0 10px rgba(187,151,164,0.7))   /* glow rose doux */
        drop-shadow(0 0 20px rgba(47,60,84,0.9));      /* glow bleu froid */

    animation: galaxyNativePulse 4s ease-in-out infinite;
}

@keyframes galaxyNativePulse {
    0% {
        filter:
            drop-shadow(0 0 6px rgba(187,151,164,0.5))
            drop-shadow(0 0 12px rgba(47,60,84,0.5));
        opacity: 0.7;
    }
    50% {
        filter:
            drop-shadow(0 0 18px rgba(187,151,164,0.9))
            drop-shadow(0 0 28px rgba(91,93,122,0.8));
        opacity: 1;
    }
    100% {
        filter:
            drop-shadow(0 0 6px rgba(187,151,164,0.5))
            drop-shadow(0 0 12px rgba(47,60,84,0.5));
        opacity: 0.7;
    }
}

</style>