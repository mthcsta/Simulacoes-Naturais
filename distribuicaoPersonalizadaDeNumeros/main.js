function r() {
    const r = random(1);
    // 1% de chance de dar um grande passo
    if (r < 0.1) {
        ystep = random(-100, 100);
        xstep = random(-100, 100);
    } else {
        ystep = random(-1, 1);
        xstep = random(-1, 1);
    }
}

function monteCarlo () {
    while (true) {
        const r1 = random(1);
        const probabilidade = r1;
        const r2 = random(1);
        if (r2 < probabilidade) {
            return r1;
        }
    }
}

function draw () {
    for (let i = 0; i < 10; i++) {
        const num = monteCarlo();
        const radius = num*30;
        ellipse(num*380, 50, radius, radius);
    }
}


function setup() {
    createCanvas(width, height);
}

const [width, height] = [400, 400];
