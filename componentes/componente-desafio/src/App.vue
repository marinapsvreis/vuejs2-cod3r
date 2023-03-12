<template>
  <v-app>
    <menu-lateral></menu-lateral>

    <toolbar></toolbar>

    <carrosel></carrosel>

    <barra-inferior></barra-inferior>
  </v-app>
</template>

<script>
import Carrossel from './components/Carrossel.vue';
import MenuLateral from './components/MenuLateral.vue';
import Toolbar from './components/Toolbar.vue';
import BarraInferior from './components/BarraInferior.vue';

export default {
  data() {
    return {}
  },
  components: {
    'menu-lateral': MenuLateral,
    'carrosel': Carrossel,
    'toolbar': Toolbar,
    'barra-inferior': BarraInferior,
  }
}
</script>
