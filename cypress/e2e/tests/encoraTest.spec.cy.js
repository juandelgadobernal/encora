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
        cy.visit('./site/index.html')

        // Clicking on Fligths from Navigation Menu
        homePage.clickOnFlight()

        // Verify Flights page exist
        flightsPage.assertFlightPageExist()

        // Select Flights  -- Commands reusable fn 
        cy.randomCity(this.data.cities).then((cityFrom) => {
            cy.log('Select Flight From:', cityFrom)
            flightsPage.selectCityFrom(cityFrom)

            // Delete City from in list to select Flight To
            let cityToList = this.data.cities
            const index = cityToList.indexOf(cityFrom)
            cityToList.splice(index, 1)
            // List of Cities without "Flight From"
            cy.log('List Cities without "Flight From"',(JSON.stringify(cityToList)))
        

            cy.randomCity(cityToList).then((cityTo) => {
                cy.log('Select Flight To:', cityTo)
                flightsPage.selectCityTo(cityTo)
            })
        })   
        

        // Select Dates -- Commands reusable fn 
        cy.formatDate(this.data.nextDay).then((dateFormat) => {
            cy.log('Departing Date: ', dateFormat)
            flightsPage.selectDateFrom(dateFormat)
        })

        cy.formatDate(this.data.futureDay).then((dateFormat) => {
            cy.log('Departing Returning: ', dateFormat)
            flightsPage.selectDateTo(dateFormat)
        })

        // Click Search
        flightsPage.clickSearchFlight()

         // Verify Result page exist
        resultsPage.assertResultPageExist()

        // Click drop down to displaye Asc Results
        resultsPage.sortPriceSelect()

         // Verify Table exist
        resultsPage.assertResultTableExist()

        // Validate Results by Price on Asc order
        resultsPage.validateTResultsAsc()

    })
})