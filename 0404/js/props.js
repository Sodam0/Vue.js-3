const month = {april: '4월', may: '5월', june: '6월'}
const schedule = {
    july: '7월',
    august: '8월',
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
    ],
    julys: [
        {name: '07.11', content:'초복'},
        {name: '07.17', content:'제헌절'},
        {name: '07.21', content:'중복'},
        {name: '07.23', content:'대서'}
    ],
    augusts: [
        {name: '08.01', content:'유두절'},
        {name: '08.10', content:'말복'},
        {name: '08.15', content:'광복절'},
        {name: '08.22', content:'칠석'}
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

const calendar2 = Vue.createApp({
    data(){
        return schedule;
    }
});
calendar2.component('july-props', {
    props: ['julysub'],
    template:`
        <li>{{julysub.name}} : {{julysub.content}}</li>
    `
});
calendar2.component('august-props', {
    props: ['augustsub'],
    template:`
        <li>{{augustsub.name}} : {{augustsub.content}}</li>
    `
});
calendar2.mount('#calendar2');