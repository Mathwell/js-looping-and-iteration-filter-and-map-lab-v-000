// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){return driver.revenue>revenue})
}

function driverNamesWithRevenueOver(){
  return driversWithRevenueOver.map(function(driver){return driver.name})
}

function exactMatch(){

}

function exactMatchToList(){

}
