/**
 * Ray class
 * @class
 */
class Ray {

  constructor(vector, angle) {
    this.pos = vector
    this.dir = p5.Vector.fromAngle(angle)
  }

  draw() {
    stroke(255)

    push()
    translate(this.pos.x, this.pos.y)
    line(0, 0, this.dir.x * 10, this.dir.y * 10)
    pop()
  }

  setAngle(angle) {
    this.dir = p5.Vector.fromAngle(angle)
  }

  lookAt(vector) {
    this.dir.x = vector.x - this.pos.x
    this.dir.y = vector.y - this.pos.y
    this.dir.normalize()
  }

  castTo(boundary) {
    const {
      x: xStart,
      y: yStart
    } = boundary.start
    const {
      x: xEnd,
      y: yEnd
    } = boundary.end
    const {
      x: xPos,
      y: yPos
    } = this.pos
    let {
      x: xDir,
      y: yDir
    } = this.dir
    xDir = xPos + xDir
    yDir = yPos + yDir

    const den = (xStart - xEnd) * (yPos - yDir) - (yStart - yEnd) * (xPos - xDir)
    if (den === 0) {
      return false
    }

    const t = ((xStart - xPos) * (yPos - yDir) - (yStart - yPos) * (xPos - xDir)) / den
    const u = -((xStart - xEnd) * (yStart - yPos) - (yStart - yEnd) * (xStart - xPos)) / den

    if (t > 0 && t < 1 && u > 0) {
      const pointX = xStart + t * (xEnd - xStart)
      const pointY = yStart + t * (yEnd - yStart)

      return createVector(pointX, pointY)
    } else {
      return false
    }
  }

}