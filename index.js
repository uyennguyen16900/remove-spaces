const removeSpaces = (s) => {
    searchRegEx = /\s/g
    return s.replace(searchRegEx, '-')
}

module.exports = {
    removeSpaces
}