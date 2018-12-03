var loginPage = require("./LoginPage");
var gmailPage = require("./GmailPage");

class HomePage {

    get btnSignIn() {return browser.element('a[target="_top"]');}
    get btnGmail(){return browser.element('a[data-pid="23"][class="gb_P"]');}

    clickSignInButton(){
        browser.waitUntil(
            () => this.btnSignIn.isVisible(),
            5000,
            "Sing in button is not visible"
        );
        this.btnSignIn.click();
        return loginPage;
    }

    clickGmailButton(){
        browser.waitUntil(
            () => this.btnGmail.isVisible(),
            5000,
            "Gmail button is not visible"
        );
        this.btnGmail.click();
        return gmailPage;
    }
}

module.exports =  new HomePage();