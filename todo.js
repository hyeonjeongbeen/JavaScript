const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = []; //할 일이 많아 질 수 있기 때문에 배열로 만들기

function saveToDos() {
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
    //JSON.stringify는 자바스크립트 오브젝트를 스트링으로 바꿔줌
}

// function filterFn(toDo){
//     return toDo.id ===1;
// }

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();

    //filter : array의 모든 아이템을 통해 함수를 실행
    //true인 아이템들만 가지고 새로운 array를 만듬
    //cleanToDos와filter가 하는 일은 filterFn가 체크가 된
    //아이템들의 array를 주는 것
    
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "삭제";
    delBtn.addEventListener("click",deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length +1;
    span.innerText = text; //text는 submit function에서 온 값
    li.appendChild(span);
    //appendchiod : 특정 부모 노드의 자식 노드 리스트 중 마지막
    // 자식으로 붙임
    li.id = newId;
    li.appendChild(delBtn);
    // 순서 바꾸면 버튼이랑 텍스트랑 위치 바뀜
    toDoList.appendChild(li);
    const toDoObj ={
        text : text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
    // 순서가 반대로 되면 toDos에 비어 있어서 저장이 안됨
    //그래서 toDos 안에 집어넣은 이후에 호출
}

function handleSubmit(event){
    event.preventDefault(); //기본동작을 막음
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value ="";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
        //JSON : 데이터를 전달할 때, 자바스크립트가 그걸 다룰 수 있도록 오브젝트로
        //바꿔주는 기능 (오브젝트->스트링)(스트링->오브젝트)

        //forEach : array에 담겨있는 것들 각각에 한번씩 함수를 실행
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();