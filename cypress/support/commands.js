// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

import dayjs from 'dayjs'

// Select Flights
Cypress.Commands.add('selectFlights', (citiesList) => { 

    let cities = []
    let cityFromList = citiesList
    let cityToList = citiesList

    cy.log('List Cities:',(JSON.stringify(citiesList)))

    // Flight From random
    let cityFrom = cityFromList[Math.floor(Math.random() * cityFromList.length)]

    // Flight From removed from original List cities
    cy.log('City Removed', cityFrom)
    const index = cityToList.indexOf(cityFrom)
    cityToList.splice(index, 1)
    // List of Cities without "Flight From"
    cy.log('List Cities without "Flight From"',(JSON.stringify(cityToList)))

    // Flight To random
    let cityTo = cityToList[Math.floor(Math.random() * cityToList.length)]

    // Return "Flight From" and "Flight To"
    cities  =[cityFrom,cityTo]
    cy.log("List with Flight From and Fligh To",(JSON.stringify(cities)))
    return cy.wrap(cities)
})
 
 // Random City 
 Cypress.Commands.add('randomCity', (citiesList) => { 
    let cityRandom = citiesList[Math.floor(Math.random() * citiesList.length)]
    return cy.wrap(cityRandom)
 })


 // Format Date
 Cypress.Commands.add('formatDate', (inputDate) => { 
    
    let dateFormat = dayjs().add(inputDate,'day').format("YYYY-MM-DD")
    return cy.wrap(dateFormat)
 })

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })