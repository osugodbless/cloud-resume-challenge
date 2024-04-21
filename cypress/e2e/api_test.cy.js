describe('update visitor count and then get the updated visitor count', () => {
  context('API tests', () => {
    it('updates visitor count then get updated count', () => {
      cy.api('POST','post-count').its('status').should('equal', 200)
        .then(() => {
          cy.api('GET','get-count').its('status').should('equal', 200)
          .then(body => {
            expect(body).to.not.be.oneOf([undefined, null, ""]);
          });
      })
    })
  })
})