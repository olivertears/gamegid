import { orderList, platformList } from '../../src/consts';

context('Catalog: game request settings', () => {
  it('visit the main page', () => {
    cy.visit('http://localhost:3000');
  });

  it('should find the search input and type "Perfect"', () => {
    cy.get('#search').type('abc');
  });

  it('should find the ordering selector and choose "Rating ↑" ordering', () => {
    cy.get('#orderingSelect').parent().click();
    cy.findByRole('option', {
      name: orderList[1].name,
    }).click();
  });

  it('should find the platforms filter and choose "iOS" platform', () => {
    cy.get('#platformFilter').parent().click();
    cy.findByRole('option', {
      name: platformList[3],
    }).click();
  });
});
