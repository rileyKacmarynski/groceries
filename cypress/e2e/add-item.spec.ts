/// <reference types="cypress" />

describe('Adding Groceries', () => {
	it('allows adding groceries', () => {
		const item = 'pickles'

		cy.intercept({
			method: 'POST',
			url: 'http://localhost:3001/list'
		}).as('addItem')

		cy.intercept(
			{
				method: 'GET',
				url: 'http://localhost:3001/list'
			},
			[
				{ id: 1, text: 'bread' },
				{ id: 2, text: 'milk' }
			]
		).as('fetchItems')

		cy.visit('/')

		cy.wait('@fetchItems')

		cy.get('main form input[name="item-text"]').type(item)
		cy.get('main form button[type="submit"]').click()

		cy.wait('@addItem')

		cy.get('main ul li:first').should('have.text', item)
	})
})
