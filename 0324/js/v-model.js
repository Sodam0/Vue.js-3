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