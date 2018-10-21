/* global RSSParser */
import 'rss-parser/dist/rss-parser.min.js'

let rssParser
export const getRSSParser = _ =>
  !!rssParser ? rssParser : (rssParser = new RSSParser())
