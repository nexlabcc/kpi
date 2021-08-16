const app = Vue.createApp({
    data() {
        return {
            menu: [],
            name: ''
        }
    },
    // methods: {
    //     async createServer() {
    //         const data = {
    //             name: this.name,
    //             status: 'created'
    //         }
    //         const res = await fetch('/api/server', {
    //             'method': 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         })
    //         this.name = ''
    //         const newServer = await res.json()
    //         //console.log(newServer)
    //         this.servers.push(newServer)
    //     },
    //     async remove(id) {
    //         await fetch(`/api/server/${id}`, { method: 'DELETE' })
    //         this.servers = this.servers.filter(s => s.id !== id)
    //     },
    //     async login() {
    //         const data = {
    //             login: this.dataLogin,
    //             password: this.dataPassword,
    //         }
    //         const res = await fetch('/api/login', {
    //             'method': 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         })
    //         this.dataLogin = ''
    //         this.dataPassword = ''
    //         this.response = await res.json()
    //         console.log(this.response)
    //     }
    // },
    async mounted() {
        const res = await fetch('/api/main/menu')
        this.menu = await res.json()
    }
})

app.config.compilerOptions.delimiters = ['[[', ']]']

app.mount('#app')