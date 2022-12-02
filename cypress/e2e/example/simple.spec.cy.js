


describe('my first cypress test', () => {
    it('true should be true', () => {
        expect (true).to.equal(true)

    })

    it.only('browser actions', () => {
        cy.visit('http://example.com/' ,{ timeout:10000})

    })

    it('true should be 5', () => {
        expect (5).to.equal(5)

    })
})

describe('another describe block', () => {
    it('false should be false', () => {
        expect (false).to.equal(false)
    })
})