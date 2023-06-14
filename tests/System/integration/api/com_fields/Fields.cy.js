describe('Test that fields API endpoint', () => {
  afterEach(() => cy.task('queryDB', 'DELETE FROM #__fields'));

  it('can deliver a list of fields', () => {
    cy.db_createField({ name: 'automated test field' })
      .then(() => cy.api_get('/fields/article'))
      .then((response) => cy.wrap(response).its('body').its('data.0').its('attributes')
        .its('name')
        .should('include', 'automated test field'));
  });

  it('can create a field', () => {
    cy.db_createCategory({ extension: 'com_fields' })
      .then((categoryId) => cy.api_post('/fields/com_content.article', {
        title: 'automated test field',
        name: 'automated test field',
        label: 'automated test field',
        default_value: '',
        note: '',
        description: '',
        group_id: 0,
        type: 'text',
        required: 1,
        state: 1,
        context: 'com_content.article',
        access: 1,
        language: '*',
        created_time: '2023-01-01 20:00:00',
        modified_time: '2023-01-01 20:00:00',
        params: '',
        fieldparams: '',
        category_id: categoryId,
      }))
      .then((response) => cy.wrap(response).its('body').its('data').its('attributes')
        .its('name')
        .should('include', 'automated test field'));
  });

  it('can update a field', () => {
    cy.db_createField({ name: 'automated test field' })
      .then((id) => cy.api_patch(`/fields/${id}`, { name: 'updated automated test field' }))
      .then((response) => cy.wrap(response).its('body').its('data').its('attributes')
        .its('name')
        .should('include', 'updated automated test field'));
  });

  it('can delete a field', () => {
    cy.db_createField({ name: 'automated test field', state: -2 })
      .then((id) => cy.api_delete(`/fields/${id}`));
  });
});
