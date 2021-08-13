class PC extends BaseClass {
    constructor(x,y,width,height){
      super(x,y,width,height);
      this.image = loadImage("images/pc1.png");
    }
  
    display() {
      if(this.body.speed<3){
        touch = touch+1
      }
      super.display();
    }
}