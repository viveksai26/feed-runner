//feedreader.js
$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        it('url exists', function() {
            for (var x = 0; x < allFeeds.length; x++) {
                expect(allFeeds[x].url).toBeDefined();
                expect(allFeeds[x].url.length).not.toBe(0);

            }
        });
        it('name exists', function() {
            for (var x = 0; x < allFeeds.length; x++) {
                expect(allFeeds[x].name).toBeDefined();
                expect(allFeeds[x].name.length).not.toBe(0);
            }
        });
    });

    describe('The menu', function() {
        it('menu is hidden', function() {
            expect($("body").hasClass('menu-hidden')).toBe(true);
        });
        it('menu icon clicked', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('loadsFeeds', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    describe('new Feed Selection', function() {
        var x, y;
        beforeEach(function(done) {
            loadFeed(0, function() {
                x = $('.feed').html();
                done();
            });
        });
        beforeEach(function(done) {
            loadFeed(1, function() {
                y = $('.feed').html();
                done();
            });
        });

        it('load changes', function() {
            expect(y).not.toEqual(x);
        });
    });
}());