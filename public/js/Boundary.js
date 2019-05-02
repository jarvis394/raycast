/**
 * Boundary that stop rays (could be a wall, whatever)
 * @class
 */
class Boundary {

  /**
   * @param {number} x1 X-cord of the starting point
   * @param {number} y1 Y-cord of the starting point
   * @param {number} x2 X-cord of the ending point
   * @param {number} y2 Y-cord of the ending point
   */
  constructor(x1, y1, x2, y2) {
    this.start = createVector(x1, y1)
    this.end = createVector(x2, y2)
  }

  /**
   * Draws boundary
   */
  draw() {
    stroke(255)
    line(this.start.x, this.start.y, this.end.x, this.end.y)
  }

}