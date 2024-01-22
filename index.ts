import { WordCollection } from "./src/wordCollection"
import { Wordcloud } from "./src/wordcloud"

const wc = new Wordcloud(800, 600)
wc.words = new WordCollection(["abc", "efg", "hijk", "lmn", "opq", "rrr", "rrr", "rrr", "opq", "rst", "jjjfjasf", "when", "while", "when"])
// wc.generate()

export default {
  Wordcloud, WordCollection
}