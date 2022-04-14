/// <reference types="cypress" />
import * as client from '../../src/api/groceryClient'

describe('Adding Groceries', () => {
	it('allows adding groceries', () => {
		const item = 'pickles'

		cy.stub(client, 'createGroceryItem').resolves()
		cy.stub(client, 'getGroceryList').resolves()

		cy.visit('/')

		cy.findByTestId('item-add-button').click()

		cy.get('main form input[name="item-text"]').type(item)
		cy.get('main form button[type="submit"]').click()

		cy.get('main ul').should('contain.text', item)
	})
})
