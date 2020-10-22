class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255;
    this.remove = false;
  }

  display(){
    
    if(this.body.speed>3){
      this.remove = true;
     // console.log("hey1")

    }

    if( this.remove === true){
      
        push();
        this.visibility-=5;
        tint(255,this.visibility);
        //console.log(this.visibility);
        super.display();
        pop();
        if(this.visibility<=0){
          World.remove(world,this.body);
        }
    }
    else{
      super.display();
    }
   
   
  }

  score(){

    if(this.visibility < 255 && this.visibility > -750){
      score+=5;
    }
  }

};