class resultsPage
{
    elements = {
        resultsTitle : () => cy.contains('h1','Results'),
        sortPrice : () => cy.get('#sort'),
        resultTable : () => cy.get('#results'),
        resultTableColPrice : () => cy.get('.flight-card .price')
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

    validateTResultsAsc(){
        this.elements.resultTableColPrice().then(($element) => {
            
            for (let y = 0; y < $element.length-1; y++) {
    
                let storeText = $element[y].textContent.replace(/[^0-9.]/g, '')      
                let storeTextNext = $element[y+1].textContent.replace(/[^0-9.]/g, '')       
                expect(storeTextNext >= storeText).to.be.true
            }
        })

    }

}

module.exports = new resultsPage()