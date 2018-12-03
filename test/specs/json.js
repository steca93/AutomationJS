describe("Json test", () => {

    const niz = [
        {
            id: 0,
            name: "Stefan",
            surname: "Aleksic",
            deca : [
                {
                    id: 0,
                    name: "Ljiljan",
                },
                {
                    id: 1,
                    name: "Gorana",
                },
            ],

        },
        {
            id: 1,
            name: "Marko",
            surname: "Pavlovic"
        },
        {
            id: 2,
            name: "Goran",
            surname: "Lakovic"
        },
    ];
    const wanted = 1;

    it("proveri da li ovo radi", () =>{

        console.log(niz[0].deca[0]);

        niz.forEach((object) => {
           // if(object.id === wanted){
           //     console.log("Ime: " + object.name + " | Prezime: " + object.surname);
           // }
            //
            // 421console.log(object);
        });
    });


});