class SiteController {
    // [GET] /
    index(req, res) {
        res.render('home');
    }

    // [GET] /searh
    searh(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
