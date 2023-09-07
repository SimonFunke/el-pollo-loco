class World {
    character = new Player();
    enemys = [
        new Enemy(),
        new Enemy(),
        new Enemy()
    ];
    clouds = [
        new Cloud()
    ];
    backgrounds = [
        new BackgroundObject('img/5_background/layers/air.png'),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png'),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png'),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png')
    ];
    ctx;


    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.draw();
    }


    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.addObjectsToMap(this.backgrounds);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemys);
        this.addToMap(this.character);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }
}