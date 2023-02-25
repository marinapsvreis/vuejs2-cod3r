<template>
  <div id="app">
    {{ titulo }}
    <button @click="titulo += '#'">Add #</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      titulo: "Testando o título"
    }
  },
}
</script>

<style>

#app {
  background-color: chocolate;
  color: #fff;
}

</style>
