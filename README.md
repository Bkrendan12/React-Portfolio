# 20 React: React Portfolio

## Your Task

Being a web developer means being part of a community. You’ll need a place not only to share your projects while you're applying for jobs or working as a freelancer but also to share your work with other developers and collaborate on projects.

Your task is to create a portfolio using your new React skills, which will help set you apart from other developers whose portfolios don’t use the latest technologies.

You’ll deploy this application to GitHub Pages. Follow the instructions in the Git Guide or consult the [Create React App Docs on GitHub Pages](https://create-react-app.dev/docs/deployment/#github-pages) to create a build that you can deploy.

**Important:** Be sure to push your codebase to the default branch in GitHub -- NOT your built and deployed code. Ensure this happens by using the `gh-pages` branch to host the deployed application's build.

## User Story

```md
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```

## Acceptance Criteria

GIVEN a single-page application portfolio for a web developer

WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer

WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio

WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted

WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted

WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default

WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them

WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories

WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message

```

WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required



WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address

WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies

WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
```

## Mock-Up

The following animation shows the web application's appearance and functionality:

![User clicks through About Me, Portfolio, Resume, and Contact sections on the webpage and enters information on Contact page.](./Assets/20-react-homework-demo-01.gif)

## Getting Started

You’ll use `create-react-app` to build your portfolio, which will include the following:

- A single `Header` component that appears on multiple pages

- A single `Navigation` component within the header that will be used to conditionally render the different sections of your portfolio

- A single `Project` component that will be used multiple times in the Portfolio section

- A single `Footer` component that appears on multiple pages

**Note:** Because this application doesn’t include a back end or connect to an API, the contact form doesn't need to save this information right now. You'll add back-end functionality in the next few weeks. In the meantime, consider including your email address and phone number on the Contact page.

### Projects

For each project that is featured in your portfolio, include the following:

- An image of the deployed application (either a short animated GIF or screenshot)

- The title of the project

- A link to the deployed application

- A link to the corresponding GitHub repository

- Choose a color palette that distinguishes your site from the default Bootstrap theme and unstyled HTML sites. Refer to resources like [Coolors](https://coolors.co/) or another color scheme generator to help you create something that will stand out.

- Consider using animations and React component libraries. Note that this will not affect your grade, but it might impact how potential employers gauge your knowledge.

  - Application must be deployed to GitHub Pages.

### Deployment: 32%

- Application deployed at live URL.

- Application loads with no errors.

- Application GitHub URL submitted.

- GitHub repository contains application code.

## Review

You are required to submit BOTH of the following for review:

- The URL of the functional, deployed application.

- The URL of the GitHub repository, with a unique name and a README that describes the project.

---

© 2021 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

# Team-Profile-Generator

## Project Title

Team Profile Generator

## Link to project repository:

[Github-Repo](https://github.com/Bkrendan12/Team-Profile-Generator)

## Link to Project Video Walk-through

[Link-Application-video-walkthrough](https://www.youtube.com/watch?v=tZYcRLTnYsA)

## Screenshots for Application

![Untitled_ Jun 30, 2021 2_49 PM](https://user-images.githubusercontent.com/59030105/124018218-9eb67e00-d9b5-11eb-9572-191a0233ce22.gif)

## Tech Used

html, css, javascript, node.js

## Motivation

I wanted to create a simple note taking application where the user can keep track of his notes for the week. I would personally use it as a weekly planner, but it is at heart a simple note taker so youre more than welcome to use it as you feel neccessary.

## GIVEN a note-taking application

```
WHEN I open the Terminal in Node.js
THEN I am presented with prompts asking about employee information

WHEN I the prompts are presented
THEN I am instructed to enter an amount of employees you want to add, their names, roles, github, email based on which employee you choose.

WHEN I finish filling out all the information for the employee cards
THEN an html file is generated in the file directory

WHEN I oepn the html in the browser
THEN I am presented with all of the cards the user generated in the node terminal
```

## Contact Information

- Brendan Kurylo
- 603-818-0578
- bkrendan12@gmail.com
- Rollinsford, NH

## Credits include:

All work created by Brendan Kurylo.

UNH Bootcamp © Brendan Kurylo
