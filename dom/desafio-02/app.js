new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert("Alerta exibido!");
        },
        armazenarValor(event) {
            this.valor = event.target.value;
        }
    }
})