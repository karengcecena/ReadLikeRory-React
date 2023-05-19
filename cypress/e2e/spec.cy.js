describe('User Profile', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.get(".welcome")
    .find("a")
    .eq(1)
    .click();

    cy.get(".child").as("loginForm");
    
    cy.get("@loginForm")
      .find("form")
      .find("input")
      .eq(0)
      .type("karenc");
      
    cy.get("@loginForm")
      .find("input")
      .eq(1)
      .type("test1");

    cy.get("@loginForm")
      .find(".input_btn")
      .click(); 
  });

  it('Should Display usernames reading progress in title', () => {
    cy.contains('.title h1', "reading progress").should('exist');
  });

  it('Should Display To Be Read List Title', () => {
    cy.get('.alt_child h2')
    .first()
    .should('contain', 'To Be Read:');
  });

  it('Should Display Read List Title', () => {
    cy.get('.alt_child h2')
    .last()
    .should('contain', 'Read:');
  });

  it('Should Display Percent Bar', () => {
    cy.get('.title')
      .find("progress")
      .should('be.visible');
  });

  it('Should Display Percentage', () => {
    cy.get('.title .row').should('contain', '%');
  });
});