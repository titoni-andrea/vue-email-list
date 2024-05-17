const { createApp } = Vue

createApp({
    data() {
        return {
           mails: [],
           indirizzo: `https://flynn.boolean.careers/exercises/api/random/mail`,
        }
    },
    methods: {
        getMail() {
            axios.get(this.indirizzo).then((result) => { 

                let datiRisposta = result.data;

                this.mails.push(datiRisposta.response)

            })
        }
    },
    
    mounted() {
        for (let i = 0; i < 10; i++) {
            this.getMail()
        }
    },

}).mount(`#app`)