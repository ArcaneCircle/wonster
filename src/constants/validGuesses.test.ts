import { fail } from 'assert'

import { WORDLIST } from './wordlist'

describe('valid guesses', () => {
  test('words are unique', () => {
    const uniqueWords = Array.from(new Set(WORDLIST))

    expect(WORDLIST.length).toEqual(uniqueWords.length)

    if (uniqueWords.length !== WORDLIST.length) {
      uniqueWords.forEach((w) => {
        const ww = WORDLIST.filter((x) => x === w)
        if (ww.length > 1) {
          fail(`The word ${w} is not unique.`)
        }
      })
    }
  })
})
