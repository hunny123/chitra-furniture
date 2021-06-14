const getRequestPaginationObj = (req) => {
    const { page, size } = req.query
    const limit = size? parseInt(size) : 10
    const offset = page ? (page - 1) * limit : 0;
    return {limit ,offset,page:parseInt(page)||1}
    
}
const getResponsePaginationObj = (paginationOption,responseData,datakey) => {
    const { count, rows } = responseData;
    const { limit ,offset,page} = paginationOption
    const data =  { [datakey]: {
        data: rows,
        metadata: {
            limit,
            offset,
            page,
            total:count
        }
    }
    }
    return data
    
}
module.exports = {getRequestPaginationObj,getResponsePaginationObj}