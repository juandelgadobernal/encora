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

    selectDateFrom(dateFormat){
        this.elements.departingDate().type(dateFormat)
    }

    selectDateTo(dateFormat){
        this.elements.returningDate().type(dateFormat)
    }

    selectCityFrom(city){
        this.elements.flightFrom().select(city)
    }

    selectCityTo(city){
        this.elements.flightTo().select(city)
    }
}

module.exports = new flightsPage();