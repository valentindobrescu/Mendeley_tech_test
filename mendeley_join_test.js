
Feature('Mendeley join');

Scenario('join Test', (I) => {

	I.amOnPage('https://www.mendeley.com/');
	I.click('Create account');
	I.wait(1);
	I.appendField('//*[@id="email"]', 'test_user2@example.com');
	I.appendField('//*[@id="first_name"]', 'Test_user');
	I.appendField('//*[@id="last_name"]', 'Test_user');
	I.appendField('//*[@id="password"]', 'Password123');
	I.wait(1);
	I.click('Continue');
	I.wait(1);
	I.selectOption('//*[@id="subject_area"]', 'Computer Science');
	I.selectOption('//*[@id="user_role"]', 'Lecturer');
	I.wait(1);
	I.click('Create account');
	I.wait(1);
	I.seeInCurrentUrl('/newsfeed');
	
});
