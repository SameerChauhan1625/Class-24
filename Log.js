class Log {

    constructor(x,y,w,h,a){

        var options ={
            restitution : 0.5,
            density: 0.6,
            friction: 0.7
          }
        this.box = Bodies.rectangle(x,y,w,h, options);
        this.width = w;
        this.height = h;
        Matter.Body.setAngle(this.box,a);
        World.add(world,this.box);
    }

    display(){
     push();
      translate(this.box.position.x,this.box.position.y);
      rotate(this.box.angle);  
     rectMode(CENTER);
     fill("yellow");
     strokeWeight(4);
     stroke("green");
     rect(0,0,this.width,this.height);
     pop();
    }


}