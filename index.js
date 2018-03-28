let scuber = {drivers: [], passengers: []}

let driverId = 0
class Driver{
  constructor(name){
    this.name = name
    this.id = ++driverId
    scuber.drivers.push(this)
  }
}
