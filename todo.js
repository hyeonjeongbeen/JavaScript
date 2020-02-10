const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function pintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "삭제";
    const span = document.createElement("span");
    span.innerText = text; //text는 submit function에서 온 값
    li.appendChild(span);
    //appendchiod : 특정 부모 노드의 자식 노드 리스트 중 마지막
    // 자식으로 붙임
    li.appendChild(delBtn);
    // 순서 바꾸면 버튼이랑 텍스트랑 위치 바뀜
    toDoList.appendChild(li);
}

function handleSubmit(event){
    event.preventDefault(); //기본동작을 막음
    const currentValue = toDoInput.value;
    pintToDo(currentValue);
    toDoInput.value ="";
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){

    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();