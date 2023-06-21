class homePage
{
    elements = {
        flightMenuBtn : () => cy.contains('li','Flights')
    }

    clickOnFlight(){
        this.elements.flightMenuBtn().click()
    }

}

module.exports = new homePage()