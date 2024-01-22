export type WordListParameter = string | PureWordList | AdvancedWordList

export class WordCollection {
  protected words: AdvancedWordList = {}
  protected totalWordCount: number = 0

  constructor(words?: WordListParameter) {
    if (words) {
      this.push(words)
    }
  }

  public get wordList(): AdvancedWordList {
    return this.words
  }

  protected pushOne(item: string): void {
    item = item.trim()
    if (Object.hasOwn(this.words, item)) {
      this.words[item].count++
      return
    }

    this.words[item] = {
      count: 1
    }
  }
  public push(...words: WordListParameter[]): void {
    words.forEach(item => {
      if (typeof item == "string") {
        this.pushOne(item)
      }
      else if (item instanceof WordCollection) {
        for (const text in item.wordList) {
          if (Object.prototype.hasOwnProperty.call(item.wordList, text)) {
            this.words[text.trim()] = item.wordList[text]
          }
        }
      }
      else if (Array.isArray(item)) {
        item.forEach(text => this.pushOne(text))
      }
    })

    this.calcWeights()
  }
  public update(words: AdvancedWordList): void {
    this.words = words
  }

  public calcWeights(): void {
    const wordCount = Object.keys(this.words).length
    for (const text in this.words) {
      if (Object.prototype.hasOwnProperty.call(this.words, text)) {
        const detail = this.words[text];
        this.words[text].weight = detail.count / wordCount
      }
    }
    console.log(this.words)
  }
}