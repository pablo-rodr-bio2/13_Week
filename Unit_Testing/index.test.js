const isLeapYear = require('./index')

//TODO
// describe('isLeapYear')
// add 'describe' for 'if's and 'when's
// describe(when the user is defined)
// it(does something)
// trying to get 2 lvls of describe

describe('isLeapYear ', () => {
    describe('This are leap years: 2012, 2008, 2004, 1996, 2000, 1600, 1200', () => {
    
        it('is be divisible by 4 and not by 100', () => {
            expect(isLeapYear(2012)).toBe(true)
            expect(isLeapYear(2008)).toBe(true)
            expect(isLeapYear(2004)).toBe(true)
            expect(isLeapYear(1996)).toBe(true)
        })
    
        it('is be divisible by 400', () => {
            expect(isLeapYear(2000)).toBe(true)
            expect(isLeapYear(1600)).toBe(true)
            expect(isLeapYear(1200)).toBe(true)
        })
    })
    
    describe('This are not leap years: 1700, 1900, 2600, 1701, 1910, 2002', () => {
        
        it('is not divisible by 400', () => {
            expect(isLeapYear(1700)).toBe(false)
            expect(isLeapYear(1900)).toBe(false)
            expect(isLeapYear(2600)).toBe(false)
        })
    
        it('is not divisible by 4', () => {
            expect(isLeapYear(1701)).toBe(false)
            expect(isLeapYear(1910)).toBe(false)
            expect(isLeapYear(2002)).toBe(false)
        })
    })
    
    describe('This are bad arguments', () => {
        it('is not a number', () => {
            expect(() => isLeapYear()).toThrow('Your year is not defined')
            expect(() => isLeapYear(undefined)).toThrow()
            expect(() => isLeapYear('year')).toThrow('Your year is not a number')
        })
    })
})
