context('Fő képernyő megjelenési tesztek.', () => {
    beforeEach(() => {
      cy.visit("localhost/mainscreen/main.html");
    })
    
    it("A játék címe megfelelően megjelenik.", () => {
        const gameTitleElement = cy.get(".gametitle");
        gameTitleElement.should("be.visible");
        gameTitleElement.contains("Bomberman the Clone");
    })

    it("A 'Játék' és 'Ranglista' gombok megjelennek.", () => {
        const startGameButton = cy.get(".gameButton");
        startGameButton.should("be.visible");
        startGameButton.contains("Jatek");
    })

    it("A bug beküldés felület megjelenítésre szolgáló gomb megjelenik.", () => {
        cy.get("#bugReport").should("be.visible");
    })
})