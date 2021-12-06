function setup() {
    createCanvas(width, height);
}

function draw() {

    const number = randomGaussian(1);
    const standardDeviation = 60;
    const mean = 200;

    const x = standardDeviation * number + mean;

    noStroke();
    fill(214, 159, 214, 10);
    ellipse(x, height/2, 16, 16);
}

// tamanho da tela
const [width, height] = [400, 400];