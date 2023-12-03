

async function getApifetch() {



  let ApiResponce = await fetch("https://restcountries.com/v3.1/all");

  let jsonData = await ApiResponce.json();

  

  let output = "";


  jsonData.forEach((jsondt) => {

    output += ` <div class='container'>
                   <div class ='card'>
                   <h1 id='title' class='t-name text-center'>  ${jsondt.name.common}
                   <img src='${jsondt.flags.svg}' class='flag' alt='${jsondt.name}'>
                    
                   
                   
                   <div class="card-body car" >
                   <p><span>captital : </span>${jsondt.capital}</p>
                   <p><span>region : </span>${jsondt.region}</p>
                   <p><span>country code : </span>${jsondt.cca3}</p>
                  <a href="#" class="btn btn-primary" onclick="block(${jsondt.latlng[0]},${jsondt.latlng[1]},'${jsondt.name.common}')">Click for Weather</a> 
                  <div id=${jsondt.name.common}></div>


                  </div>
                  </div>
                  </div>
                 
                   `



  });

  document.body.innerHTML = output;

}
getApifetch();





async function block(lat, lon, name) {

  let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fba040504d52b0bec680ef05584572c8`);
  let { main } = await weather.json();

 


  alert(` 
  
            for ${name} 
            Current Humidity is ${main.humidity}
            Current Pressure is ${main.pressure}
            Current Temperature is ${main.temp}


  ` )





}

document.addEventListener("click", (event) => event.preventDefault())

