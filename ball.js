class ball
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false, restitution : 0.3 ,
            density : 0.25,
            friction:0		
			}
            this.image=loadImage("paper.png")
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(x, y, r , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			//circle(0,0,this.r);
            image(this.image,0,0,this.r,this.r)
			pop()
			
	}

}