/// <reference types="cypress" />

describe('Adding Groceries', () => {
	const addItem = (item: string) => {
		cy.get('main form input[name="item-text"]').type(item)
		cy.get('main form button[type="submit"]').click()
	}

	it('allows adding groceries', () => {
		const item = 'pickles'

		cy.visit('/')

		addItem(item)

		cy.get('main ul').should('contain.text', item)
	})

	it('shows alert when item is added', () => {
		const item = 'pickles'

		cy.visit('/')

		addItem(item)

		cy.get('[data-cy=alert]').should('contain.text', 'Item added')
	})
})
