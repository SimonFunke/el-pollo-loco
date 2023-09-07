class Enemy extends MoveableObjects{

    x = 400 + Math.random()* 300;
    y = 350;
    width = 70;
    height = 80;
    

    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
    }
}