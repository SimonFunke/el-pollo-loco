class MoveableObjects {
    x;
    y;
    height;
    width;
    img;
    imageCach = {};


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCach[path] = path;
        });
    }


    moveLeft() {
        console.log('Moved Left');
    }
}