class Walker {
    constructor() {
        this.x = width/2;
        this.y = height/2;
    }
    display() {
        stroke(0);
        point(this.x, this.y);
    }
    randomCoordWalk(coord, mouseCoord) {
        const r = random(1);
        if (r < 0.2) {
            if (this[coord] > mouseCoord) {
                this[coord]--;
            } else {
                this[coord]++;
            }
        } else {
            this[coord] += floor(random(3)) - 1;
        }
    }
    walk() {
        this.randomCoordWalk('x', mouseX);
        this.randomCoordWalk('y', mouseY);
//        const stepX = floor(random(3)) - 1;
//        const stepY = floor(random(3)) - 1;
//        this.x += stepX;
//        this.y += stepY;
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
const walkers = [
    new Walker(), 
//    new Walker(), 
//    new Walker(),
];


