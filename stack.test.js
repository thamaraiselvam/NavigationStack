const assert = require('assert');

describe("Navigation stack test", () => {
    const NavigationStack = require('./index');
    let navigation = new NavigationStack();

    it('Should add new links', () => {
        navigation.addNewURL('google.com');
        navigation.addNewURL('yahoo.com');
        navigation.addNewURL('bing.com');
        assert.equal(navigation.getcurrentURL(), 'bing.com');
    });

    it('Should go backward once', () => {
        navigation.goBackward();
        assert.equal(navigation.getcurrentURL(), 'yahoo.com');
    });

    it('Should go forward once', () => {
        navigation.goForward();
        assert.equal(navigation.getcurrentURL(), 'bing.com');
    });

    it('Should go multiple backward', () => {
        navigation.goBackward();
        navigation.goBackward();
        assert.equal(navigation.getcurrentURL(), 'google.com');
    });

    it('Should go multiple forward', () => {
        navigation.goForward();
        navigation.goForward();
        navigation.goForward();
        navigation.goForward();
        assert.equal(navigation.getcurrentURL(), 'bing.com');
    });

})
