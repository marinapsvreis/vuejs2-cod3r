new Vue({
  el: '#desafio',
  data: {
    nome: 'Marina',
    idade: 30,
    imagem: 'https://img1.ak.crunchyroll.com/i/spire3/e0324aa7bd1bf1de6524f63e897cc2591659371173_main.png'
  },
  methods: {
    sorteio: function () {
      return Math.random();
    }
  }
})