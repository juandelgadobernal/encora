class resultsPage
{
    elements = {
        resultsTitle : () => cy.contains('h1','Results'),
        sortPrice : () => cy.get('#sort'),
        resultTable : () => cy.get('#results')
    }

    assertResultPageExist(){
        this.elements.resultsTitle().should('exist')
    }

    sortPriceSelect(){
        this.elements.sortPrice().select("Price ascending")
    }

    assertResultTableExist(){
        this.elements.resultTable().should('exist')
    }

}

module.exports = new resultsPage()