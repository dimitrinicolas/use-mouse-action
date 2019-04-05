// / <reference types="Cypress" />
beforeEach(() => {
  cy.viewport(300, 200).visit('http://localhost:8000');
});

context('Init', () => {
  it('page contains all the elements', () => {
    cy.get('#1').should('exist');
    cy.get('#2').should('exist');
    cy.get('#3').should('exist');
    cy.get('#4').should('exist');
  });
});

context('useMouseDown', () => {
  const id = '#1';

  it('mousedown', () => {
    cy.get(id)
      .trigger('mousedown', { button: 0 })
      .contains('1');
  });

  it('touchstart', () => {
    cy.get(id)
      .trigger('touchstart', { button: 0 })
      .contains('0');
  });

  it('mousedown wrong button', () => {
    cy.get(id)
      .trigger('mousedown', { button: 2 })
      .contains('0');
  });

  it('mousedown then click', () => {
    cy.get(id).trigger('mousedown', { button: 0 });
    cy.wait(100);
    cy.get(id).trigger('click', { button: 2 });
    cy.get(id).contains('1');
  });

  it('click', () => {
    cy.get(id)
      .trigger('click', { button: 0 })
      .contains('1');
  });

  it('focus then enter', () => {
    cy.get(id)
      .focus()
      .trigger('keydown', { keyCode: 8 });
  });
});

context('useMouseUp', () => {
  const id = '#2';

  it('mousedown', () => {
    cy.get(id)
      .trigger('mousedown', { button: 0 })
      .contains('0');
  });

  it('touchstart', () => {
    cy.get(id)
      .trigger('touchstart', { button: 0 })
      .contains('0');
  });

  it('mouseup', () => {
    cy.get(id)
      .trigger('mouseup', { button: 0 })
      .contains('1');
  });

  it('touchend', () => {
    cy.get(id)
      .trigger('touchend')
      .contains('0');
  });

  it('mouseup wrong button', () => {
    cy.get(id)
      .trigger('mouseup', { button: 2 })
      .contains('0');
  });

  it('click', () => {
    cy.get(id)
      .trigger('click', { button: 0 })
      .contains('1');
  });

  it('focus then enter', () => {
    cy.get(id)
      .focus()
      .trigger('keydown', { keyCode: 8 });
  });
});

context('useMouseAction empty', () => {
  const id = '#3';

  it('mousedown', () => {
    cy.get(id)
      .trigger('mousedown', { button: 0 })
      .contains('0');
  });

  it('touchstart', () => {
    cy.get(id)
      .trigger('touchstart', { button: 0 })
      .contains('0');
  });

  it('mouseup', () => {
    cy.get(id)
      .trigger('mouseup', { button: 0 })
      .contains('0');
  });

  it('touchend', () => {
    cy.get(id)
      .trigger('touchend', { button: 0 })
      .contains('0');
  });

  it('click', () => {
    cy.get(id)
      .trigger('click', { button: 0 })
      .contains('1');
  });

  it('focus then enter', () => {
    cy.get(id)
      .focus()
      .trigger('keydown', { keyCode: 8 });
  });
});

context('useMouseDown and touch enabled', () => {
  const id = '#4';

  it('mousedown', () => {
    cy.get(id)
      .trigger('mousedown', { button: 0 })
      .contains('1');
  });

  it('touchstart', () => {
    cy.get(id)
      .trigger('touchstart', { button: 0 })
      .contains('1');
  });

  it('mousedown wrong button', () => {
    cy.get(id)
      .trigger('mousedown', { button: 2 })
      .contains('0');
  });

  it('mousedown then click', () => {
    cy.get(id).trigger('mousedown', { button: 0 });
    cy.wait(100);
    cy.get(id).trigger('click', { button: 2 });
    cy.get(id).contains('1');
  });

  it('click', () => {
    cy.get(id)
      .trigger('click', { button: 0 })
      .contains('1');
  });

  it('focus then enter', () => {
    cy.get(id)
      .focus()
      .trigger('keydown', { keyCode: 8 });
  });
});

context('useMouseUp and touch enabled', () => {
  const id = '#5';

  it('mousedown', () => {
    cy.get(id)
      .trigger('mousedown', { button: 0 })
      .contains('0');
  });

  it('touchstart', () => {
    cy.get(id)
      .trigger('touchstart', { button: 0 })
      .contains('0');
  });

  it('mouseup', () => {
    cy.get(id)
      .trigger('mouseup', { button: 0 })
      .contains('1');
  });

  it('touchend', () => {
    cy.get(id)
      .trigger('touchend')
      .contains('1');
  });

  it('mouseup wrong button', () => {
    cy.get(id)
      .trigger('mouseup', { button: 2 })
      .contains('0');
  });

  it('click', () => {
    cy.get(id)
      .trigger('click', { button: 0 })
      .contains('1');
  });

  it('focus then enter', () => {
    cy.get(id)
      .focus()
      .trigger('keydown', { keyCode: 8 });
  });
});
