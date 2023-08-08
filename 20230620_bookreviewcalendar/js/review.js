// URL book에 해당하는 parameter 값 읽어오자(string)
let url = new URL(location.href);
let book = url.searchParams.get("book");
console.log(`book: ${book} type:${typeof book}`); //"3" string
//book이 null이면 책장으로 가자
if(book === null){
    location.href = "index.html";
}

// book 값(string) -> bookId(number) 변환하자
let bookId = parseInt(book);
console.log(`book: ${book} type:${typeof bookId}`);

// books 를 돌면서 bookId(number)와 같은 id값의 책을 가져오자
let bookData;
for(let bookOne of books) {
    if(bookId === bookOne.id){
        bookData = bookOne;
        break;
    }
}

// 제목 보여주기
let title = bookData.title;
console.log(title);
let author = bookData.author;
let publisher = bookData.publisher;
let bookImage = bookData.img;
console.log(title, author, publisher, bookImage);

const bookImageDiv = document.getElementsByClassName('book-image')[0];
bookImageDiv.innerHTML = `<img src = "${bookImage}"/>`;

// HTML 요소 -> js 변수
const titleDiv = document.getElementsByClassName('title')[1];
// js 변수.innerHTML
titleDiv.innerHTML = title;

const authorDiv = document.getElementsByClassName('author')[1];
authorDiv.innerHTML = author;
const publisherDiv = document.getElementsByClassName('publisher')[1];
publisherDiv.innerHTML = publisher;

let now = new Date();
let year = now.getFullYear();
let month = now.getMonth()+1;
let date = now.getDate();

let dateString = `${year}년 ${month}월 ${date}일`;
// HTML -> js
const readDateDiv = document.getElementsByClassName("read-date")[1];
// 오늘의 날짜 값 넣기
readDateDiv.innerHTML = dateString;
