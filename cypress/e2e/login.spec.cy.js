///<reference types="cypress"/>

describe('Funcionalidade de login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
        cy.get('.icon-user-unfollow').click()
    });
    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login normalmente', () => {

        cy.get('#username').type('testejpp@ebac.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('#rememberme').click()
        cy.get('.woocommerce-form > .button').click()
        //validação!
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
            .should('contain.text', 'Olá')
    });

    it('Deve emitir uma mensagem de erro ao inserir o usario ou email inválido', () => {

        cy.get('#username').type('teste@ebac.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        //validação!
        cy.get('.woocommerce-error').should('contain.text', 'Verifique novamente ou tente seu nome de usuário.')
    });

    it('Deve emitir uma mensagem de erro ao inserir a senha inválida', () => {

        cy.get('#username').type('testejpp@ebac.com')
        cy.get('#password').type('test.com')
        cy.get('.woocommerce-form > .button').click()
        //validação!
        cy.get('.woocommerce-error').should('contain.text', 'Erro: a senha fornecida para o e-mail testejpp@ebac.com está incorreta')
    })
   
})
