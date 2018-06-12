import {getCeilingAverage} from '../src/app'

test('get name', () => {
    expect(getCeilingAverage(1, 5)).toBe(3)
})