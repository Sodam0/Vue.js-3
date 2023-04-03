const month = {april: '4월', may: '5월', june: '6월'}
const schedule = {
    aprils: [
        {name: '04.05', content:'식목일'},
        {name: '04.19', content:'4.19 혁명'},
        {name: '04.20', content:'장애인의 날'}
    ],
    mays: [
        {name: '05.01', content:'근로자의 날'},
        {name: '05.05', content:'어린이날'},
        {name: '05.08', content:'어버이날'},
        {name: '05.15', content:'스승의 날 / 성년의 날'},
        {name: '05.27', content:'부처님 오신 날'}
    ],
    junes: [
        {name: '06.06', content:'현충일'},
        {name: '06.22', content:'단오'},
        {name: '06.25', content:'6.25 전쟁일'}
    ]
};
const calendar = Vue.createApp({
    data(){
        return{
            april: month.april,
            may: month.may,
            june: month.june
        }
    }
});
calendar.component('april', {
    data(){
        return schedule;
    },
    template:`
    <ul>
        <li v-for="s in aprils">{{s.name}} - {{s.content}}</li>
    </ul>
    `
});
calendar.component('may', {
    data(){
        return schedule;
    },
    template:`
    <ul>
        <li v-for="s in mays">{{s.name}} - {{s.content}}</li>
    </ul>
    `
});
calendar.component('june', {
    data(){
        return schedule;
    },
    template:`
    <ul>
        <li v-for="s in junes">{{s.name}} - {{s.content}}</li>
    </ul>
    `
});
calendar.mount('#calendar');