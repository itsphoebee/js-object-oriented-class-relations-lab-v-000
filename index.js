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
    this.trips()
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
    return store.trips.filter(trip => trip.passengerId === this.id)
  }
  drivers(){
    return store.trips.filter(driver => driver.trippassengerId === this.id)
  }
}

let tripId = 0
class Trip{
  constructor(driver,passenger){
    this.id = ++tripId
    this.passengerId = passenger.id
    this.driverId = driver.id
    store.trips.push(this)
  }
  driver(){
    return store.drivers.find(driver => driver.id === this.driverId)
  }
  passenger(){
    return store.passengers.find(passenger => passenger.id === this.passengerId)
  }
}
