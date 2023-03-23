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
            notice: 'salmon',
            light: '#eee'

        }
    }
}).mount('#deco');

const deco2 = Vue.createApp({
    data(){
        return{
            classDot: 'dot',
            classDash: 'dash',
            classRadius: 'radius',
            classWidth: 'width'
        }
    }
}).mount('#deco2');

const btn = Vue.createApp({
    data(){
        return{
            line: 'dot',
            check: true
        }
    },
    methods: {
        ck(){
            if(this.check == true){
                this.line = 'dash';
                this.check = false
            }else{
                this.line = 'dot';
                this.check = true;
            }
        }
    }
}).mount('#btn');

const btn2 = Vue.createApp({
    data(){
        return{
            isRadius: true,
        }
    },
    methods: {
        cor(){
            this.isRadius = !this.isRadius
        }
    }
}).mount('#btn2');