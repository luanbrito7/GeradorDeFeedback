Feature: As an administrator,
I want to register teaching assistants 
So that I can manage The Huxley students

Scenario: Successful teaching assistant registration
Given that i am logged as a Admin user, "abcd", with password "senha123"
Given that i am at the "Register Teaching Assistant" page
Given that i cant see a teaching assistant with name "Rafael" and login "rma7"
When i fill the fields, name with "Rafael" and login with "rma7"
And i submit to register the teaching assistant
Then i can see the confirmation message "Invite succesfully sent to email rma7@cin.ufpe.br"
Then i can see a student with name "Rafael", login "rma7", and status "pending"