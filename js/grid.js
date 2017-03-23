var App = App || {};

App.setup = function() {
  this.gridSize        = 10;
  this.coordinates     = [];
  this.noEvents        = ((Math.random() * (200 - 5)) + 5).toFixed(0);
  this.eventsArray     = [];
  this.makeGrid();
  $('form').submit(this.getUserCoordinates.bind(this));
};

App.makeGrid = function () {
  var x,y;
  for (y = this.gridSize; y >= -this.gridSize; y--) {
    for (x = -this.gridSize; x <= this.gridSize; x++) {
      var square = {
        x: x,
        y: y,
        taken: false
      };
      this.coordinates.push(square);
    }
  }
  this.makeEvents();
};

App.makeEvents = function () {
  for (var i = 0; i <= this.noEvents; i++) {
    var j = (Math.random() * 440).toFixed(0);
    if (this.coordinates[j].taken === false ) {
      var event = {
        number: [j][0],
        x: this.coordinates[j].x,
        y: this.coordinates[j].y,
        ticketPrice: (Math.random() * 100).toFixed(2),
        noTickets: ((Math.random() * (100 - 1)) + 1).toFixed(0)
      };
      this.coordinates[j].taken = true;
      this.eventsArray.push(event);
    } else {
      if(this.noEvents <= 5) {
        this.noEvents++;
      }
    }
  }
};

App.getUserCoordinates = function (e) {
  if (e) e.preventDefault();
  $('.results').html('');
  this.userCoordinates = $('.userCo-ordinates').val().replace(/ /g,'');
  this.userX = this.userCoordinates.substr(0, this.userCoordinates.indexOf(','));
  this.userY = this.userCoordinates.substr(this.userCoordinates.indexOf(',') + 1);
  this.checkUserCoordinates();
};

App.checkUserCoordinates = function() {
  if (this.userX >= -(this.gridSize) && this.userX <= this.gridSize && this.userY >= -(this.gridSize) && this.userY <= this.gridSize) {
    this.distance();
  } else {
    $('.results').append(`
      <div class="card">
        <p>Oh no! Your co-ordinates are outside our grid!</p>
        <p>Make sure both your x and y co-ordinates are with the range -10 and 10.</p>
      </div>`);
  }
};

App.distance = function() {
  for (var i = 0; i < this.eventsArray.length; i++) {
    var xDistance = this.calcDistance(this.eventsArray[i].x, this.userX);
    if (xDistance < 0) {
      xDistance = xDistance * -1;
    }
    var yDistance = this.calcDistance(this.eventsArray[i].y, this.userY);
    if (yDistance < 0) {
      yDistance = yDistance * -1;
    }
    this.eventsArray[i].distance = xDistance + yDistance;
  }
  this.fiveEvents();
};

App.calcDistance = function (coordinate, user) {
  if (((coordinate < 0) && (user < 0)) || ((coordinate >= 0) && (user >= 0))) {
    return (user - coordinate);
  } else if (coordinate >= 0 && user < 0){
    return (coordinate - user);
  } else {
    return (user - coordinate);
  }
};

App.fiveEvents = function () {
  this.eventsArray.sort(function(a, b) {
    return a.distance - b.distance;
  });
  this.closestEvents = this.eventsArray.slice(0,5);
  this.printResults();
};

App.printResults = function () {
  for (var i = 0; i < this.closestEvents.length; i++) {
    $('.results').append(`
      <div class="card"
      <ul class="event">
      <li><span>Event Number:</span> ${this.closestEvents[i].number}</li>
      <li><span>Price:</span> $${this.closestEvents[i].ticketPrice}</li>
      <li><span>Distance:</span> ${this.closestEvents[i].distance}</li>
      </ul>
      </div>
      `
    );
  }
};

$(App.setup.bind(App));
