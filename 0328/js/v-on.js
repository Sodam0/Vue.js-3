const clicker = Vue.createApp({
    data(){
        return{
            sum: 0
        }
    }
}).mount('#clicker')

const calculator = Vue.createApp({
    data(){
        return{
            n1: 0,
            n2: 0,
            nResult: 0
        }
    }, 
    methods: {
        multiply(n){
            this.nResult *= n;
        },
        nSum(){
            this.nResult = this.n1 + this.n2;
        },
        nMinus(){
            this.nResult = this.n1 - this.n2;
        },
        nMultiply(){
            this.nResult = this.n1 * this.n2;
        },
        nDivision(){
            this.nResult = this.n1 / this.n2;
        }, 
        reset(){
            this.nResult = 1;
        }
    }
}).mount('#calculator')

const sbtn = Vue.createApp({
    data(){
        return{
            clicked: false
        }
    },
    methods: {
        userClick(){
            alert:('감사합니다.');
            this.clicked = true;
        }
    }
}).mount('#sbtn');