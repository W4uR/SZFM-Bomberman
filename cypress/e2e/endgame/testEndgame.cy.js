context('End game', () => {
    beforeEach(() => {
        cy.visit("localhost/mainscreen/main.html");
        cy.get("#goToGame").click();
        let player1 = "TestP1";
        let player2 = "TestP2";
        let player1Input = cy.get('input.player1');
        let player2Input = cy.get('input.player2');
        player1Input.type(player1);
        player2Input.type(player2);
        cy.get('.startGame').click();
    })
    it("A játékos pontszáma növekszik a játék végén.", () => {
        let playerPoints;
        let playerPointsAfterGame;
        cy.wait(1000);
        cy.task("queryDb", `SELECT * from bomberman.player WHERE PlayerName like 'TestP2'`)
          .then((results) => {
            expect(results.length).to.be.greaterThan(0);
            playerPoints = results[0].Points;
        });
        cy.get('#canvas').trigger('keydown', { keyCode: 32, which: 32 });
        cy.wait(4000);
        cy.get('#canvas').trigger('keydown', { keyCode: 32, which: 32 });
        cy.wait(4000);
        cy.get('#canvas').trigger('keydown', { keyCode: 32, which: 32 });
        cy.wait(4000);
        cy.get('#newGameButton').click();
        cy.task("queryDb", `SELECT * from bomberman.player WHERE PlayerName like 'TestP2'`)
        .then((results) => {
            expect(results.length).to.be.greaterThan(0);
            playerPointsAfterGame = results[0].Points;
            expect(playerPointsAfterGame).to.be.greaterThan(playerPoints);
        });
    })

})