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