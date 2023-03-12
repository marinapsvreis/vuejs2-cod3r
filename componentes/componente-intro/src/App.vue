<template>
  <div id="app">
    <h1>Contadores</h1>
    <app-contadores v-for="c in 5" :key="c"/>
    <button>?</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0
    }
  }
}
</script>

<style>

</style>
