let driverId = 0
class Driver{
  const drivers = []
  constructor(name){
    this.name = name
    this.id = ++driverId
  }
}
