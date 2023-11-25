context('A karakter választó képernyő megjelenés tesztjei.', () => {
    beforeEach(() => {
        cy.visit("localhost/mainscreen/main.html");
        cy.get("#goToGame").click();
    })

    it("A map és a változtató gombjai megjelennek.", () => {
        cy.get('#mapImg').should('be.visible');
        cy.get('.map.stepper').eq(0).should('be.visible');
        cy.get('.map.stepper').eq(1).should('be.visible');
    });  

    it("Az 1-es játékos-hoz tartozó skin, skin változató gombok, illetve input mező megjelenik.", () => {
        cy.get('input.player1').should('be.visible');
        cy.get('.player1.skin').should('be.visible');
        cy.get('.player1.stepper.skin').eq(0).should('be.visible');
        cy.get('.player1.stepper.skin').eq(1).should('be.visible');
    })

    it("A 2-es játékos-hoz tartozó skin, skin változató gombok, illetve input mező megjelenik.", () => {
        cy.get('input.player2').should('be.visible');
        cy.get('.player2.skin').should('be.visible');
        cy.get('.player2.stepper.skin').eq(0).should('be.visible');
        cy.get('.player2.stepper.skin').eq(1).should('be.visible');
    })

    it("Az egyes játékosok adatait jelző feliartok megjelennek.", () => {
       cy.get('.sidepane').eq(0).should('contain', 'Játékos 1');
       cy.get('.sidepane').eq(1).should('contain', 'Játékos 2');
    }); 

    it("A játékot indító és a skin-ek betöltéséért felelős gombok megjelennek.", () => {
        cy.get('.loadPlayerSkins').should('be.visible');
        cy.get('.startGame').should('be.visible');
    }); 

})
    