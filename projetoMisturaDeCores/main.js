function distribuicaoNormal(){
    const r = randomGaussian();
    const std = 40;
    const mean = 200;
    return std * r + mean;
}

function draw () {
    for (let i = 0; i < 10; i++) {
        const x = distribuicaoNormal(); 
        const y = distribuicaoNormal();
        fill(random(255), random(255), random(255));
        ellipse(x, y, 10, 10);
    }
}

function setup() {
    createCanvas(width, height);
}

const [width, height] = [400, 400];

