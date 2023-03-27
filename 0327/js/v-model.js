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

const style = Vue.createApp({
    data(){
        return{
            myColor: []
        }
    }
}).mount('#style');

const sec1 = Vue.createApp({
    data(){
        return{
            userAnimal: '',
            options: [
                {text:'강아지', value:'역시 북실북실한 털꼬리 최고~!'},
                {text:'고양이', value:'말랑따끈해서 좋다!'},
                {text:'햄스터', value:'통몸감자같지만 작은 발이 귀엽다!'},
                {text:'앵무새', value:'너무 똑똑하고 얄미워서 귀여워..'},
                {text:'뱀', value:'동글동글한 머리로 혀를 귀엽게 날름거린다..'},
            ]
        }
    }
}).mount('#sec1');

const math = Vue.createApp({
    data(){
        return{
            myNumber: 0
        }
    }
}).mount('#math');