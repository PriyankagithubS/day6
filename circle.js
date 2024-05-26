class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    getRadius(){
        return this.radius;
    }
    setRadius() {
        this.radius = this.radius;
    }
    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }
    toString() {
        return `Circle with radius ${this.radius} and color ${this.color}`;
    }
    getArea() {
        return 3.14 * this.radius * this.radius;
    }
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }

}
const myCircle = new circle(5, "red");

console.log(myCircle.toString());  
console.log("Area:", myCircle.getArea()); 
console.log("Circumference:", myCircle.getCircumference()); 

myCircle.setRadius(7);
console.log("New Radius:", myCircle.getRadius()); 

myCircle.setColor("blue");
console.log("New Color:", myCircle.getColor()); 

