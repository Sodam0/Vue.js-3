const memo = Vue.createApp({
    data(){
        return{
            diary: ''
        }
    }
}).mount('#memo');

const box = Vue.createApp({
    data(){
        return{
            ck:[]
        }
    }
}).mount('#box');

const btn = Vue.createApp({
    data(){
        return{
            myAgree: false
        }
    }
}).mount('#btn');

const feel = Vue.createApp({
    data(){
        return{
            image:"images/image01.png"
        }
    }
}).mount('#feel');