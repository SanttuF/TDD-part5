describe('Todo', () => {
  it('front to back to db', () => {
    cy.visit('/')
    cy.get('#textField').type('e2e')
    cy.get('#submitButton').click()

    cy.contains('Hello e2e from backend')
  })
})