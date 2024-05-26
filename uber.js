
class rate {
    constructor(distance, duration, rideType) {
        this.distance = distance;
        this.duration = duration;
        this.rideType = rideType;
    }
    calculatePrice() {
        const baseFares = {
            'uberX': 50,
            'uberBlack': 100,
        }
        const ratePerKm = {
            'uberX': 8,
            'uberBlack': 10,
        }
        const ratePerMin = {
            'uberX': 1,
            'uberBlack': 2,
        }
        const baseFare = baseFares[this.rideType];
        const distanceFare = this.distance * ratePerKm[this.rideType];
        const durationFare = this.duration * ratePerMin[this.rideType];

        const totalFare = baseFare + distanceFare + durationFare;
        return totalFare;
    }
}


const myRide = new rate(11, 30, 'uberX');
const price = myRide.calculatePrice();

console.log("Total fare:", price.toFixed(2));
