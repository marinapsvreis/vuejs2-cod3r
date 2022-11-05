new Vue({
	el: '#desafio',
	data: {
		classeCSS: 'encolher',
		classeInformada: '',
		classeInformada2: '',
		mensagem: 'Agora eu tenho classe CSS :)',
		cor: '',
		cor2: 'blue',
		width: '0',
		azul: false
	},
	watch: {
		progressoBarra() {
			setInterval(() => {
				if (this.barraProgresso < 500) {
					this.barraProgresso += 25;
				}
			}, 2000);
		}
	},
	computed: {
		meuEstilo() {
			return {
				backgroundColor: this.cor,
			}
		},
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classeCSS = this.classeCSS == 'encolher' ?
					this.classeCSS = 'destaque'
					: this.classeCSS = 'encolher'
			}, 1000);
		},
		iniciarProgresso() {
			let valor = 0;
			const temporizador = setInterval(() => {
				valor += 5;
				this.width = `${valor}%`
				if (valor == 100) {
					clearInterval(temporizador);
				}
			}, 500);
		},
		setClasse(event) {
			if (event.target.value == 'true') {
				this.azul = true;
			} else if (event.target.value == 'false') {
				this.azul = false;
			}
		}
	}
})
