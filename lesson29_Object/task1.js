const car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2022,
    averageSpeed: 120,
    fuelTankCapacity: 60,
    fuelConsumption: 7.5,
    drivers: ["John", "Maria", "Alex"],
    // виводить на екран інформацію про автомобіль.
    displayInfo: function () {
        console.log("Виробник:", this.manufacturer);
        console.log("Модель:", this.model);
        console.log("Рік випуску:", this.year);
        console.log("Середня швидкість:", this.averageSpeed, "км/год");
        console.log("Обсяг паливного баку:", this.fuelTankCapacity, "л");
        console.log("Середня витрата палива:", this.fuelConsumption, "л/100км");
        console.log("Водії:", this.drivers.join(", "));
    },
    // Додавання ім’я водія у список
    addDriver: (driverName) => car.drivers.push(driverName),
    // Перевірка водія на наявність його ім’я у списку
    driverInList: (driverName) => car.drivers.includes(driverName),

    // Підрахунок необхідного часу та кількості палива
    calkTrip: function (distance) {
        const time = distance / this.averageSpeed;
        const breaks = time / 4;
        const totalTime = time + breaks;
        const fuel = (distance / 100) * this.fuelConsumption;
        return {
            tripTime: totalTime,
            fuelRequired: fuel
        };
    }
};

const distanceTravel = 500;
const trip = car.calkTrip(distanceTravel);

car.displayInfo();

car.addDriver("Bob");
console.log("Нові водії:",car.drivers.join());

console.log("Перевірка водія на наявність: Bob, " + car.driverInList("Bob"));

// Підрахунок необхідного часу та кількості палива
console.log(`Відстань ${distanceTravel} km`);
console.log(`Час подорожі: ${trip.tripTime} год`);
console.log(`Кількість палива: ${trip.fuelRequired} л`);
