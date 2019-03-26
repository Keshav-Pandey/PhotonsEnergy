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
      });
}