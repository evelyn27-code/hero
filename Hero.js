

class Hero{
    constructor(x, y,r) {
        var options = {
          density:1,
          frictionAir: 1.5

        };

        this.x=x;
        this.y=y;
        this.r=r
        this.image = loadImage("super hero woman.png");
        this.body = Bodies.circle(this.x, this.y, (this.r)/2,options);
      
        World.add(world, this.body);
      }
      display(){
       
        var pos =this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
       // ellipseMode(CENTER);
        imageMode(CENTER);
        //fill("pink")

        image(this.image, 0, 0, 200, 200);
       // ellipse(0,0,this.r,this.r);
       
      
       
        pop();
      }
}





