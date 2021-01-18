class Paper_Ball {
    constructor(){
        var options={
            isStatic :false,
            restitution :0.3,
            friction :0.5,
            density :1.2
        }
        this.body = Bodies.circle(200,100,25,options);
        World.add(world, this.body);

    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("rgb(255, 0, 128)");
        ellipse(0, 0, 25, 25);
        pop();
      }
   
}