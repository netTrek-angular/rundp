describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=uicomponent--primary&args=val:hello+world;'));
  it('should render the component', () => {
    cy.get('rp-ui').should('exist');
  });
});