class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1= loadImage("sprites/sling1.png");
        this.sling2= loadImage("sprites/sling2.png");
        this.sling3= loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){

        Body.setPosition(body,{x:250,y:100})
        this.sling.bodyA = body;
        //delete trajectory 
        bird.trajectory = [];
      

    }
    display(){
        
        push();
        imageMode(CENTER);
        image(this.sling1,260,160,50,120);
        bird.display();
        pop();
        //image(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(8);
            stroke(80,40,20);
            line(pointA.x+25, pointA.y, 275, 115);
            line(pointA.x-20,pointA.y,225,110)
            image(this.sling3,pointA.x-30,pointA.y-10,15,30)
        }
         
        push();
        imageMode(CENTER);
        image(this.sling2,225,130,50,80);
        pop();
    }
    
}