<template>
  <div id="home">
    <div id="connection">
      <connexion></connexion>
    </div>
  </div>
</template>

<script>
  import Connexion from "../components/Connexion.vue";
  export default {
    name: 'home',
    components: {
      Connexion
    }
  }
</script>

<style>
  html {
    height: 100%;
  }

  body {
    height: 100%;
    background-color: lightblue;
  }

  #home {
    height: 100%;
    background-color: white;
    display: grid;
    grid-template-columns: 20% 60% 20%;
    grid-template-rows: 20% 60% 20%;
  }

  #connection {
    grid-column: 2;
    grid-row: 2;
    justify-content: center;
  }

</style>
