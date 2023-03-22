const link = Vue.createApp({
    data(){
        return{
            url1:'http://sodam0.dothome.co.kr/dam/dam.html',
            url2: 'https://github.com/Sodam0',
            newTab: '_blank'
        }
    }
}).mount('#link');

const link2 = Vue.createApp({
    data(){
        return{
            newTab: '_blank',
            websites: [
                {name: '포트폴리오', url: 'http://sodam0.dothome.co.kr/dam/dam.html'},
                {name: '깃허브', url: 'https://github.com/Sodam0'}
            ]
        }
    }
}).mount('#link2');

const deco = Vue.createApp({
    data(){
        return{
            salmon: 'color:salmon',
            notice: 'red',
            light: '#eee'

        }
    }
}).mount('#deco');