let store = {drivers: [], passengers: [], trips: []}

let driverId = 0
class Driver{
  constructor(name){
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }
  trips(){
    return store.trips.filter(trip => trip.driverId === this.id)
  }
  passengers(){
    return store.passengers.filter(passenger => passenger.driverId === this.id)
  }
}

let passengerId = 0
class Passenger{
  constructor(name){
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)
  }
  trips(){
    store.trips.filter(trip => trip.passengerId === this.id)
  }
}

let tripId = 0
class Trip{
  constructor(driver,passenger){
    this.id = ++tripId
    this.passengerId = passenger.id
    this.driverId = driver.Id
  }
