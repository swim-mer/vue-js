// include Math library
const min = 0;
const max = 500;
const num = (Math.floor(Math.random() * (max - min + 1)) + min).toString();
const imageData = 'https://picsum.photos/id/' + num + '/info';

const app = Vue.createApp({
    data() {
        return {
            picture: 'https://picsum.photos/id/' + num + '/800/600',
            info: [],
        }
    },
    mounted() {
        axios.get(imageData).then(response => {
            this.info = response.data
        })
    },
    methods: {
        async getPic() {
            const num = (Math.floor(Math.random() * (max - min + 1)) + min).toString();
            const imageData = 'https://picsum.photos/id/' + num + '/info';

            this.picture = 'https://picsum.photos/id/' + num + '/800/600'
            axios.get(imageData).then(response => {
                this.info = response.data
            })
        },
        getNum() {
            this.num = (Math.floor(Math.random() * (max - min + 1)) + min).toString();
        }
    },
})

app.mount('#app')