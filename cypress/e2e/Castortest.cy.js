describe('The CastorEDC homepage',
    () => {
        const x = ('https://uk.castoredc.com/')
      it('Navigates to Castors login page',
          () => {
              cy.visit(x)
          })

        it ('Verifies that the page that was loaded is indeed the "Log in" page', () => {
            cy.url()
            cy.url().should('include', 'castoredc') // ASSERTIONS => true
            cy.contains('Log in')//.should('include', 'Log in')
        })

        it ('Verifies that the default server is the UK server',() => {
            cy.url().should('include', 'uk.castoredc') // ASSERTIONS => true
            cy.contains('United Kingdom') // ASSERTIONS => true
        })

        it('Tests the Login functionality with an invalid username',
            () => {
                cy.visit('/')
                cy.get('[data-testid="username"]').type('random_incorrect_=-1921@hgooglemail.com')
                cy.wait(2000)
                cy.get('[data-testid="password"]').type('Aaaa1111.')
                cy.wait(2000)
                cy.get('[data-testid="submit"]').click()
                cy.wait(2000)
                cy.contains('You have entered an invalid username or password')
            })

        it('Tests the Login functionality with an invalid password but a valid email',
            () => {
                cy.visit('/')
                cy.get('[data-testid="username"]').type('bodebode@hotmail.co.uk')
                cy.wait(2000)
                cy.get('[data-testid="password"]').type('incorrect password ;-)')
                cy.wait(2000)
                cy.get('.StyledIcon-sc-1vi2e3o-0').click()
                cy.wait(2000)
                cy.get('[data-testid="submit"]').click()
                cy.wait(2000)
                cy.contains('You have entered an invalid username or password')
            })

        it('Tests the Login functionality with an valid username & Password',
            () => {
                cy.visit('/')
                cy.get('[data-testid="username"]').type('bodebode@hotmail.co.uk')
                cy.wait(2000)
                cy.get('[data-testid="password"]').type('Aaaa1111.')
                cy.wait(2000)
                cy.get('[data-testid="submit"]').click()
                cy.wait(2000)
                //cy.contains('You have entered an invalid username or password')
            })

        it('Verifies that the Login authentication process is successful', function () {
                cy.url()
                cy.location('href')
                cy.url().should('include', 'uk.castoredc.com/studies') // ASSERTIONS => true
        });
    });

// describe('This is to test the Login functionality', () => {
//     beforeEach()=>{
//     }
//         cy.visit('/')
//     })


//
// describe('This is to test the Login functionality', () => {
//     beforeEach() => {
//         cy.visit('/')
//     })
//     it('Enter incorrect login details ', function () {
//         cy.get()
//     });
// })


// it('visits base url', () => {
//     cy.visit(x)
// })
