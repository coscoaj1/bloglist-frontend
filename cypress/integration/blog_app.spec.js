describe('Blog app', function () {
	beforeEach(function () {
		cy.request('POST', 'http://localhost:3000/api/testing/reset');
		const user = {
			name: 'whitey',
			username: 'WhiteKitty',
			password: 'evilKitty1121',
		};
		cy.request('POST', 'http://localhost:3001/api/users', user);
		cy.visit('http://localhost:3000');
	});

	it('Login form is shown', function () {
		cy.visit('http://localhost:3000');
		cy.contains('Login to Blogs');
	});

	describe('Login', function () {
		it('succeeds with correct credentials', function () {
			cy.contains('log in').click();
			cy.get('#username').type('WhiteKitty');
			cy.get('#password').type('evilKitty1121');
			cy.get('#login-button').click();

			cy.contains('whitey logged in');
		});
	});
});
