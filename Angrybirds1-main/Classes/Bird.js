class Bird extends BaseClass{
    constructor(x,y){
        super(x,y,50,50);
        this.image = loadImage("Images/bird.png");
    }

    show(){
            
        
        super.show();
    }

    show2(){
        bird.body.position.x= mouseX;
        bird.body.position.y= mouseY; 
    }
}