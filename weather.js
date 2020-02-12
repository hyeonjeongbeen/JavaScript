//Location 정보를 가저오는 것
//새로고침해도 위치정보 안 물어봄
//위도 경로 읽기

const API_KEY = "f84978278f336e446914524c045734aa";
const COORDS= 'coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude; // 위도
    const longitude = position.coords.longitude;// 경도
    const coordsObj = {
        // latitude: latitude,
        // longitude: longitude
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}

function handleGeoError(){
    console.log('위치를 읽을 수 없습니다');
}

function askForCoords(){ 
    //위치
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
    //navigator : 위치정보,읽기 전용 속성으로 접근 가능
    //geolocation : 객체
    //getCurrentPosition(,) : 첫번째 인자에는 함수
    //(좌표를 가져오는데 성공했을 때 처리하는 함수)
}

function loadCoords(){
    const loadCoords=localStorage.getItem(COORDS);
    if(loadCoords === null){
        askForCoords(); //좌표 요청
    }else{ 
        //getWeather
    }
}
function init(){
    loadCoords();
}

init();