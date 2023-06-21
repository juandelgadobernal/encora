// type definitions for Cypress object "cy"
/// <reference types="Cypress" />

import homePage from "../pages/homePage"
import flightsPage from "../pages/flightsPage"
import resultsPage from "../pages/resultsPage"

describe('Test Suite POC Encora',function() 
{
    before(function(){
        cy.fixture('dataFile').then(function(data){
            this.data=data
        })
    })
    
    it('Sample TC', function() {

        //Visit Encora Test  Website
        cy.visit(this.data.pathIndex)

        // Clicking on Fligths from Navigation Menu
        homePage.clickOnFlight()

        // Verify Flights page exist
        flightsPage.assertFlightPageExist()

        // Select Flights
        let citiesList = this.data.cities

        cy.selectFlights(citiesList).then((cities) => {
            cy.log('Select Flight From:', cities[0])
            flightsPage.elements.flightFrom().select(cities[0])

            cy.log('Select Flight To:', cities[1])
            flightsPage.elements.flightTo().select(cities[1])
        })
        
        // Select Dates
        cy.selectDate(this.data.nextDay).then((selectYYYYMMDD) => {
            cy.log('Departing Date: ', selectYYYYMMDD)
            flightsPage.elements.departingDate().type(selectYYYYMMDD)
        })

        cy.selectDate(this.data.futureDay).then((selectYYYYMMDD) => {
            cy.log('Departing Returning: ', selectYYYYMMDD)
            flightsPage.elements.returningDate().type(selectYYYYMMDD)
        })

        // Click Search
        flightsPage.clickSearchFlight()

         // Verify Result page exist
        resultsPage.assertResultPageExist()

        // Click drop down to displaye Asc Results
        resultsPage.sortPriceSelect()

         // Verify Table exist
        //cy.get('#results').should('exist')
        resultsPage.assertResultTableExist()

        // Validate Results by Price on Asc order
        cy.validateResultsAsc().then((validationResult) => {
            //Validation on commands.js
        })

    })
})