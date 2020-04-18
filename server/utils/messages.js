const momnet = require("moment");

function formatMessage( name, text ) {

    return {
        name,
        text,
        time: momnet().format("h:mm a")
    }
};

module.exports = formatMessage