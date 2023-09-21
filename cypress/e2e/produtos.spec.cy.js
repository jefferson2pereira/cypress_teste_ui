///<reference types="cypress"/>

describe('Funcionalidade Produtos', () => {
    var qnt = 4
    before(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')

    });

    it('Deve permitir a inclusão de produtos no carrinho', () => {

        cy.get('ul.page-numbers').contains(2)
            .click()
        cy.get('.product-block').eq(4).click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').click().clear().type(qnt)

        //Mudança de opção: tamanho
        cy.get('.reset_variations').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').click().clear().type(qnt)
        cy.get('.single_add_to_cart_button')
            .click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', qnt)
    })

})