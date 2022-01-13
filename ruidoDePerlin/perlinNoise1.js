let tempo = 0;

function draw () {
    const numeroAleatorio = noise(tempo);

    const x = map(numeroAleatorio, 0, 1, 0, width);
    rect(0, tempo*100, x, 1);

    tempo += 0.01;
}

function setup() {
    createCanvas(width, height);
}

const [width, height] = [400, 400];

