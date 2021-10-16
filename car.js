class Car {
    #brand;
    #model;
    #yearOfManufacturing;
    #maxSpeed;
    #maxFuelVolume;
    #fuelConsumption;
    #currenFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;

    get brand() {
        return this.#brand;
    }

    set brand(value) {
        if((typeof value !== 'string') || value.length < 1 || value.length > 50) {
            throw new Error('Error');
        }
        else {
            this.#brand = value;
        }
    }

    get model() {
        return this.#model;
    }

    set model(value) {
        if((typeof value !== 'string') || value.length < 1 || value.length > 50) {
            throw new Error('Error');
        }
        else {
            this.#model = value;
        }
    }

    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }

    set yearOfManufacturing(value) {
        let date = new Date();
        if(!Number.isSafeInteger(value) || value < 1900 || value > date.getFullYear()) {
            throw new Error('Error');
        }
        else {
            this.#yearOfManufacturing = value;
        }
    }

    get maxSpeed() {
        return this.#maxSpeed;
    }

    set maxSpeed(value) {
        if(!Number.isSafeInteger(value) || value < 100 || value > 300) {
            throw new Error('Error');
        }
        else {
            this.#maxSpeed = value;
        }
    }
    
    get maxFuelVolume() {
        return this.#maxFuelVolume;
    }

    set maxFuelVolume(value) {
        if(!Number.isSafeInteger(value) || value < 5 || value > 20) {
            throw new Error('Error');
        }
        else {
            this.#maxFuelVolume = value;
        }
    }

    get fuelConsumption() {
        return this.#fuelConsumption;
    }

    set fuelConsumption(value) {
        if(!Number.isSafeInteger(value) || value <=0) {
            throw new Error('Error');
        }
        else {
            this.#fuelConsumption = value;
        }
    }

    get currentFuelVolume() {
        return this.#currenFuelVolume;
    }

    get isStarted() {
        return this.#isStarted;
    }

    get mileage() {
        return this.#mileage;
    }

    start() {
        if(this.#isStarted === true) {
            throw new Error('Машина уже заведена');
        }
        else this.#isStarted = true;
    }

    shutDownEngine() {
        if(this.#isStarted === false) {
            throw new Error('Машина ещё не заведена');
        }
        else this.#isStarted = false;
    }

    fillUpGasTank(num) {
        if(!Number.isSafeInteger(num) || num <= 0 ) {
            throw new Error('Неверное количество топлива для заправки');
        }
        if((this.#currenFuelVolume + num) > this.#maxFuelVolume) {
            throw new Error('Топливный бак переполнен');
        }
        else this.#currenFuelVolume += num;
    }

    drive(speed, hour) {
        if(!Number.isSafeInteger(speed) || speed <= 0 ) {
            throw new Error('Неверная скорость');
        }
        if(!Number.isSafeInteger(hour) || hour <= 0 ) {
            throw new Error('Неверное количество часов');
        }
        else if(speed > this.#maxSpeed ) {
            throw new Error('Машина не может ехать так быстро');
        }
        if(this.#isStarted === false ) {
            throw new Error('Машина должна быть заведена, чтобы ехать');
        }
        if((this.#currenFuelVolume - speed*hour*this.#fuelConsumption/100) < 0) {
            throw new Error('Недостаточно топлива');
        }
        else {
            this.#currenFuelVolume -= speed*hour*this.#fuelConsumption/100;
            this.#mileage += speed*hour;
        }
    }
}

module.exports = {Car};