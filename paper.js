class Paper {
    constructor() {

      var options = {
          'restitution': 0.3,
          'friction' : 0.5,
          'density':1.2
     
        }
      this.body = Bodies.circle(100,200,20,options);
      this.radius = 20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("purple");
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,this.radius,this.radius);

    }
}
