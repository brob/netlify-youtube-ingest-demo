require('dotenv').config()
module.exports = {
    "indexName": process.env.VIDEO_INDEX,
    "searchKey": process.env.ALGOLIA_SEARCH_KEY
}