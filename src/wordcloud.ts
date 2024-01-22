import canvas from "canvas"
import sharp from "sharp"
import { WordCollection, type WordListParameter } from "./wordCollection"

export class Wordcloud {
  private canvas!: canvas.Canvas
  private context!: canvas.CanvasRenderingContext2D
  private width!: number
  private height!: number
  public words?: WordCollection

  constructor(width: number, height: number) {
    this.createCanvas(width, height)
  }

  public createCanvas(width: number, height: number): this {
    this.width = width
    this.height = height
    this.canvas = canvas.createCanvas(this.width, this.height, "svg")
    this.context = this.canvas.getContext("2d", { alpha: true })
    return this
  }

  public generate(): sharp.Sharp | never {
    if (!this.words) {
      throw new Error("The words has not been set")
    }

    // this.words.wordList.forEach(wordDetail => {
    //   const fontSize = 72
    //   const content = wordDetail.text
    //   this.context.font = `${fontSize}px sans-serif`
    //   this.context.fillStyle = "pink"
    //   this.context.fillText(content, this.width/2 - (fontSize * content.length)/2, this.height/2 - fontSize/2)
    // })

    return sharp(this.canvas.toBuffer()).resize(this.width, this.height).toFile("./wordcloud.png", (err, info) => {
      if (err) {
        throw err
      }
    })
  }
}