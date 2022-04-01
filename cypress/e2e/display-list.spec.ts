/// <reference types="cypress" />

describe('Listing Groceries', () => {
	it('shows groceries previously added to list', () => {
		cy.intercept(
			{
				method: 'GET',
				url: 'http://localhost:3001/list'
			},
			[
				{ id: 1, text: 'bread' },
				{ id: 2, text: 'milk' }
			]
		)

		cy.visit('/')

		cy.get('main ul li:first').should('have.text', 'bread')
	})
})
