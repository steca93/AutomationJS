var homePage = require("../../page_objects/HomePage");
var gmailPage = require("../../page_objects/GmailPage");

describe("Gmail", () => {

    //const homePage = HomePage;

    before(() => {
            browser.url("https://www.google.rs");
        }
    );

    it("Login", () => {
        homePage.clickSignInButton()
        .enterEmail("steca93@gmail.com")
        .clickEmailNext()
        .enterPassword("421401pizza")
        .clickLoginButton();
    });

    it("Go to Gmail", () => {
        homePage.clickGmailButton();
    });

    it("Send Message", () => {
        gmailPage.clickComposeMessage();
        gmailPage.enterRecipient("steca93@gmail.com");
        gmailPage.enteeSubject("Wdio Email!");
        gmailPage.enterMessageText("Prva poruka poslata koristeci wdio.");
        gmailPage.clickSendButton();
    });

    it("Verify that message has successfully sent", () => {
        gmailPage.verifySendMessage();
    });
});