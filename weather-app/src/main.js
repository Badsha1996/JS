const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apiKey = "b7807a2e449e0e4d971f8e6d80312afb"

// make a function
async function weather(city) { // api fetching = api url + api key
    try { // Use template literals to construct the complete API URL
        const url = `${apiUrl}${city}&appid=${apiKey}`; // or res = await fetch(apiUrl + city + `&appid=${apiKey}`)
        const res = await fetch(url);

        // Check if the response status is OK (200)
        if (res.status === 200) {
            const data = await res.json();
            console.log(data)
            // fething all HTML element
            document.querySelector(".city").innerHTML = data.name
            document.querySelector(".temp").innerHTML = data.main.temp + " °C"
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr"
            document.querySelector(".humidity").innerHTML = data.main.humidity+ "%"
            
            if(data.weather[0].main=="Clouds"){
                document.querySelector(".rain").style.display = "none"
                document.querySelector(".mist").style.display = "none"
                document.querySelector(".clear").style.display = "none"
                document.querySelector(".clouds").style.display = "block"
            }else if(data.weather[0].main=="Rain"){
                document.querySelector(".rain").style.display = "block"
                document.querySelector(".mist").style.display = "none"
                document.querySelector(".clear").style.display = "none"
                document.querySelector(".clouds").style.display = "none"
            }else if(data.weather[0].main=="Drizzle"){
                document.querySelector(".rain").style.display = "none"
                document.querySelector(".mist").style.display = "block"
                document.querySelector(".clear").style.display = "none"
                document.querySelector(".clouds").style.display = "none"
            }else if(data.weather[0].main=="Mist"){
                document.querySelector(".rain").style.display = "none"
                document.querySelector(".mist").style.display = "block"
                document.querySelector(".clear").style.display = "none"
                document.querySelector(".clouds").style.display = "none"
            }else if(data.weather[0].main=="Clear"){
                document.querySelector(".rain").style.display = "none"
                document.querySelector(".mist").style.display = "none"
                document.querySelector(".clear").style.display = "block"
                document.querySelector(".clouds").style.display = "none"
            }else{
                document.querySelector(".rain").style.display = "none"
                document.querySelector(".mist").style.display = "none"
                document.querySelector(".clear").style.display = "block"
                document.querySelector(".clouds").style.display = "none"
            }

            document.querySelector(".info-card").style.display = "flex"
        } else { // non-OK responses
            console.error("API Error:", res.status);
            document.querySelector(".info-card").style.display = "none"
        }
    } catch (error) {
        console.error("Fetch Error:", error);
    }


}

const searchBox = document.querySelector(".search-card .search-box")
const searchBtn     = document.querySelector(".search-card button")

searchBtn.addEventListener("click", ()=>{
        weather(searchBox.value)
})
