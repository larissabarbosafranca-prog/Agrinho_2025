let campoX = 0;
let cidadeX = 0;
let tratorX = 0;
let pessoas = [];

function setup() {
  createCanvas(800, 400);
  for (let i = 0; i < 5; i++) {
    pessoas.push(createVector(random(100, 700), random(300, 380)));
  }
}

function draw() {
  background(255);

  // Desenho do campo
  drawCampo();
  // Desenho da cidade
  drawCidade();

  // Movimento do trator
  tratorX += 1;
  if (tratorX > width) tratorX = -50;
  drawTrator(tratorX, 300);

  // Movimento das pessoas
  for (let i = 0; i < pessoas.length; i++) {
    pessoas[i].x += random(-2, 2);
    pessoas[i].y += random(-1, 1);
    ellipse(pessoas[i].x, pessoas[i].y, 10, 10);
  }

  // Efeitos de conexão (laços)
  drawConexao();
}

// Função para desenhar o campo
function drawCampo() {
  // Céu
  fill(135, 206, 235);
  noStroke();
  rect(0, 0, width, height / 2);

  // Sol
  fill(255, 204, 0);
  ellipse(100, 100, 80, 80);

  // Relva
  fill(34, 139, 34);
  rect(0, height / 2, width, height / 2);

  // Árvores
  fill(139, 69, 19);
  for (let i = 50; i < width; i += 200) {
    rect(i - 10, height / 2 - 40, 20, 60); // Tronco
    fill(0, 128, 0);
    ellipse(i, height / 2 - 70, 80, 80); // Folhagem
    fill(139, 69, 19);
  }
}

// Função para desenhar a cidade
function drawCidade() {
  fill(169, 169, 169);
  rect(cidadeX, height / 2 - 150, 200, 150); // Prédio 1
  rect(cidadeX + 250, height / 2 - 120, 150, 120); // Prédio 2
  rect(cidadeX + 500, height / 2 - 180, 120, 180); // Prédio 3
  
  // Carros
  fill(255, 0, 0);
  rect(cidadeX + 100, height / 2 + 20, 40, 20); // Carro 1
  fill(0, 0, 255);
  rect(cidadeX + 350, height / 2 + 40, 40, 20); // Carro 2

  cidadeX -= 1;
  if (cidadeX < -600) cidadeX = width;
}

// Função para desenhar o trator
function drawTrator(x, y) {
  fill(0, 0, 0);
  rect(x, y, 50, 20); // Corpo do trator
  fill(255, 0, 0);
  ellipse(x + 10, y + 20, 30, 30); // Roda dianteira
  ellipse(x + 40, y + 20, 30, 30); // Roda traseira
}

// Função para desenhar as conexões
function drawConexao() {
  stroke(0, 255, 0);
  strokeWeight(2);
  for (let i = 0; i < pessoas.length; i++) {
    line(pessoas[i].x, pessoas[i].y, tratorX, 300); // Conexão entre as pessoas e o trator
  }
}