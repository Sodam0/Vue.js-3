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

const ckMouse = Vue.createApp({
    data(){
        return{
            text: '마우스로 클릭하세요.'
        }
    },
    methods: {
        doThis(){
            this.text = '마우스 On!';
        },
        doThat(){
            this.text = '마우스 Off.'
        }
    }
}).mount('#ckMouse');

const onMouse = Vue.createApp({
    data(){
        return{
            doText: '마우스로 누르세요.',
            doBg: '#eee',
            doColor: '#000'
        }
    },
    methods: {
        doIn(){
            this.doText = '마우스를 올리세요.';
            this.doBg = 'cadetblue';
            this.doColor = 'white';
        },
        doOut(){
            this.doText = '마우스가 화면 밖을 나갔어요.';
            this.doBg = 'skyblue';
            this. doColor = 'black'
        }
    }
}).mount('#onMouse');