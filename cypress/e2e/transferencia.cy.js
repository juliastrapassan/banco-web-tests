describe('Transferencias', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()

    })
    it('Deve transferir quando informo dados e valor válidos', () => {
        //Act
        cy.realizarTransferencia('Maria Oliveira', 'João da Silva', '11')
        //Assert
        cy.VerificarMensagemNoToast('Transferência realizada!')
    })

    it('Deve apresentar erro quando tentar transferir mais que 5 mil sem o token', () => {
        //Act
        cy.realizarTransferencia('Maria Oliveira', 'João da Silva', '6000')
        //Assert
        cy.VerificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})