'use strict';

window.addEventListener('load', buildLocationSidebar);

function buildLocationSidebar(){
  for(var i = 0;i < locations.length;i++){
    var position = document.getElementById('locationList');
    var newBox = document.createElement('div');
    newBox.setAttribute('class', 'locationBox');
    position.appendChild(newBox);
    var newDt = document.createElement('dt');
    newDt.textContent = locations[i].location;
    newBox.appendChild(newDt);
    var newAddressDd = document.createElement('dd');
    newAddressDd.textContent = locations[i].address;
    newBox.appendChild(newAddressDd);
    var newHoopDd = document.createElement('dd');
    newHoopDd.textContent = 'Open ' + convertTimeToTwelveHr(locations[i].hoursOfOperation[0]) + ' until ' + convertTimeToTwelveHr(locations[i].hoursOfOperation[1]);
    newBox.appendChild(newHoopDd);
  }
}
