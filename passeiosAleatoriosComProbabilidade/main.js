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
        const r = random(1);

        // 40% de probabilidade de se mover para a direita
        if (r < 0.4) {
            this.x++;
        } else if (r < 0.6) {
            this.x--;
        } else if (r < 0.8) {
            this.y++;
        } else {
            this.y--;
        }

    }
}

function setup() {
    createCanvas(width, height);
}

function draw() {
    walkers.forEach(w => {
        w.walk();
        w.display();    
    })
}

// tamanho da tela
const [width, height] = [400, 400];

//const w = new Walker();
const walkers = [new Walker(), new Walker(), new Walker()];


