class SiteController {
    // GET /
    home(reg, res) {
        res.render('home');
    }

    //GET (/search)
    search(reg, res) {
        res.render('search');
    }
}

      module.exports = new SiteController();
