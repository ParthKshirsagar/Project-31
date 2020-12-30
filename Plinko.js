class plinko {
    constructor(x, y, radius){
        var options={
            isStatic:true
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        fill(255);
        circle(this.body.position.x, this.body.position.y, this.radius);
    }
}