class BackgroundObject extends MoveableObjects{

    x = 0;
    y = 0;
    width = canvas.width;
    height = canvas.height;


    constructor(file){
        super().loadImage(file);
    }
}