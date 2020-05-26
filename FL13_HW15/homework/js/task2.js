const Machine = function(color, engine){
    this.color = color;
    this.engine = engine;
    this.isDriving = false;
    this.speed = 0;
    this.isStopping = false;

    Machine.prototype.getInfo = function() {
        return {'engine': this.engine, 'color': this.color, 'maxSpeed': this.maxSpeed, 'model': this.model};
    };

    Machine.prototype.upgradeEngine = function(newEngine, maxSpeed) {
        if (!this.isStopping && !this.isDriving){
            this.engine = newEngine;
            this.maxSpeed = maxSpeed;
        } else {
            console.log('You can not upgrade until stopped');
        }
   }

   Machine.prototype.drive = function(){
       const increaseSpeedInterval = 2000;
        if (!this.isDriving){
                this.isStopping = false;
                this.speed = 0; 
                this.isDriving = true;        
            this.driving = setInterval(() => {
                this.speed += 20;
                if (this.speed > this.maxSpeed){
                    clearInterval(this.stopping);
                    console.log('speed is too high, SLOW DOWN!');                   
                }                
            }, increaseSpeedInterval);   
        } else {
            console.log('Already running');
        }
    }

    Machine.prototype.stop = function(){
        const decreaseSpeedInterval =1500;
        if(!this.isStopping){
            clearInterval(this.driving);
            this.driveMaxSpeed = this.speed;
            this.isDriving = false;
            this.isStopping = true;
            this.stopping = setInterval(() => {
                this.speed -=20;
                if(this.speed<=0){
                    this.speed = 0;
                    this.showStopMessage(this.driveMaxSpeed);
                    this.isStopping = false;
                    clearInterval(this.stopping);
                }
            }, decreaseSpeedInterval);
        } else {
            console.log('Already slows down');
        }
    }

    this.showStopMessage = function(maxSpeed){
        console.log(`${this.type} ${this.model} is stopped. Maximum speed during the drive was: ${maxSpeed}`);
    }
}

const Vehicle = function(color, engine){
    Machine.call(this,color, engine);
    this.maxSpeed = 70;
    this.showStopMessage = function(){
        console.log(`Vehicle is stopped. Maximum speed during the drive was: ${this.driveMaxSpeed}`);
    }
}
Vehicle.prototype = Object.create(Machine.prototype);
Vehicle.prototype.constructor = Vehicle;


const Car = function(model, color, engine){
    Machine.call(this, color, engine);
    this.model = model;
    this.maxSpeed = 80;
    this.showStopMessage = function(maxSpeed){
        console.log(`Car ${this.model} is stopped. Maximum speed during the drive was: ${maxSpeed}`);
    }
    this.changeColor = function(newColor) {
        if(newColor !== this.color){
            this.color = newColor;
        } else {
            console.log('The selected color is a same as the current, please choose another one.');
        }
    }
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;


const Motorcycle = function(model, color, engine){
    Machine.call(this, color, engine);
    this.model = model;
    this.maxSpeed = 90;
    this.overheatingSpeed = 30;
    this.showStopMessage = function(){
        console.log(`Motorcycle ${this.model} is stopped. Good drive`);
    }
    this.drive = function(){
        const increaseSpeedInterval = 2000;
         if (!this.isDriving){
            this.isStopping = false;
            this.speed = 0; 
            this.isDriving = true; 
            console.log('Let’s drive');      
            this.driving = setInterval(() => {
                 this.speed += 20;
                 if (this.speed > this.maxSpeed){
                     clearInterval(this.stopping);
                     console.log('speed is too high, SLOW DOWN!');
                     if (this.speed >= this.maxSpeed + this.overheatingSpeed){
                         console.log('Engine overheating');                        
                         this.stop();
                     }
                 }                
             }, increaseSpeedInterval);   
         } else {
             console.log('Already running');
         }
     }
}
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;




