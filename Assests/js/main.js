
const url = 'https://api.openweathermap.org/data/2.5/'
const key = '302c44f8156935d74f25d9cf2f1b1fac'
const setQuery = (e) => {
    if(e.keyCode == '13')
    getResult(searchBar.value)
}
const backgroundElem = ``;
const getResult = (ctiyName) => {
   let query = `${url}weather?q=${ctiyName}&appid=${key}&units=metric&lang=tr`
   fetch(query)
   .then(weather => {
    return weather.json()
   })
   .then(displayResult)
}

const displayResult = (result) => {
let ctiy = document.querySelector('.konum')

ctiy.innerHTML = `${result.name}`, `${result.sys.countary}`

let temp = document.querySelector('.derece')
temp.innerHTML = `${result.main.temp.toFixed()}°C`

let desc = document.querySelector('.durum')
desc.innerHTML = result.weather[0].description,
console.log(result.weather[0].description)

switch(result.weather[0].description)
{
    case "açık":
        document.getElementById("backgroundElem").setAttribute("src", "../Assests/img/gunes.mp4")
        break;
    case "kapalı":
        document.getElementById("backgroundElem").setAttribute("src", "../Assests/img/yagmur.mp4")
        break;
    case "sisli":
        document.getElementById("backgroundElem").setAttribute("src", "../Assests/img/sis.mp4")
        break;
    case "parçalı az bulutlu":
        document.getElementById("backgroundElem").setAttribute("src", "../Assests/img/bulut.mp4")
     break;
     case "parçalı bulutlu":
        document.getElementById("backgroundElem").setAttribute("src", "../Assests/img/bulut.mp4")
     break;   
     case "az bulutlu":
        document.getElementById("backgroundElem").setAttribute("src", "../Assests/img/bulut.mp4")
     break;
     case "hafif kar yağışlı":
        document.getElementById("backgroundElem").setAttribute("src", "../Assests/img/kar.mp4")
     break;
     
}

}

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress', setQuery)  


