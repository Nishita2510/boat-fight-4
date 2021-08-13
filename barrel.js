class Barrel extends BaseClass{
    constructor(x,y,width,height){
      super(x,y,width,height);
      this.image = loadImage("images/barrel.png");
    }
    display(){
        super.display();
    }
  }