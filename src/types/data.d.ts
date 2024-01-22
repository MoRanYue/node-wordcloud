declare interface WordDetail {
  count: number
  weight?: number
}
declare type PureWordList = string[]
declare type AdvancedWordList = Record<string, WordDetail>
declare type WordList = PureWordList | AdvancedWordList
