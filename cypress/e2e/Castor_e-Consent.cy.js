describe('The Castor_eConsent homepage - Login page',
    () => {
        //      const dev = ('https://dev.castorconsent.com//')
        const stage = ('https://staging.keycloak.castoredc.org/auth/realms/castor-econsent/protocol/openid-connect/auth?client_id=econsent&redirect_uri=https%3A%2F%2Fdev.castorconsent.com%2F&state=75a34e76-7170-4564-871e-9922ae346bc5&response_mode=fragment&response_type=code&scope=openid&nonce=180266fd-ab67-44ed-9cf4-c3d1a39b1556')
        it('User navigates to Castors e-Consent login page',
            () => {
                cy.visit(stage)
            })

        it('Verifies that the page that was loaded is indeed the eConsent Log in page', () => {
            // cy.url()
            cy.contains('eConsent')
            cy.url().should('include', 'castoredc') // ASSERTIONS => true
            cy.contains('Log in')//.should('include', 'Log in')
            cy.url().should('include', 'castor-econsent') // ASSERTIONS => true
        })
    })

        describe('User logs in to the eConsent page - eConsent page',
        () => {

            it('Incorrect Credentials - Tests the login functionality with incorrect credentials - email',
                function () {
               // cy.visit(stage)
                    cy.get('#email').type('incorrectemail@geemail.co.uk')
                    cy.wait(2000)
                    cy.get('#password').type('Aaaa1111.')
                    cy.wait(2000)
                    cy.get('#continue').click()
                    cy.wait(4000)
                    cy.go('back')
                    cy.wait(4000)
                    //cy.contains('Email and password combination not recognised.\n')
                    //Asserts here, user should see a warning saying something like, 'incorrect username...etc'
                });

            it('Incorrect Credentials - Tests the login functionality with incorrect credentials - password', function () {
                cy.get('#email').type('nathan_oj@outlook.com')
                cy.wait(2000)
                cy.get('#password').type('IncorrectPasword0987654321??1.')
                cy.wait(2000)
                cy.get('#continue').click()
                cy.wait(4000)
                cy.go('back')
                cy.wait(4000)
                //cy.contains('Email and password combination not recognised.\n')
                //Asserts here, user should see a warning saying something like, 'incorrect username...etc'
            });
            it ('Correct credentials - User enters email as username into the email textbox on the e-Consent login page',
                () => {
                    cy.getCookies() // Get all cookies
                    cy.visit('https://staging.keycloak.castoredc.org/auth/realms/castor-econsent/protocol/openid-connect/auth?client_id=econsent&redirect_uri=https%3A%2F%2Fdev.castorconsent.com%2F&state=b2d98aac-7645-4f22-bd1a-3cc3600035ac&response_mode=fragment&response_type=code&scope=openid&nonce=ffb3ab0c-15b2-461d-83f2-893bed7dceeb')
                    cy.get('#email').type('nathan_oj@outlook.com')
                    cy.wait(2000)
                    cy.get('#password').type('Aaaa1111.')
                    cy.wait(2000)
                    cy.get('#continue').click()
                    cy.wait(4000)
                    //    cy.go('back')
                });
        });

describe('Verify that the Login is successful.',
    () => {

        it('User confirms that the page loaded is actually the eConsent page',
            () => {
                //cy.visit(stage)
            })
        it('User is able to see all Active studies ', function () {

        });
    })


describe('Validations for the Add Subject Page.',
    () => {

        it('Below the language drop down, user must see the warning that says "Please enter a language\n' +
            '\n"',
            () => {
                //cy.visit(stage)
            })
        it('User must see "Please select a consent form\n' +
            '\n" below the "Add consent from" drop down ',
            function () {

            });
        it('User must see "Subject email address is required\n' +
            '\n" below the email address text box ',
            function () {

            });
    })



describe('Successfully create subjects in the Add subject page in eConsent.',
            () => {

                it('Navigates to the Subjects section of the page',
                    () => {
                        //cy.visit(stage)
                    })
                it('Verifies that the subject section opens successfully ', function () {
                    //cy.visit(stage)
                });
                it('User clicks Add subject ', function () {

                });
                it('Verifies that the Add Subject page loads successfully ', function () {

                });
                it('User clicks the Site dropdown in order to select a site ', function () {

                });
                it('Verifies that the site has been selected from the dropdown successfully ',
                    function () {

                    });
                it('User clicks the language drop down in order to select a language ',
                    function () {

                    });
                it('Verifies that a language has been selected from the dropdown successfully ',
                    function () {

                    });
                it('User clicks the Add consent form dropdown in order to make a selection ',
                    function () {

                    });
                it('Verifies that consent form has been selected from the dropdown successfully ',
                    function () {

                    });
                it('User selects Yes or No from the radio with the header that says "Send an invitation to Subjects" ', function () {

                });
                it('User enters subject email address in the email address text box provided\n ', function () {

                });
                it('User clicks the "Add Subject" button ', function () {

                });

                it('Verifies that a Subject has been added successfully ', function () {

                });

            })

//            it('Tests the Login functionality with an valid username & Password',
//             () => {
//                 cy.visit('/')
//                 cy.get('[data-testid="username"]').type('bodebode@hotmail.co.uk')
//                 cy.wait(2000)
//                 cy.get('[data-testid="password"]').type('Aaaa1111.')
//                 cy.wait(2000)
//                 cy.get('[data-testid="submit"]').click()
//                 cy.wait(2000)



//         it ('Verifies that the default server is the UK server',() => {
//             cy.url().should('include', 'uk.castoredc') // ASSERTIONS => true
//             cy.contains('United Kingdom') // ASSERTIONS => true
//         })
//
//         it('Tests the Login functionality with an invalid username',
//             () => {
//                 cy.visit('/')
//                 cy.get('[data-testid="username"]').type('random_incorrect_=-1921@hgooglemail.com')
//                 cy.wait(2000)
//                 cy.get('[data-testid="password"]').type('Aaaa1111.')
//                 cy.wait(2000)
//                 cy.get('[data-testid="submit"]').click()
//                 cy.wait(2000)
//                 cy.contains('You have entered an invalid username or password')
//             })
//
//         it('Tests the Login functionality with an valid username & Password',
//             () => {
//                 cy.visit('/')
//                 cy.get('[data-testid="username"]').type('bodebode@hotmail.co.uk')
//                 cy.wait(2000)
//                 cy.get('[data-testid="password"]').type('Aaaa1111.')
//                 cy.wait(2000)
//                 cy.get('[data-testid="submit"]').click()
//                 cy.wait(2000)
//                 //cy.contains('You have entered an invalid username or password')
//             })
//
//         it('Verifies that the Login authentication process is successful', function () {
//             cy.url()
//             cy.location('href')
//             cy.url().should('include', 'uk.castoredc.com/studies') // ASSERTIONS => true
//         });
        //});
//
//
// describe('Study Structure - Create Visit',
//     () => {
//         const x = ('https://uk.castoredc.com/')
//         it('If there are already lists of Studies, users can see them',
//             () => {
//                 cy.contains('My Studies')
//                 cy.contains('Not Live')
//             })
//         it('Verifies that User is able to access the Study Structure link',
//             () => {
//                 //cy.contains('Study structure')
//             })
//     })
// // describe('This is to test the Login functionality', () => {
// //     beforeEach()=>{
// //     }
// //         cy.visit('/')
// //     })
//
//
// //
// // describe('This is to test the Login functionality', () => {
// //     beforeEach() => {
// //         cy.visit('/')
// //     })
// //     it('Enter incorrect login details ', function () {
// //         cy.get()
// //     });
// // })
//
//
// // it('visits base url', () => {
// //     cy.visit(x)
// // })