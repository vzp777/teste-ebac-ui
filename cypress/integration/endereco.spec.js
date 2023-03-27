/// <reference types="cypress" />

import EnderecoPage  from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade enderecos - Faturamento e Entrega', () => {
beforeEach(() => {
   cy.visit('minha-conta') 
   cy.fixture('perfil').then(dados => {
    cy.login(dados.usuario, dados.senha)

   })
 
});


    it('Deve fazer cadastro de faturamento com sucesso', () => {
     EnderecoPage.editarEnderecoFaturamento('Victor','Penna','Google','Brasil','Av Paulista','3100','São Paulo','São Paulo','02338101')
     cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')

        
    });

    it('Deve fazer cadastro de faturamento com sucesso usando aarquivo de dados', () => {
      EnderecoPage.editarEnderecoFaturamento(
         dadosEndereco[1].nome,
         dadosEndereco[1].sobrenome,
         dadosEndereco[1].empresa,
         dadosEndereco[1].pais,
         dadosEndereco[1].endereco,
         dadosEndereco[1].numero,
         dadosEndereco[1].Cidade,
         dadosEndereco[1].Estado,
         dadosEndereco[1].Cep,


         )
         cy.get('.woocommerce-error > li').should('contain','Digite um CEP válido.')
 
         
     });


   });




