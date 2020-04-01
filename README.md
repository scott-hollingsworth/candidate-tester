# README #

This README documents the necessary steps to test a candidate's submission for the Web Crawler exercise.

### What is this repository for? ###

This pipeline is designed to test the candidate on the following criteria:

Gate 1 - Commits: We check the number of commits and make sure it’s more than 2.

Gate 2 - README Instructions: Since we are providing the README file and it contains build / run instructions, all we do here is verify it’s been modified. It is left to the peer interviewer to ensure the README file is written “effectively (spelling, language, structure)”. 

Gate 3 - Test: Use sonar to check if test coverage is greater than 0% and that all tests pass.

Gate 4 - Output: Call the webcrawler service with the static website and compare the JSON response with an expected value. 

### How do I get set up? ###

To test a candidate's submission, follow these steps:
* Create a branch titled programminglanguage/candidates-name - EX: java/john-smith
* Currently available languages/branch names are java, dotnet, and javascript
* In this branch, find the folder associated with the chosen language ie java-webcrawler for Java submissions
* Replace the contents of this folder with a copy of the candidates files and subdirectories
* Push the changes to the branch and check the Bitbucket build pipeline status for your branch
* Report the results to the recruiter

### Who do I talk to? ###

* Repo owner or admin: Scott Hollingsworth (Slack: @Scott Hollingsworth)
* Other community or team contact: Chris Ashurst (Slack: @frostiebot), Chris Decker(Slack: @Decker)