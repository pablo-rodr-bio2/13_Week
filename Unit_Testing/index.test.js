const isLeapYear = require('./index')

describe('isLeapYear ', () => {
    describe('when the year is divisible by 4 and not 100 ', () => {
    
        it('returns true', () => {
            expect(isLeapYear(2012)).toBe(true)
            expect(isLeapYear(2008)).toBe(true)
            expect(isLeapYear(2004)).toBe(true)
            expect(isLeapYear(1996)).toBe(true)
        })
    })

    describe('when the year is divisible by 400', () => {
        it('returns true', () => {
            expect(isLeapYear(2000)).toBe(true)
            expect(isLeapYear(1600)).toBe(true)
            expect(isLeapYear(1200)).toBe(true)
        })
    })
    
    describe('when the year is not divisible by 400', () => {
        
        it('returns false', () => {
            expect(isLeapYear(1700)).toBe(false)
            expect(isLeapYear(1900)).toBe(false)
            expect(isLeapYear(2600)).toBe(false)
        })
    })

    describe('when the year is not divisible by 4', () => {
        it('returns false', () => {
            expect(isLeapYear(1701)).toBe(false)
            expect(isLeapYear(1910)).toBe(false)
            expect(isLeapYear(2002)).toBe(false)
        })
    })
    
    describe('when the argument passed is not defined', () => {
        it('throws an error', () => {
            expect(() => isLeapYear()).toThrow('Your year is not defined')
            expect(() => isLeapYear(undefined)).toThrow()
        })
    })

    describe('when the year passed is a string', () => {
        it('throws an error', () => {
            expect(() => isLeapYear('year')).toThrow('Your year is not a number')
        })
    })
})
