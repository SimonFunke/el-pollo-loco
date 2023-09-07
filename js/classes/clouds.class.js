class Cloud extends MoveableObjects{
    x = Math.random() *700;
    y = 0;
    width = canvas.width;
    height = canvas.height;


    constructor(){
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.moveClouds();
    }

    moveClouds(){
        setInterval(() => {
            this.x -= 0.2;
        },1000/60);
        
    }
}