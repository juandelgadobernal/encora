// type definitions for Cypress object "cy"
/// <reference types="Cypress" />

import dayjs from 'dayjs'
const today2 = dayjs()

describe('Test Suite POC Encora',function() {
    it('Sample TC', function() {
        //Visit Encora Test  Website
        cy.visit("./site/index.html")

        // Clicking on Fligths from Navigation Menu
        cy.contains('li','Flights').click()

        // Verify Flights page exist
        cy.contains('h1','Flights').should('exist')

        // Select Cities
        cy.get('#flight-from').select("Hermosillo")
        cy.get('#flight-to').select("Merida")

        // Select Dates
        const todaysDate = dayjs().add(1,'day').format("YYYY-MM-DD")
        cy.log(todaysDate)
        cy.get('#departing').type(todaysDate)

        const futureDate = dayjs().add(90,'day').format("YYYY-MM-DD")
        cy.log(futureDate)
        cy.get('#returning').type(futureDate)

        // Click Search
        cy.get('.btn').contains('Search').click()

         // Verify Result page exist
        cy.contains('h1','Results').should('exist')

        // Asc Results
        cy.get('#sort').select("Price ascending")

         // Verify Table exist
        cy.get('#results').should('exist')

        // Validate Results by Price on Asc order
        cy.get('.flight-card .price').then(($element) => {
            
            for (let y = 0; y < $element.length-1; y++) {

                let storeText = $element[y].textContent.replace(/[^0-9.]/g, '')      
                let storeTextNext = $element[y+1].textContent.replace(/[^0-9.]/g, '')       
                expect(storeTextNext >= storeText).to.be.true
                //cy.log(storeText)

            }
        })
    } )
} )