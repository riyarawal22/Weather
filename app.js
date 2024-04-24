const apiKey="d8b28b24c7c9a3f03c593d196e340990";
const apiURL="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const image=document.querySelector(".weather-icon");

let city="Yamunanagar";

const searchCity= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");

async function checkWeather(city){
    const response= await fetch(apiURL + city + `&appid=${apiKey}`);
    var data= await response.json();

    if(response.status==404){
        document.querySelector(".error").style.display="block";
    }

    else{

        document.querySelector(".error").style.display="none";

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed + ` km/h`;

    if(data.weather[0].main=="clouds"){
        image.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        image.src="images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        image.src="images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        image.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        image.src="images/mist.png";
    }
    else if(data.weather[0].main=="Snow"){
        image.src="images/snow.png";
    }
    }


    
}


checkWeather(city);
searchBtn.addEventListener("click",()=>{
    city=searchCity.value;
    checkWeather(city);
})


document.querySelector('.input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // code for enter
    console.log("heh");
    city=searchCity.value;
    checkWeather(city);

    }
});




