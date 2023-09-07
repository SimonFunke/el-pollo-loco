class Player extends MoveableObjects {

    x = 30;
    y= 130;
    width = 150;
    height = 300;

    constructor(){
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages([
            'img/2_character_pepe/2_walk/W-21.png',
            'img/2_character_pepe/2_walk/W-22.png',
            'img/2_character_pepe/2_walk/W-23.png',
            'img/2_character_pepe/2_walk/W-24.png',
            'img/2_character_pepe/2_walk/W-25.png',
            'img/2_character_pepe/2_walk/W-26.png'
        ]);
    }


    moveRight() {
        console.log('moved Right');
    }


    jump() {
        console.log('jumped');
    }
}