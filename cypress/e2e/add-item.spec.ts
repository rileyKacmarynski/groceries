/// <reference types="cypress" />

describe('Adding Groceries', () => {
	it('allows adding groceries', () => {
		const item = 'pickles'

		cy.visit('/')

		cy.get('main form input[name="item-text"]').type(item)
		cy.get('main form button[type="submit"]').click()

		cy.get('main ul').should('contain.text', item)
	})
})
