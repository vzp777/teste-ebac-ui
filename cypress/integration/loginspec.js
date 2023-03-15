/// <reference types="cypress" />


context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') 
    });
  
 it('Deve fazer login com sucesso', () => {
     
   cy.get('#username').type('aluno_ebac@teste.com')
   cy.get('#password').type('teste@teste.com')
   cy.get('.woocommerce-form > .button').click()

   cy.get('.page-title').should('contain','Minha conta')
   cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, Jenkins (não é Jenkins? Sair)')
})

it('deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
    
   cy.get('#username').type('ebac@teste.com')
   cy.get('#password').type('teste@teste')
   cy.get('.woocommerce-form > .button').click()

   cy.get('.woocommerce-error > li').should('contain','Erro: a senha fornecida para o e-mail ebac@teste.com está incorreta. Perdeu a senha?')

})

it('deve exibir uma mensagem de erro ao inserir senha invalida', () => {
      
   cy.get('#username').type('aluno_ebac@teste.com')
   cy.get('#password').type('teste@teste')
   cy.get('.woocommerce-form > .button').click()
   cy.get('.woocommerce-error > li').should('contain','Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')

})
    
})