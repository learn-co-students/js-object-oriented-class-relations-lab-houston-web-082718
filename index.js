const store = {drivers: [], passengers: [], trips: []}

// Driver class:
// A driver has many trips, and has many passengers through trips.
let driverId = 0;
class Driver {
    constructor(name) {
        // new Driver() - initialized with a name; returns a JavaScript object that has attributes of id, and name
        this.id = ++driverId;
        this.name = name;

        store.drivers.push(this);
    }

    // trips() - returns all of the trips that a driver has taken
    trips() {
        return store.trips.filter((element) => element.driverId === this.id);
    }

    // passengers() - returns all of the passengers that a driver has taken on a trip
    passengers() {
        return this.trips().map((element) => element.passenger())
    }
}

// Passenger class:
// A passenger has many trips, and has many drivers through trips.
let passengerId = 0;

class Passenger {
    // new Passenger() - initialized with a name; returns a JavaScript object that has attributes of id, and name
    constructor(name) {
        this.id = ++passengerId;
        this.name = name;

        store.passengers.push(this);
    }

    // trips() - returns all of the trips that a passenger has taken
    trips() {
        return store.trips.filter((element) => element.passengerId === this.id);
    }

    // drivers() - returns all of the drivers that has taken a passenger on a trip
    drivers() {
        return this.trips().map((element) => element.driver())
    }
}

// Trip class:
// A trip belongs to a driver and belongs to a passenger.
let tripId = 0;

class Trip {
    // new Trip() - initialized with an instance of driver and an instance of passenger; 
    // returns a JavaScript that has attributes id, driverId, and passengerId
    constructor(driver, passenger) {
        this.id = ++tripId;
        this.driverId = driver.id;
        this.passengerId = passenger.id;

        store.trips.push(this);
    }

    // driver() - returns the driver associated with the trip
    driver() {
        return store.drivers.find((element) => element.id === this.driverId);
    }

    // passenger() - returns the passenger associated with the trip
    passenger() {
        return store.passengers.find((element) => element.id === this.passengerId);
    }
}
