/// <reference types="cypress" />

describe('Listing Groceries', () => {
	it('shows groceries previously added to list', () => {
		cy.visit('/')

		cy.get('main ul li:first').should('have.text', 'bread')
	})
})
