new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alert() {
            alert('alert');
        },
        alterarValor(event) {
            this.valor = event.target.value;
        }
    }
})