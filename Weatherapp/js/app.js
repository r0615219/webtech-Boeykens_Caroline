class Weather
{    
    constructor(options){        
        //set default values
        this.weather = {};
        this.otherHours = {};
        this.location;
        this.latitude;
        this.longitude;
        this.options = 'temperatuur';
        this.apiKey = options.apiKey;
        this.url;
        this.date = new Date();
        
        this.init();
    }

    getLocation(){
        //opties om meerdere bergen te kiezen
        //momenteel : Piz Mezdi, Zwitserland
        var that = this;
        that.location = 'Piz Mezdi';
        that.latitude = 46.474829;
        that.longitude = 9.859080;
        
        that.getOptions();
    }    

    getWeather(position){
        var that = this;
        
        //GET request
        const call = `https://api.darksky.net/forecast/${this.apiKey}/${this.latitude},${this.longitude}?units=ca`;
        console.log(call);
        
        //Make the call
        $.ajax({
          method: "GET",
          url: call,
          dataType: "jsonp"
        }) .done(function(response){
            console.log(response);
            that.weather = response.currently;
            that.otherHours = response.hourly;
            that.updateUI();
        })
    }
    
    getOptions(){
        var that = this;
        
        $('#temperatuur').on('click', function(){
            that.options = 'temperatuur';
            that.getWeather();
        });
        $('#neerslag').on('click', function(){
            that.options = 'neerslag';
            that.getWeather();
        });
        $('#luchtdruk').on('click', function(){
            that.options = 'luchtdruk';
            that.getWeather();
        });
        $('#windsnelheid').on('click', function(){
            that.options = 'windsnelheid';
            that.getWeather();
        });
        that.getWeather();
    }

    updateUI(){
        this.hours = this.date.getHours();
        $('#location').html(this.location);
        $('#currentTime').html(this.hours + ':00');
        for (var i = 1; i < 6; i++) {
            if(this.hours == 24){
                this.hours = 0;
            } else {
                this.hours++;
            }
            $('#hour' + i).html((this.hours) + ':00');
        }
        if(this.options == 'temperatuur'){
            $('#h1').html(`${Math.round(this.weather.temperature)}&deg;C`);
            for (var i = 1; i < 6; i++) { 
                $('#info' + i).html(`${Math.round(this.otherHours.data[i].temperature)}&deg;C`);
            }
        } else if (this.options == 'neerslag'){
            $('#h1').html(`${Math.round((this.weather.humidity)*100)}&#37;`);
            for (var i = 1; i < 6; i++) { 
                $('#info' + i).html(`${Math.round((this.otherHours.data[i].humidity)*100)}&#37;`);
            }
        } else if (this.options == 'luchtdruk'){
            $('#h1').html(`${Math.round(this.weather.pressure)}hPa`);
            for (var i = 1; i < 6; i++) { 
                $('#info' + i).html(`${Math.round(this.otherHours.data[i].pressure)}hPa`);
            }
        } else if (this.options == 'windsnelheid'){
            $('#h1').html(`${Math.round(this.weather.windSpeed)}Bft`);
            for (var i = 1; i < 6; i++) { 
                $('#info' + i).html(`${Math.round(this.otherHours.data[i].windSpeed)}Bft`);
            }
        }
        
    }

    init(){
        this.getLocation();
    }
    
    storeInCache(){
        //localstorage.setItem("weather", response);
    }
    
    getFromCache(){
        //var weather = localstorage.getItem("weather");
    }
    

}


const options = {
    apiKey: '9893261e1d0c9c0e6482fe4cc304df08',
    'el': '#app'
}
const App = new Weather(options);