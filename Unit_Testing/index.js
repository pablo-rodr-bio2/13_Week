const isLeapYear = (year) => {

    if (typeof year === 'undefined') throw Error ('Your year is not defined')

    if (typeof year !== "number") throw Error ('Your year is not a number')

    return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
}

module.exports = isLeapYear
