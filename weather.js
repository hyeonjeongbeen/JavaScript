//Location 정보를 가저오는 것
//새로고침해도 위치정보 안 물어봄
//위도 경로 읽기
const weather = document.querySelector(".js-weather");

const API_KEY = "f84978278f336e446914524c045734aa";
const COORDS= 'coords';

function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    //fetch()안에는 가져올 데이터가 들어가면되 
    //앞에 https://넣어줌 따옴표가 아닌 backtick(`)를 사용할 것
    ).then(function(response){
        return (response.json()); 

        //(콘솔) {<pending>}가져온 데이터 처리중
        //json데이터를 가져옴
    })
    .then(function(json){
        const temperature=json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
    // then() 기본적으로 함술ㄹ 호출하지만 데이터가 완전히 들어온 다음 호출

    
}

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
    getWeather(latitude, longitude);
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
       const parsedCoords = JSON.parse(loadCoords);
       getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}
function init(){
    loadCoords();
}

init();