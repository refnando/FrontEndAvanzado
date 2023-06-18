describe('Funcionalidad de Login', () => {
  it('Mi app carga leyendo Home en /', () => {
    // 01 arrange: setup del estado de mi app
    cy.visit('/')
    // 01 Act: interactuar con la app
    cy.get('h1').contains('Home') // 03 Assert
  })
  it('Probar Login como Customer', () => {
    cy.intercept('POST', 'http://localhost:3000/login').as('login')
    // 01 arrange: setup del estado de mi app
    cy.visit('/login')
    // 02 Act: interactuar con la app
    cy.doLogin('drstrange@marvel.com', 'multiverso')
    // cy.get('input[name="email"]').type('drstrange@marvel.com')
    // cy.get('input[name="password"]').type('multiverso')
    // cy.get('button[type="submit"]').click()

    cy.wait('@login')

    cy.get('h1').contains('Dashboard')
  })

  it('Probar Login como ADMIN me lleve a la pagina de home', () => {
    cy.intercept('POST', 'http://localhost:3000/login').as('login')

    cy.visit('/login')

    cy.doLogin('superman@dc.com', 'superman')

    // cy.get('input[name="email"]').type('superman@dc.com')
    // cy.get('input[name="password"]').type('superman')
    // cy.get('button[type="submit"]').click()

    cy.wait('@login')

    cy.get('nav > ul > li:last')

    cy.get('h1').contains('Dashboard')
  })
})
