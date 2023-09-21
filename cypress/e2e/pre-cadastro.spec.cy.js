///<reference types="cypress"/>
import { faker } from "@faker-js/faker";


describe('Funcionalidade Pré-Cadastro', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    it('Deve criar o registro na ebac-shop e completar o pré-cadastro', () => {
        let nomefaker = faker.name.firstName()
        let sobrenome = faker.name.lastName()
        let emailfaker = faker.internet.email()
        let senhaFaker = faker.internet.password()
        //REGISTRO
        cy.get('#reg_email').type(emailfaker)
        cy.get('#reg_password').type(senhaFaker)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain.text', 'Olá')
        // PRÉ-CADASTRO
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomefaker)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button')
        .click()
        cy.get('.woocommerce-message').should('contain.text','Detalhes da conta modificados com sucesso.')

    });

    it('Deve emitir uma mensagem de erro para cadastro com email pendente', () => {
        let senhaFaker = faker.internet.password()

        cy.get('#reg_password').type(senhaFaker)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Erro: Informe um endereço de e-mail válido.')
    });
});
