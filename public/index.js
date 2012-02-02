Ext.regApplication ({
  name: 'app',
  launch: function() {
    app.online = false;
    app.geolookup = "http://maps.googleapis.com/maps/api/geocode/json?sensor=true&latlng=";
    app.geocoder =  new google.maps.Geocoder();
    isOnline();
    app.launched = true;
    app.mainLaunch();
  },
  mainLaunch: function() {
    if (!this.launched) {return;}
    this.views.viewport = new this.views.Viewport();
  }
});

var isOnline = function() {
  var request = new XMLHttpRequest();
  var params = "?rand=" + Math.random();
  request.open('POST', "//" + window.location.hostname + ":" + window.location.port + "/", true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  request.onreadystatechange = function (aEvt) {
    if (request.readyState == 4) {
      if (request.status == 200)
      {
        app.online = true;
      }
      else
      {
        app.online = false;
        console.log(request);
      }
    }
  };
  request.send(params);
};
