class Ship{
    constructor(name,latitude,longitude){
        this.name=name;
        this.speed=0;
        this.latitude=latitude;
        this.longitude=longitude;
    }
    sail(speed) {
        this.speed = speed;
            console.log( this.name  + " плывёт со скоростью " + this.speed );
    }

    stop() {
        this.speed = 0;
            console.log( this.name + " стоит " );
  }
    sailTo(latitude,longitude){
    this.latitude=latitude;
        this.longtude=longitude;
        console.log( " Корабль " + this.name + " Он находится на широте "+ this.latitude + " и на долготе " + this.longtude + " Корабль " + this.name + " Он находится на широте "+ this.latitude + " и на долготе " + this.longtude);
    }
    getCoordinatates(){
       return [this.latitude,this.longitude]
    }
    
}

ship = new Ship("Hel", 64, 67)
ship.sail();
ship.sailTo(76, 57);
curCoords = ship.getCoordinatates();
console.log(" Сейчас координаты (" +  curCoords[0].toString() + ',' + curCoords[1].toString() + ' )'  )
ship.stop();
var first = ship.latitude[0];
var last = ship.longitude[1];


class Linkor extends Ship{
    constructor(count){
        super();
        this.count = count;
    }
    

    shoot(count){
        if (this.count < count) {
            console.log("Недостаточно ядер")
        }
        else{
            this.count = this.count-1;
            console.log("Выстрел!");
            console.log("Осталось ядер " + this.count.toString());
        }
    }
 
 
}
linkor = new Linkor("Hey", 10)
linkor.shoot();
var count = 10;


class Yacht extends Ship{
    constructor(){
        super();
    } 
    dissolveTheSails(){
        console.log(this.name + " распустил паруса ")
    }
    
    sail(){
        super.sail();
        this.dissolveTheSails();
    }
}
yacht = new Yacht("Nol")