class Walker {
    constructor() {
        this.x = width/2;
        this.y = height/2;
    }
    display() {
        stroke(0);
        point(this.x, this.y);
    }
    walk() {
        const stepX = floor(random(3)) - 1;
        const stepY = floor(random(3)) - 1;
        this.x += stepX;
        this.y += stepY;
    }
}

function setup() {
    createCanvas(width, height);
}

function draw() {
    w.walk();
    w.display();
}

// tamanho da tela
const [width, height] = [400, 400];

const w = new Walker();


