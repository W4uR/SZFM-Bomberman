context('A karakter választó képernyő funckió teszjei.', () => {
  beforeEach(() => {
      cy.visit("localhost/mainscreen/main.html");
      cy.get("#goToGame").click();
    })
   
  function compareImages(image1Base64, image2Base64) {
    return new Promise((resolve) => {
      const img1 = new Image();
      const img2 = new Image();
  
      img1.onload = () => {
        img2.onload = () => {
          const canvas1 = document.createElement('canvas');
          const canvas2 = document.createElement('canvas');
          const context1 = canvas1.getContext('2d');
          const context2 = canvas2.getContext('2d');
  
          canvas1.width = img1.width;
          canvas1.height = img1.height;
          canvas2.width = img2.width;
          canvas2.height = img2.height;
  
          context1.drawImage(img1, 0, 0);
          context2.drawImage(img2, 0, 0);
  
          const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
          const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);
  
          const pixels1 = imageData1.data;
          const pixels2 = imageData2.data;
          let difference = 0;
  
          for (let i = 0; i < pixels1.length; i++) {
            if (pixels1[i] !== pixels2[i]) {
              difference++;
            }
          }
  
          const totalPixels = imageData1.width * imageData1.height;
          const percentageDifference = (difference / (totalPixels * 4)) * 100;
  
          resolve(percentageDifference);
        };
        img2.src = 'data:image/png;base64,' + image2Base64;
      };
      img1.src = 'data:image/png;base64,' + image1Base64;
    });
  }
  
  it("A map változik a gomb hatására.", () => {
    cy.wait(200);
    cy.get('#mapImg').invoke('attr', 'src').then(imageSrc1 => {
      const image1Base64 = imageSrc1.split(';base64,')[1];
      cy.get('.map.stepper').eq(1).click();
      cy.get('#mapImg').should('have.attr', 'src').then(imageSrc2 => {
        const image2Base64 = imageSrc2.split(';base64,')[1];
        compareImages(image1Base64, image2Base64)
          .then((differenceValue) => {
            expect(differenceValue).to.be.greaterThan(30);
          })
          .catch((error) => {
            cy.log('Error comparing images:', error);
          });
      });
    });

    cy.reload();

    cy.wait(200);
    
    cy.get('#mapImg').invoke('attr', 'src').then(imageSrc1 => {
      const image1Base64 = imageSrc1.split(';base64,')[1];
      cy.get('.map.stepper').eq(0).click();
      cy.get('#mapImg').should('have.attr', 'src').then(imageSrc2 => {
        const image2Base64 = imageSrc2.split(';base64,')[1];
        compareImages(image1Base64, image2Base64)
          .then((differenceValue) => {
            expect(differenceValue).to.be.greaterThan(30);
          })
          .catch((error) => {
            cy.log('Error comparing images:', error);
          });
      });
    });
  })
  
  
  it("A játékos nevek megfelelően betöltődnek", () => {
    let player1 = "TestP1";
    let player2 = "TestP2";
    let player1Input = cy.get('input.player1');
    let player2Input = cy.get('input.player2');
    player1Input.type(player1);
    player2Input.type(player2);
    cy.get('button.player1.stepper.skin').eq(0).click().click().click();
    cy.get('button.player2.stepper.skin').eq(1).click().click();
    cy.get('.startGame').click();
    cy.url().should("eq","http://localhost/game/game.html");
    cy.get('.name').eq(0).should("have.text",player1);
    cy.get('.name').eq(1).should("have.text",player2);
  })

  it("A játékosok skinje megfelelően betöltődik a játékba.", () => {
    let player1 = "TestP1";
    let player2 = "TestP2";
    let player1Input = cy.get('input.player1');
    let player2Input = cy.get('input.player2');
    
    player1Input.type(player1);
    player2Input.type(player2);
    
    cy.get('button.player1.stepper.skin').eq(1).click().click().click();
    cy.get('button.player2.stepper.skin').eq(1).click().click();

    cy.get('img.player1.skin').invoke('attr', 'src').then(imageSrc1 => {
      cy.get('img.player2.skin').invoke('attr', 'src').then(imageSrc2 => {
        const image1Base64 = imageSrc1.split(';base64,')[1];
        const image2Base64 = imageSrc2.split(';base64,')[1];
        cy.get('.startGame').click();
        cy.wait(200);
        cy.get('img[alt="Egyes játékos ikonja."]').should('have.attr', 'src').then(imageSrc3 => {
          cy.get('img[alt="Kettes játékos ikonja."]').should('have.attr', 'src').then(imageSrc4 => {
            const image3Base64 = imageSrc3.split(';base64,')[1];
            const image4Base64 = imageSrc4.split(';base64,')[1];
            compareImages(image1Base64, image3Base64)
            .then((differenceValue) => {
              expect(differenceValue).to.equal(0);
            })
            .catch((error) => {
              cy.log('Error comparing images:', error);
            });
            compareImages(image2Base64, image4Base64)
            .then((differenceValue) => {
              expect(differenceValue).to.equal(0);
            })
            .catch((error) => {
              cy.log('Error comparing images:', error);
            });
          });
        });
      });
    });
  });
  
  it("A karater skin-ek megfelelően betöltődnek az adatbázisból.", () => {
    let player1 = "TestP1";
    let player2 = "TestP2";
    let player1Input = cy.get('input.player1');
    let player2Input = cy.get('input.player2');
    
    player1Input.type(player1);
    player2Input.type(player2);
    
    cy.get('button.player1.stepper.skin').eq(1).click().click().click();
    cy.get('button.player2.stepper.skin').eq(1).click().click();

    cy.get('img.player1.skin').invoke('attr', 'src').then(imageSrc1 => {
      cy.get('img.player2.skin').invoke('attr', 'src').then(imageSrc2 => {
        const image1Base64 = imageSrc1.split(';base64,')[1];
        const image2Base64 = imageSrc2.split(';base64,')[1];
        cy.get('.loadPlayerSkins').click();
        cy.get('img.player1.skin').should('have.attr', 'src').then(imageSrc3 => {
          cy.get('img.player2.skin').should('have.attr', 'src').then(imageSrc4 => {
            const image3Base64 = imageSrc3.split(';base64,')[1];
            const image4Base64 = imageSrc4.split(';base64,')[1];
            compareImages(image1Base64, image3Base64)
            .then((differenceValue) => {
              expect(differenceValue).to.equal(0);
            })
            .catch((error) => {
              cy.log('Error comparing images:', error);
            });
            compareImages(image2Base64, image4Base64)
            .then((differenceValue) => {
              expect(differenceValue).to.equal(0);
            })
            .catch((error) => {
              cy.log('Error comparing images:', error);
            });
            });
          });
        });
      });
    });

    it("A 'Rajta!' gomb csak akkor működik, ha a játékosok beírták a nevüket.", () => {
      const startButton = cy.get('button.startGame');
      const player1 = "TestP1";
      const player2 = "TestP2";
      const player1Input = cy.get('input.player1');
      const player2Input = cy.get('input.player2');
  
      cy.wait(100);
      startButton.should('be.disabled');
  
      player2Input.type(player2);
      cy.wait(100);
      startButton.should('be.disabled');
  
      player1Input.type(player1);
      player2Input.clear();
      cy.wait(100);
      startButton.should('be.disabled');
  
      player2Input.type(player2);
      startButton.should('be.enabled');
  });
  
})
  