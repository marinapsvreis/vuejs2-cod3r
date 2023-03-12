<template>
  <div class="contadores">
    <app-contador></app-contador>
  </div>
</template>

<script>
import Contador from './Contador.vue'
export default {
    components: {
        'app-contador': Contador
    }
}
</script>

<style>

</style>