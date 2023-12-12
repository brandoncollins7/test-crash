import {getGreeting} from '../support/app.po'

describe('test-crash-e2e', () => {
  beforeEach(() => cy.visit('/'))

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword')

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains(/Welcome/)

    cy.fixture('test.png').then((file) => {
      cy.get('input[type=file]').selectFile({
        contents: file,
        fileName: 'test.png',
        mimeType: 'image/png'
      })
    })
  })
})
