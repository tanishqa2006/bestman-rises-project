class Drops{
constructor(x,y)
{
    var options = {
        friction:0.01,
        restitution:5.5
        
    }
    this.rain=Bodies.circle(x,y,5,options)
    this.radius=5; 
    World.add(world,this.rain)
}
updateY(){     
    if(this.rain.position.y > height){

        Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
    }
}
display()
{
    var pos=this.rain.position;
    fill("blue");
    ellipseMode( CENTER)
    ellipse(pos.x, pos.y,this.radius,this.radius)
    
}
}