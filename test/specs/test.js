

describe("hgfgh", () =>{
    it("hgfhgf", () => {
        browser.url("https://www.google.rs");
        browser.waitUntil(
            () => browser.isVisible("input[name='q']"),
            5000,
            "Input polje nije vidljivo",
        );
        let txtSearch = $("input[name='q']");
        txtSearch.click();
        txtSearch.addValue("proradilo je");
        console.log(txtSearch.getText());
        
    });

    it("sdadasd", () =>{
        //browser.url("www.facebook.com");
        console.log("radi majku ti jebem!");
    });
});