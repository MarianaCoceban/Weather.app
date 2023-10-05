function displayWeatherData() {
    const cityName = document.getElementById('cityName').value;

    if (cityName === "") {
        alert("Introdu numele localitatiii!");
    } else {
        //prelueaza datele din serviciul care ne ofera prognoza meteo

        const url = "https://api.weatherbit.io/v2.0/forecast/daily?days=5&key=388fe9f0d8944f07a739064241039098&city=" + cityName;

        console.log(url);

        fetch(url).then(function (response) {
            return response.json();
        }).then(function (weatherData) {

            document.querySelector('#top h2').innerHTML = weatherData.city_name + " (" + weatherData.data[0].valid_date + ")";
            document.querySelector('#top .temperature span').innerHTML = weatherData.data[0].temp;
            document.querySelector('#top .wind span').innerHTML = weatherData.data[0].wind_spd;
            document.querySelector('#top .humidity span').innerHTML = weatherData.data[0].rh;

            document.querySelector('#day1 h2').innerHTML = weatherData.data[1].valid_date;
            document.querySelector('#day1 .temperature span').innerHTML = weatherData.data[1].temp;
            document.querySelector('#day1 .wind span').innerHTML = weatherData.data[1].wind_spd;
            document.querySelector('#day1 .humidity span').innerHTML = weatherData.data[1].rh;

            document.querySelector('#day2 h2').innerHTML = weatherData.data[2].valid_date;
            document.querySelector('#day2 .temperature span').innerHTML = weatherData.data[2].temp;
            document.querySelector('#day2 .wind span').innerHTML = weatherData.data[2].wind_spd;
            document.querySelector('#day2 .humidity span').innerHTML = weatherData.data[2].rh;

            document.querySelector('#day3 h2').innerHTML = weatherData.data[3].valid_date;
            document.querySelector('#day3 .temperature span').innerHTML = weatherData.data[3].temp;
            document.querySelector('#day3 .wind span').innerHTML = weatherData.data[3].wind_spd;
            document.querySelector('#day3 .humidity span').innerHTML = weatherData.data[3].rh;

            document.querySelector('#day4 h2').innerHTML = weatherData.data[4].valid_date;
            document.querySelector('#day4 .temperature span').innerHTML = weatherData.data[4].temp;
            document.querySelector('#day4 .wind span').innerHTML = weatherData.data[4].wind_spd;
            document.querySelector('#day4 .humidity span').innerHTML = weatherData.data[4].rh;
        }).catch(function(){
            alert('Localitate inexistenta');
            location.reload();
        })

    }
}
