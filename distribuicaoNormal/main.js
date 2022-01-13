function setup() {
    createCanvas(width, height);
}

/**
 * distribuição normal usando media e desvio padrão
 */
function distribuicaoNormal1(n) {
    const number = randomGaussian(n);
    const standardDeviation = 60;
    const mean = 200;
    const x = standardDeviation * number + mean;
    return x;
}

function distribuicaoNormal2(n) {
    let r = 0;
    for (let i = 0; i < n; i++) {
        r += random(1);
    }
    return r / n;
}


function draw() {

    const n = distribuicaoNormal1(1);

    noStroke();
    fill(214, 159, 214, 10);
    ellipse(n, height/2, 16, 16);
}



// tamanho da tela
const [width, height] = [400, 400];

