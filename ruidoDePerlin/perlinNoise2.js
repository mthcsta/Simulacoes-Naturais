class Walker {
    constructor() {
        this.x = width/2;
        this.y = height/2;
        this.tempoX = 0;
        this.tempoY = 100; // para que o ponto inicial não seja o mesmo, pois o ruido de perlin é deterministico
    }
    display() {
        stroke(0);
        point(this.x, this.y);
    }
    walk() {
        this.x = map(noise(this.tempoX), 0, 1, 0, width);
        this.y = map(noise(this.tempoY), 0, 1, 0, height);
        this.tempoX += 0.01;
        this.tempoY += 0.01;
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


