/// <reference types="cypress" />

describe('Removing Items', () => {
	it('removes an item when clicking the checkbox', () => {
		const numberOfItems = 5
		const firstItem = 'bread'
		cy.visit('/')

		cy.findByLabelText('Grocery list')
			.find('li:first-child')
			.findByRole('checkbox')
			.click()

		cy.findByLabelText('Grocery list').findByText(firstItem).should('not.exist')

		cy.findByLabelText('Grocery list')
			.findAllByRole('listitem')
			.should('have.length', numberOfItems - 1)
	})
})
