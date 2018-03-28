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
