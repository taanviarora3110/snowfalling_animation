class Particle{
	constructor(x,y,r)
	{

		var options = {
            isstatic:false,
			restitution:0.3,
			friction:0,
			density:1.2
			
		}

	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options);
        this.color=color(random(0,255),random(0,255),random(0,255));
		World.add(world, this.body);
        
	}
	display()
    
	{
			var particlePos=this.body.position;		
			push();
           
			translate(particlePos.x, particlePos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("white");
			fill("white");
			//draw the ellipse here to display the rubber ball
			ellipse(0,0,this.r,this.r);
			
        color(this.color,this.x,this.y,this.r,options);
			pop();
			
	}

}