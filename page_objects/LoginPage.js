var homePage = require("./HomePage");

class LoginPage {

    //  Elements
    get txtEmail(){return browser.element("input[type='email']");}
    get btnNextEmail(){ return browser.element("#identifierNext");}
    get txtPassword(){return browser.element("input[type='password']");}
    get btnNextPassword(){return browser.element("#passwordNext");}

    //Methods
    enterEmail(email){
        browser.waitUntil(
            () => this.txtEmail.isVisible(),
            5000,
            "Email input filed is not visible"
        );
        this.txtEmail.addValue(email);
        return new LoginPage();
    }

    clickEmailNext(){
        browser.waitUntil(
            () => this.btnNextEmail.isVisible(),
            5000, 
            "Next button is not visible"
        );
        this.btnNextEmail.click();
        return new LoginPage();
    }

    enterPassword(password){
        browser.waitUntil(
            () => this.txtPassword.isVisible(),
            5000,
            "Password input filed is not visible"
        );
        this.txtPassword.addValue(password);
        return new LoginPage();
    }

    clickLoginButton(){
        browser.waitUntil(
            () => this.btnNextPassword.isVisible(),
            5000,
            "Login button filed is not visible"
        );
        this.btnNextPassword.click();
        return homePage;
    }


}

module.exports = new LoginPage();