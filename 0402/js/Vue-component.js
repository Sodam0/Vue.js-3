const com1 = Vue.createApp({});
com1.component('globalComp', {
    template: '<div><p> Hel1o, World! </p></div>'
});
com1.mount('#com1');

const com2 = Vue.createApp({
    components: {
        localComp: {
            template: '<p>N1ce to Meet y0u.</p>'
        }
    }
}).mount('#com2');

const number = Vue.createApp({
    data(){
        return{
            num1: 100,
            num2: 200
        }
    }
});
number.component('mycomp1', {
    template: '<p>첫번째 숫자 : {{compAtt1}}</p>',
    props: ['compAtt1']
});
number.component('mycomp2', {
    template: '<p>두번째 숫자 : {{compAtt2}}</p>',
    props: ['compAtt2']
});
number.mount('#number');

const Web = {html: 'HTML', css: 'CSS'}
const com3 = Vue.createApp({
    data(){
        return{
            html: Web.html,
            css: Web.css
        }
    }
});
com3.mount('#com3');