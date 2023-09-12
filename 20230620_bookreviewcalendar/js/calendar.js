var now = new Date();
var year = new.getFullYear();
var month = now.getMonth() + 1;


var thisMonthLastDate;

const setCalendar = (year, month) => {
    // 현재 월 제목에 표시하자
    // html -> js

    // =`${month}월`;
    const month = 

   
    // 해당 월의 마지막 날짜
    // 9월의 마지막 날짜
    var thisMonthLastDate = new Date(year, month + 1 -1, 0).getDate(); // 2023년 9월 전날: 8월 31일
    
    
    // 해당 월의 1월은 무슨요일?
    var thisMontFirstDay = new Date(year, month -1, 1).getDay(); // 0:Sun, 1: Mon, 2: Tue, 3: Wen, 4: Thu, 5: Fri, 6: Sat 

    console.log(thisMonthLastDate, thisMontFirstDay);
    
    // - 공휴일 빨간색
}
setCalendar(year, month);


