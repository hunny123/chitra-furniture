const getFilters = (req, filterOptions) => {
    const options = {}
    const query = req.query
    for (let i = 0; i < filterOptions.length; i++){
        if (query[filterOptions[i]]) {
            options[filterOptions[i]] = query[filterOptions[i]]
        }
    }
    return options
}
module.exports = getFilters