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
    }
})

app.mount('#app')