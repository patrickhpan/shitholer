const request = require('request-promise');

function getPFP(token, id) {
    console.log(token, id)
    return request(`https://graph.facebook.com/v2.8/${id}/picture?\
        access_token=${token}&\
        type=square&\
        width=1024&\
        redirect=false`).then(data => {
            if (typeof data === 'string') {
                data = JSON.parse(data)
            }
            return data.data.url 
        });
}

module.exports = getPFP