let walls = [], ray, player

function setup() {
  createCanvas(500, 500)

  for (let i = 0; i < 5; i++) {
    walls.push(new Boundary(random(width), random(height), random(width), random(height)))
  }

  walls.push(new Boundary(0, 0, width, 0))
  walls.push(new Boundary(width, 0, width, height))
  walls.push(new Boundary(width, height, 0, height))
  walls.push(new Boundary(0, width, 0, 0))

  player = new Player()
}

function draw() {
  background(0)

  for (let wall of walls) {
    wall.draw()
  }

  player.draw()
  player.projectLightOn(walls)
  player.handleMoves()
}