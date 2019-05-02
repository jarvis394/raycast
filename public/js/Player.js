/**
 * Player class
 * @class
 */
class Player {

  constructor() {
    this.pos = createVector(width / 2, height / 2)
    this.rays = []
    this.heading = 0

    for (let i = 0; i < 60; i += 0.1) {
      this.rays.push(new Ray(this.pos, radians(i)))
    }
  }

  /**
   * Draws player
   */
  draw() {
    fill(255)
    circle(this.pos.x, this.pos.y, 16)

    for (let ray of this.rays) {
      ray.draw()
    }
  }

  /**
   * Projects light on boundaries
   * @param {array} boundaries Array of boundaries to cast to
   */
  projectLightOn(boundaries) {
    fill(255)
    beginShape()

    vertex(this.pos.x, this.pos.y)

    for (let ray of this.rays) {
      let closest = null
      let record = Infinity

      for (let boundary of boundaries) {
        const p = ray.castTo(boundary)
        if (p) {
          const d = p5.Vector.dist(this.pos, p)

          if (d < record) {
            record = d
            closest = p
          }
        }
      }

      if (closest) {
        vertex(closest.x, closest.y)
      }
    }

    endShape()
  }

  /**
   * Rotates player
   * @param {number} angle Angle to rotate
   */
  rotate(angle) {
    this.heading += angle

    for (let i = 0; i < this.rays.length; i++) {
      this.rays[i].setAngle(radians(i) + this.heading)
    }
  }

  /**
   * Handles key presses
   */
  handleMoves() {
    if (keyIsDown(UP_ARROW)) {
      this.pos.add(1, 0)
    }

    if (keyIsDown(LEFT_ARROW)) {
      this.rotate(-1)
    }

    if (keyIsDown(RIGHT_ARROW)) {
      this.rotate(1)
    }
  }

}