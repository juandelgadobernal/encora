class flightsPage
{
    elements = {
        flightTitle : () => cy.contains('h1','Flights'),
        flightFrom : () => cy.get('#flight-from'),
        flightTo : () => cy.get('#flight-to'),
        departingDate : () => cy.get('#departing'),
        returningDate : () => cy.get('#returning'),
        searchFlightBtn : () => cy.get('.btn').contains('Search')
    }

    assertFlightPageExist(){
        this.elements.flightTitle().should('exist')
    }
    clickSearchFlight(){
        this.elements.searchFlightBtn().click()
    }

}

module.exports = new flightsPage();