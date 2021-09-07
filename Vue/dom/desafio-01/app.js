new Vue({
    el: '#desafio',
    data: {
        nome: 'Lucas',
        idade: 21,
        imagem: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/F403/production/_109476426_jheison3.png'
    },
    methods: {
        aleatorio() {
            return Math.random()
        }
    }
})