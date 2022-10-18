let describe1 = describe('the castor website',
    () => {
        const x = ('https://uk.castoredc.com/')
      it('Navigates to Castors login page',
          () => {
              cy.visit(x)
          })
    });


// it ('verifies that the page that was loaded is indeed the log in page', () => {
//     cy.url()
//     cy.url().should('include', 'uk.castoredc')
// })



// it('visits base url', () => {
//     cy.visit(x)
// })
