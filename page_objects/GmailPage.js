//var loginPage = require("./LoginPage");
import assert from "assert";


class GmailPage {

    get tableRows(){ return $$("table > tbody > tr[tabindex]"); }
    get btnCompose() { return $("div[gh='cm']"); }
    get txtTo() { return $("textarea[name='to']"); }
    get txtSubject() { return $("input[name='subjectbox']"); }
    get txtMessageBody() { return $("div[aria-label='Message Body']"); }
    get btnSend() { return $("div[id=':pr']"); }
    get lblMessageSent() { return $("div[class='vh'] > span"); }


    //------------------------------------------------------------- METHODS ------------------------------------------//

    clickOnWantedRow(index){
        browser.waitUntil(
            () => this.tableRows.map((row) => row.isExisting()),
            5000,
            "Gmail table elements are not displayed",
        );
        this.tableRows[index].click();
    }

    clickOnWantedRowByText(text){
        browser.waitUntil(
            () => this.tableRows.map((row) => row.isExisting()),
            5000,
            "Gmail table elements are not displayed",
        );
        console.log("Start comparing row text with wanted text.");
        this.tableRows.forEach((row) => {
           if(row.getText().includes(text)){
               console.log("Found row which contains text: " + text);
               row.click();
               return;
           }
        });
    }

    getTableRowCount(){
        browser.waitUntil(
            () => this.tableRows.map((row) => row.isExisting()),
            5000,
            "Gmail table elements are not displayed",
        );
        return this.tableRows.length;
    }

    clickComposeMessage(){
        browser.waitUntil(
            () => this.btnCompose.isExisting(),
            5000,
            "Compose button is not visible on the page",
        )
        this.btnCompose.click();
    }

    enterRecipient(to) {
        browser.waitUntil(
            () => this.txtTo.isExisting() && this.txtTo.isVisible(),
            10000,
            "To input filed is not visible",
        );
        this.txtTo.addValue(to);
        browser.keys("\uE007");
    }

    enteeSubject(subject) {
        browser.waitUntil(
            () => this.txtSubject.isExisting() && this.txtSubject.isVisible(),
            10000,
            "Subject input filed is not visible",
        );
        this.txtSubject.addValue(subject);
    }

    enterMessageText(messageText){
        browser.waitUntil(
            () => this.txtMessageBody.isExisting() && this.txtMessageBody.isVisible(),
            10000,
            "Message body input filed is not visible",
        );
        this.txtMessageBody.addValue(messageText);
    }

    clickSendButton(){
        browser.waitUntil(
            () => this.btnSend.isExisting() && this.btnSend.isVisible(),
            10000,
            "Send button is not visible",
        );
        this.btnSend.click();
    }

    verifySendMessage(){
        browser.waitUntil(
            () => this.lblMessageSent.isExisting() && this.lblMessageSent.isVisible(),
            10000,
            "Message sent lable is not visible",
        );
        assert.strictEqual(this.lblMessageSent.getText().includes("Sending..."), true, "Message has not been successfully sent.\nActual: " + this.lblMessageSent.getText() + "\nExpected: sent");
    }

}

module.exports = new GmailPage();