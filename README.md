# Project-2 Astronomy Pictures (Pair Coding Project)

![](/assets/images/home.png)

## Overview

The second project of the Software Engineering Immersive course at GA London was a small Reactathon. The assignment was to build a React app that uses an external API, the project was completed in a team of two within 48 hours.
Astronomy Pictures is a platform where users can find for each day a different image or photograph of our Universe with a brief explanation written by a professional astronomer. The external API for this project is NASA APOD (Astronomy Picture of the Day).

Check our deployed version – Astronomy Pictures

## Team

- [Issra Hashim](https://github.com/IssraHashim)
- [Mariana Lozynska](https://github.com/mlo)

## Brief

- **Consume a public API** – this could be anything but it must make sense for your project.
- **Have several components**.
- **The app can have a router** – with several “pages”, this is up to you and if it makes sense for your project.
- **Include wireframes** – that you designed before building the app.
- **Have a nice design**.
- **Be deployed online** and accessible to the public.

## Installation

Clone or download the repo.
Open it in editor or your choice and run `yarn` command in your terminal to install all dependencies.
Start server with `yarn start`.

## Technologies used

- HTML
- CSS3
- React.js
- Axios
- React Router DOM
- Bulma CSS Framework
- Visual Studio Code
- Yarn
- Insomnia
- Version control tools (Git/GitHub)

## Approach

It took us a few hours to find an open API that we liked and wanted to use for our future project.
We choose the NASA API, Astronomy Picture of a Day, that had great documentation and included images.

![](asssets/images/.png)

From the beginning, we decided that we would be pair-coding for the whole project so that each of us could have a say and a good understanding of all components. Twice a day, we took turns to code. As communication tools we used Slack and Zoom.
We wanted to keep our application simple with just a few “pages”, so we could focus on it looking well-polished and the features working as intended.
We decided that our application will have four main pages, which are Home, All Pictures, Show Picture and Picture of a Day. All Pictures page will render all pictures for the last month and by clicking on one of them users will be able to see more detailed information about the exact picture.
To create wireframes for our application, we used Figma.

![](asssets/images/.png)

Also we planned to have additional features which were to include filtering by month, search by title, pick a date feature – users can pass down the special date for the picture using a form.

The next stage was testing our API and making a get request to display data about our pictures, once we knew we could access certain endpoints on the API.

![](asssets/images/.png)

When we got all the pictures we decided to filter them by month. For that we created filter function:

![](asssets/images/.png)

After that we created a ChooseDate component. Where users can get a picture for a special date.

![](asssets/images/.png)

Next step was styling, we used Bulma with CSS for that.

![](asssets/images/.png)

## Challenges

- How to change the date inside our get request for AllPictures component. Due to the big size of each picture and time needed to download a big amount of pictures we decided to use this component only for the 2021 year. Users can choose a month or search by title to see pictures.
- With the ChooseDate component we had to find out how the user should type the format of a chosen date to see the picture and also how to pass the date as a parameter to the ShowYourPicture component.

![](asssets/images/.png)
![](asssets/images/.png)
![](asssets/images/.png)
![](asssets/images/.png)

## Wins

We managed to find a free access API that had great documentation, which allowed us to practice how to retrieve data from an API, to have a better understanding how API works, and gain valuable knowledge for our future full stack projects.
We are very happy that we managed to work our additional features – filtering by month and year, as well as possibility to search by title.
Using the CSS framework (Bulma) for the first time has been a very good experience to see how easily you can add styling just with a few classes.

Future features
Register and login to choose favourite pictures.
Add a comment component.

Key learnings
First React App. Being able to get more comfortable with using React Hooks and state management in React App.
First pair coded project. I took great advantage of working with someone else sharing experience and different coding styles. I learned a lot from pair coding, we had a lot of fun working together.
