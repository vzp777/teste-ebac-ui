/// <reference types="cypress" />


describe('Funcionalidade pagina de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });



    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Abominable Hoodie')
            .click()

    });
    it('deve adicionar um produto ao carrinho', () => {
        var quantidade = 3 
        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie').click()
            cy.get('.button-variable-item-M').click()
            cy.get('.button-variable-item-Red').click()
            cy.get('.input-text').clear().type(quantidade)
            cy.get('.single_add_to_cart_button').click()

            cy.get('.dropdown-toggle > .mini-cart-items').should('contain',quantidade)
            cy.get('.woocommerce-message').should('contain', quantidade +' × “Abominable Hoodie” foram adicionados no seu carrinho.')
            

});

it('Deve adicionar produtos ao carrinho - usando Comando customizado ', () => {
   cy.addProdutos('Abominable Hoodie',2)
});

it('Deve adicionar produtos ao carrinho - usando Comando customizado ', () => {
    cy.addProdutos('Ajax Full-Zip Sweatshirt','XS','Red',5)
 });

});
