// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){return driver.revenue>revenue})
}

function driverNamesWithRevenueOver(drivers,revenue){
  return drivers.filter(function(driver){return driver.revenue>revenue}).map(function(driver){return driver.name})
}

function exactMatch(drivers,object){
 return drivers.filter(function(driver){return driver[object.keys[0]]===object.values[0]})
}

function exactMatchToList(drivers,object){

}
