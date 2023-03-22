const list = Vue.createApp({
  data(){
    return{
        books: [
            {num: 1, title: "이방인", writer: "알베르 카뮈", year: "1942년", publisher: "민음사", price: "9,000원"},
            {num: 2, title: "하늘과 바람과 별과 시", writer: "윤동주", year: "1955년", publisher: "정음사", price: "10,600원"},
            {num: 3, title: "오만과 편견", writer: "제인 오스틴", year: "1894년", publisher: "더스토리", price: "15,120원"},
            {num: 4, title: "데미안", writer: "헤르만 헤세", year: "1919년", publisher: "문학동네", price: "7,200원"},
            {num: 5, title: "총 균 쇠", writer: "제레드 다이아몬드", year: "1998년", publisher: "문학사상", price: "25,200원"},
            {num: 6, title: "죄와 벌", writer: "표도르 M. 도스토옙스키", year: "1866년", publisher: "푸른숲", price: "11,700원"}
        ]
    }
  }  
}).mount('#list');