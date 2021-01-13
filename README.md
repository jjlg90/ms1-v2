<h1 align="center">User Centric Frontend Development Milestone Project - JJLG</h1>

![responsive-design](/assets/images/responsive-design.png)

This project consists of an online resume, to become portfolio once the developer's gets more experience on the web development field and worked in new and original projects. 

Check out the [Live Project](https://jjlg90.github.io/ms1-v2/) here!

## User Experience (UX)

## User stories

### First time visitor
* As a First Time Visitor, I expect the purpose of the website to be explicit.
* As a First Time Visitor, I consider smooth navigation through content to be a key aspect.
* As a First Time Visitor, I want the content of the website to be relevant and concise. 
* As a First Time Visitor, I value having access to links related to the content.

### Returning visitor
* As a Returning Visitor, I would like to see updated information about the developer's latest projects.
* As a Returning Visitor, I want to have ease of access to contact the developer.

### Frequent user
* As a Frequent User, I want to check which resources and elements have been used for new projects.
* As a Frequent User, I want to be able to propose new projects or ideas.
 
 
 ### Strategy

 #### Project Goals 
 To provide information about the developer and his work to potential employers, contractors and collaborators.
 
 #### Developer Goals: 
 To expose designing capabilities from the start. To showcase an attractive, well-designed resume website that evolves as time passes and experience cumulates.

### Scope 

#### Features
* The project is presented on a single page format with a fixed navigation menu.
* Fully responsive on different screen sizes.
* It counts with a contact form inside a modal pop-up.
* Download link for a PDF copy of the physical version of the developer's resume.

#### Future Features
* Portfolio section to display other projects.
* Interactive elements.
* Aesthetic animations.
### Structure 

#### Information
 The content is grouped in 4 different sections
* About me: introduction, motivation, relevant personal info, education.
* Skills: progress bars with showcasing diverse skills grouped in 4 categories: Coding, Languages, IT and Culinary.
* Experience: timeline with a work history list.
* Education: five image links to external websites for every relevant institution attended. Name of the institute, title aquired and date of studies written below.

### Skeleton
For the wireframes, Figma software has been used to lay out the foundations of the website.

Check out the [Wireframes](https://www.figma.com/file/GPEZVsOYZX8YZx683e31gn/MS1-v2?node-id=0%3A1&viewport=331%2C557%2C0.1710612028837204) here!

### Surface
 The website is focused on displaying only important information. The content is easy to navigate and is neatly divided in sections, with every section having a complete different design's structure, as to keep users attentive.

 The colour palette was chosen with night/dark mode in mind. Potential users will be professionals of the field  that expend a lot of their time in front of screens. An easy to look at, not overly bright design is what was chosen for the project. 
* Two shades of grey for backgrounds. 
* Two shades of white for text.
* Two shades of yellow for details and effects.

The fonts are:
* Cinzel for headers. Uppercase and bold, is sure to catch the user's attention.
* Raleway for content. A more friendly approach for longer pieces of text.

## Code and Credits

### 1. Header 
Big JJLG Header with a right aligned collapsible navigation bar. Fixed with a javascript shade effect and smooth transition.

##### Credits
* Header style inspired by CSS project "Love Running", Code Institute.
* Javascript shade helped by this [tutorial](https://www.youtube.com/watch?v=Tdkuk9uDTfM&ab_channel=ConorBailey)

### 2. About Me section
Four sections with information. Each one with headers and paragraphs. Central image encased in a circular container.

##### Credits 
* Section inspired by CSS project "Love Running", Code Institute.

### 3. Skills section
Progress bar trios divided into developer's four different expertise areas.

##### Credits
* Section inspired by Bootstrap 4 mini-project, Code Institute.

### 4. Experience section
Two mirrored timelines with work history, previous employers and position held.

##### Credits
* Section inspired by Bootstrap 4 mini-project, Code Institute.

### 5. Contact Form
Contact form encased inside a bootstrap modal.
##### Credits
* Code taken from Bootstrap 4 mini-project, Code Institute.


## Technologies


### Languages

-  [HTML5](https://en.wikipedia.org/wiki/HTML5)
-  [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-  [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Other Technologies

* [Bootstrapv4.5.3:](https://getbootstrap.com/) 
    * Responsive design and css styling.
* [Jquery CDN](https://code.jquery.com)
    * Javascript.
* [W3Schools](https://www.w3schools.com/)
    * CSS documentation.
* [Figma:](https://figma.com/)
    - Figma was used to create the wireframes.
* [GitHub:](https://github.com/)
    * Code repository.
* [Gitpod](https://gitpod.io/)
    * Gitpod was used as IDE and for version control. 
* [Font Awesome:](https://fontawesome.com/)
    * Font Awesome was used solely for social media icons in footer.
* [Google Fonts:](https://fonts.google.com/)
    * Google fonts was used to import "Cinzel" and "Raleway" family fonts.
* [Chrome Developer Tools:](https://developers.google.com/web/tools/chrome-devtools)
    * Used to debug and style.

## Testing

*  [Valid HTML!](/assets/images/w3c-val.jpg) HTML has been validated by [W3C validator](https://validator.w3.org/)
*  [Valid CSS!](/assets/images/jigsaw-val.png) CSS has been validated by [Jigsaw validator](https://jigsaw.w3.org/css-validator/)


#### Responsiveness
The responsiveness of the website has been tested with Chrome Developer Tools.

#### Validation
* Form element validation is fully functional.

#### Links
* All anchor elements work as expected on every browser.

#### Javascript
* Scripts fully functional on every browser.

## Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals

    1. As a First Time Visitor, I expect the purpose of the website to be explicit.

        * Upon entering the site, the user will see the introductory text that presents the developer and a navigation bar so they can choose a section and start navigating through the website.
        * The user has two options, click navigation bar buttons or scroll down, since it is a single page site.
        * [Screenshot](/assets/images/user-s1.jpg)
    2. As a First Time Visitor, I consider smooth navigation through content to be a key aspect.

        * The header and navigation bar will stay fixed so the option of jumping to a different section is always available. The navigation bar that becomes a burger button on small screens, each link describes the section they will end up at clearly.
        * [Screenshot](/assets/images/user-s2.png)
    3. As a First Time Visitor, I want for the content of the website to be relevant and concise. 
        * The paragraphs are short and focused. No big pieces of text nor unnecessary information is being display.
        

-   #### Returning Visitor Goals

    1. As a Returning Visitor, I would like to see updated information about the developer's latest projects.

        * Given that this is the first project, this goal should be considered into future features.

    2. As a Returning Visitor, I want to have ease of access to contact the developer.

        * Two buttons in the page will pop-up a modal form for the user to contact the developer. "Contact" button in the navigation bar, and "Work with me" in the footer.
        * [Screenshot](/assets/images/user-s3.png)
-   #### Frequent User Goals

    1. As a Frequent User, I want to check which resources and elements have been used for new projects.

        * Given that this is the first project, this goal should be considered into future features.

    2. As a Frequent User, I want to be able to propose new projects or ideas.

        * The previously mentioned contact form counts with a textbox for users to suggest projects and ideas.
        * [Screenshot](/assets/images/user-s4.png)

## Further Testing

-   The website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Opera.
-   The website was viewed on a variety of devices.


## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/jjlg90/ms1-v2)
2. At the top of the Repository, locate the "Settings" button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://jjlg90.github.io/ms1-v2/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/jjlg90/ms1-v2)
2. At the top of the Repository, just above the "Settings" button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/jjlg90/ms1-v2)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/jjlg90/ms1-v2
```

7. Press Enter. Your local clone will be created.

### Acknowledgements

* My Mentors, Oluwaseun Owonikoko and Oluwafemi Medale who guided me through development.
* [Stack Overflow](https://stackoverflow.com/) helped me to find answers about structure and styling from other people's inquiries, posts and threads.
* Tutor Support.