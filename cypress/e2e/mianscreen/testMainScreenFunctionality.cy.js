//npx cypress open - to run cypress.
context('Fő képernyő funckió tesztek.', () => {
  beforeEach(() => {
    cy.visit("localhost/mainscreen/main.html");
  })
  
  it("A 'Jatek' gomb megnyomásával áttölt a karater és pályaválasztóba.", () => {
    cy.get("#goToGame").click();
    cy.url().should("eq","http://localhost/character_selection/character_selection.html");
  })

  it("A 'Ranglista' gomb megnyomásával eljutok a ranglista gomb kijelzőre.", () =>{
    cy.get("#goToScoreboard").click();
    cy.url().should("eq","http://localhost/scoreboard/scoreboard.php");
  })

  it("A 'Bug' icon megnyomásával megjelenik a BugReport beküldő form és annak elemei.",() =>{
    cy.get("#bugReport").click();
    const bugReportContainer = cy.get(".bugReportContainer");
    //Itt maga a bugReport beküldéséhez tartozó komponenseket tartalmazó div láthatóságának vizsgálata.
    bugReportContainer.should("be.visible");
    //Itt a text area, illetve a megjelenő gombok vizsgálata.
    bugReportContainer.within(() => {
      cy.get(".sendButton").should("be.visible");
      cy.get(".closeButton").should("be.visible");
      cy.get(".textArea").should("be.visible");
    })
    cy.get(".closeButton").click();
  })
})
