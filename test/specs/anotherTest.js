



describe("Second test class", () =>{

    const name = "stefan";
    const email = "steca93@gmail.com";
    const password = "421401pizza";
    //const homePage = require('../page_objects/HomePage');

    before(()=>{
        browser.url("https://www.google.rs");
    });

    it("Go to home page and click login button", () =>{


        browser.waitUntil(
            () => browser.isVisible("a[target='_top']"),
            5000,
            "Sing in button is not visible"
        );
        let btnSignIn = $("a[target='_top']");
        btnSignIn.click();
    


    });

    it("Enter email and password", () =>{

        browser.waitUntil(
            () => browser.isVisible("input[type='email']"),
            5000,
            "Email input filed is not visible"
        );
        let txtEmail = $("input[type='email']");
        txtEmail.addValue(email);

        browser.waitUntil(
            () => browser.isEnabled("#identifierNext"),
            5000,
            "Next button is not clickable"
        );
        let btnNext = $("#identifierNext");
        btnNext.click();

        browser.waitUntil(
            () => browser.isVisible("input[type='password']"),
            5000,
            "Password input filed is not visible"
        );
        let txtPassword = $("input[type='password']");
        txtPassword.addValue(password);

        browser.waitUntil(
            () => browser.isEnabled("#passwordNext"),
            5000,
            "Password next button is not clickable"
        );
        let btnPasswordNext = $("#passwordNext");
        btnPasswordNext.click();

        browser.waitUntil(
            () => browser.isVisible("#hplogo"),
            5000,
            "Google logo is not visible"
        );
        let imgGoogle = $("#hplogo");
        console.log(imgGoogle.getAttribute("src"));



    });

    it("Logout", () =>{

        browser.waitUntil(
            () => browser.isEnabled("a[class='gb_b gb_fb gb_R']"),
            5000, 
            "Menu is not enabled"
        );

        let imgMenu = $("a[class='gb_b gb_fb gb_R']");
        imgMenu.click();

        browser.waitUntil(
            () => browser.isVisible("a[target='_top']"),
            5000,
            "Sign out button is not visible"
        );

        let btnSignOut = $("a[target='_top']");
        btnSignOut.click();

        if(!browser.getUrl().includes("google.rs")){
            console.log("FAIL! " + browser.getUrl());
        }
    });

});