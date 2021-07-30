// Add your Circle class here

const pi = Math.PI

class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2 
    }

    set diameter(newDiameter){
        this.radius = newDiameter/2
    }

    get circumference(){
        return pi * this.diameter
    }

    set circumference(newCirc){
        this.radius = newCirc/pi/2
    }

    get area(){
        return pi*(this.radius**2)
    }

    set area(newArea){
        this.radius = Math.sqrt(newArea/pi)
    }
}