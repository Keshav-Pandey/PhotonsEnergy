function getTemp(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "/weather",
        "method": "GET",
        "headers": {
          "cache-control": "no-cache"
        }
      }
      $.ajax(settings).done(function (response) {
        console.log(response);
        // if(document.getElementById("far").checked)
        //   document.getElementById("outdoorTemperature").value = JSON.parse(response)[0]["Temperature"]["Imperial"].Value;
        // else
        //   document.getElementById("outdoorTemperature").value = JSON.parse(response)[0]["Temperature"]["Metric"].Value;
        document.getElementById("outdoorTemperature").value = "26";
      });
}