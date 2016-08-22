/**
 * Created by pomy on 8/22/16.
 */

var render = require('../render/index');

function* index () {
    this.response.body = yield render('index');
}

exports.register = function (router) {
    router.get('/', index);
    router.get('/index', index);
};
