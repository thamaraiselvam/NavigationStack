class NavigationStack {
    constructor() {
        this.init();
    }

    init() {
        this.forwardStack = [];
        this.backwardStack = [];
        this.currentURL = '';
    }

    addNewURL(url) {
        if (this.currentURL) {
            this.backwardStack.push(this.currentURL);
        }

        this.currentURL = url;
    }

    goBackward() {
        if (!this.backwardStack.length) {
            return;
        }

        this.forwardStack.push(this.currentURL);
        this.currentURL = this.backwardStack.pop();
    }

    goForward() {
        if (!this.forwardStack.length) {
            return;
        }

        this.backwardStack.push(this.currentURL);
        this.currentURL = this.forwardStack.pop();
    }

    getcurrentURL() {
        return this.currentURL;
    }

    getState() {
        return {backward: this.backwardStack, forward: this.forwardStack};
    }
}

module.exports = NavigationStack;
