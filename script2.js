// 2. Use the rest countries API URL -> https://restcountries.com/v3.1/all  and display all the country flags in the console
//ans

//set up new http request
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();

//Set up a listener where server will listen to our request
xhr.onload = function () {

  //process the request and server will return the data in response
  if (xhr.status >= 200 && xhr.status < 300) {
    //convert raw data into js notation format
    var data = JSON.parse(xhr.response);
    // console.log(data);
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].flags.png);
    }

  } else {
    // you should print the error
    console.log("Data is not available");
  }
  
}


// 3. Use the same rest countries and print all countries names, regions, sub-region and populations
//ans

//set up new http request
var xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();

//set up a listener where server will listen to ou request
xhr.onload = function(){
    //process the request and server will return the data in response
    if(xhr.status>=200 && xhr.status<300){
        //convert raw into js notation format 
        var data = JSON.parse(xhr.response);
        // console.log(data);
        for(var i=0; i<data.length; i++){
            console.log("Name:"+data[i].name.official);
            console.log("Region:"+data[i].region);
            console.log("Subregion:"+data[i].subregion);
            console.log("population:"+data[i].population);

        }
    } else{
        // You should print the error
        console.log("Data is not available");
    }
}
