// import 'whatwg-fetch'
var promise = {
    baseApi: '',
    get: function (url, data) {
        data = data || {};
        let urlParams = '';
        for (let key in data) {
            urlParams = urlParams + `&${key}=${data[key]}`;
        }
        if (urlParams)
            url = url.indexOf('?') < 0 ? url + '?' + urlParams : url + '&' + urlParams;
        let options = {
            method: 'get',
        }
        return this.request(url, options);
    },
    post: function (url, data) {
        var formData = new FormData();
        data = data || {};
        for (var item in data) {
            formData.append(item, data[item]);
        }
        let options = {
            body: formData,
            method: 'post'
        }
        return this.request(url, options);
    },
    request: function (url, options) {
        var promise = new Promise((resolve, reject) => {
            fetch(url, options).then((response) => {
                return response.json()
            }).then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            })
        })
        return promise;
    }
}
module.exports = promise;