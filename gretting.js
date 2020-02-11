 const form = document.querySelector(".js-form");
 const input = form.querySelector("input");
 const greeting = document.querySelector(".js-greetings");

 const USER_LS = "currentUser";
 const SHOWING_CN = "showing";


function saveName(text) { //입력받은 값을 저장
    localStorage.setItem(USER_LS, text);
    // localStorage.setItem : 지정된 로컬 스토리지 항목의 값을 설정하십시오.
    //setItem : 지정된 스토리지 오브젝트 항복의 값을 설정
    //setItem : 될 수 있는 저장 개체에 속하는 로컬 스토리지의 개체
}

function handleSubmit(event){
    event.preventDefault(); //기본동작을 막음
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
    //원래 기본 동작이 값을 입력하고 엔터를 치면 새로고침 됨
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
    //form이 submit라는 이벤트가 발생하면 handleSubmit()함수를 실행
}

 function paintGreeting(text) {
     form.classList.remove(SHOWING_CN);
     greeting.classList.add(SHOWING_CN);
     greeting.innerText = `Hello ${text}`;
 }

 function loadName() { //키,값이 있는지 확인하는 부분
     const currentUser = localStorage.getItem(USER_LS);
     // 값을 저장하는 것이 아님
     if(currentUser === null) {
         askForName();
        //she is not
     } else {
        // she is
        paintGreeting(currentUser);
     }
 }

function init() {
    loadName();
}

init();