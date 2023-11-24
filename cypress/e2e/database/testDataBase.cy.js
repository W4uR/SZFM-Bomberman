describe("Adatbázis működésének tesztelése.",function (){

    it("Bug report beküldése és annak adatbázisban való megjelenése.", () => {
        cy.visit("localhost/mainscreen/main.html");
        //Jelenjen meg a bug beküldő felület
        cy.get("#bugReport").click();
        //Kitöltjünk a bug leírását
        const testText = "Ez egy leiras a bug bekuldo tesztelesehez."
        cy.get("#textArea").type(testText);
        //Rákattintunk a beküldés gombra.
        cy.get(".sendButton").click();
        //Sikeres elküldés esetén nem látszódik továbbá a container
        cy.get(".bugReportContainer").should("not.be.visible");
        //A szövegünk sikeresen megjelenik az adatbázisban
        cy.task("queryDb", `select BugDescription from bomberman.bugreport WHERE BugDescription like '${testText}'`)
          .then((results) => {
            // Várjon 1 másodpercet, hogy az adatbázis-bejegyzés betöltődjön.
            cy.wait(1000);
            // Ellenőrizze, hogy az adatbázis-bejegyzés a megfelelő szöveget tartalmazza.
            const isResultInDatabase = results[0].BugDescription.includes(testText);
            if(isResultInDatabase){
                cy.log("Az leírás beküldése sikeres volt.")
            }else{
                cy.log("Az leírás beküldése sikertelen!")
            }
        });
        //A szöveg törlése az adatbázisból, hogy ne zavarja a működést.
        cy.task("queryDb", `DELETE FROM bomberman.bugreport WHERE BugDescription like '${testText}'`)
            .then(() => {
                cy.log("A bug leírásának törlése sikeres.");
        });
    });
      
})