# Simon 2.0 Game

The Simon 2.0 Game was created to replicate the original Simon game on a PC/mobile phone/tablet so users can enjoy playing a classic game. 
This is intended to be a memory game in which the computer generates a flash of the gamepad and the user must copy what the computer does. 
Each time the user copies the computer correctly, the computer will add another flash to the sequence and each time the user gets the 
sequence correct, they will move up to the next level.
Once the user completes level 20, they will win the game and it will reset.
This game has the added functionality of a "hard" setting and, when activated, the game will consist of 5 sections rather than the traditional 4.

## UX

The website is aimed at users of all ages/background who are looking to play a game in their spare time and have an interest in memory games.
It is designed to suit desktops, tablets and mobiles platforms which some different functionality/displays depending on the chosen platform.

The site is comprised of 1 main page which houses a basic navigation bar, which is not fixed to the top of the screen as the realestate is required 
for the game on smaller devices. The Navigation bar also contains a "Rules" button which will, when clicked, reveal a modal with all the rules 
of the game, as well as a description of how to turn on "hard mode" when playing on mobile phones or PCs.

#### User story:
I am presented with a single button press/flash played out by the computer.

#### User story:
Each time I input a series of button presses correctly, I am notified that I have moved up a level, then I see the same series of button 
presses but with an additional step.

#### User story:
A sound is played that corresponds with each button, either when the computer plays a sequence or when I press a button.

#### User story:
If I press an incorrect button, I am notified of this, and that sequence of button presses/flashes starts again to remind me of the pattern 
so I can try again.

#### User story:
If I want to restart the game, I can push a  restart button to do this, and the game will return to a level 1.

#### User story:
I can play the game in strict mode where if I push the wrong button, it notifies me of this, and the game restarts with a new sequence of 
button presses/flashes.

#### User story:
I can win the game by successfully completing level 20. I am notified of my win and then the game starts over after a short time.

The wireframes/initial mockups for the Simon 2.0 website can be found here: https://github.com/Matte-gtr/simon-2.0/tree/master/wireframes

## Features
* Power Button - This turns the game on/off. When the game is off, no clicks on the gamepad will register and when it is on, the "play" 
button will become active. This is off when the page is loaded

* Strict Button - The strict button is used to turn strict mode on/off. when this is on, 1 wrong press will cause the game to reset to level 1.
This is off when the page is loaded

* Sound Button - The sound button is used to turn the sound on/off. When this is on, a sound will be made each time a section is clicked by 
the computer of user, when the power is turned on or off, and when the game is won. This is off when the page is loaded

* Hard Button - The Hard button is used to make the game a bit harder when it is set to true. When this is on, the centre section of the 
gamepad will light up and act as a fifth section to the game. Once hard mode is on and the sequence contains a centre section flash, the user 
won't be able to turn hard mode off until the game is won or reset. This is off when the page is loaded

* Gamepad - This is the part of the page that contains the sections that will flash in line with the sequence and that the user will click 
when it's their turn

* Console - This will display the level that the user is on, as well as notifying them of any incorrect presses or winning the game.

* Play Button - This will start the game when clicked, as long as the power is set to "on".

* i Button (mobile & tablet)/ctrl (desktop)  - This will show/hide the hard button.

## Features left to implement:

The ability to delimit the win-level-limit so the user can play longer sequences and test their memory even further.

A link to buy the original game

## Technologies Used

HTML5

CSS3

Bootstrap
https://getbootstrap.com/docs/4.4/getting-started/introduction/
Bootstrap was used to speed up the development time and make use of their grid system for responsive mobile first design.

Google fonts
https://fonts.google.com/
Google fonts was used to provide all the fonts for the site as they have a very large library of fonts

JavaScript

JQuery
The project uses JQuery to simplify DOM manipulation.

## Automated testing

To run the automated tests, open https://github.com/Matte-gtr/simon-2.0/tree/master/tests/test.html
The details of what is being tested is described within the test.html page.

## Manual Testing

During the creation of this project, Google Chrome developer tools was used to view the site/pages on various different devices.
The developer tools displays used were: Galaxy S5, Pixel 2, Pixel 2 XL, iPhone 5/se, iPhone X, iPhone 6/7/8, iPhone 6/7/8 Plus, iPad, iPad Pro.
These were checked at multiple points throughout the development and then once again on all the above devices when the project was completed.

The site was also tested on various actual devices listed below once the site was completed:
* Asus Laptop
* Lenovo desktop
* Samsung Galaxy A5
* iPhone 8
* Sansung Galaxy S9
* Samsung tablet

The site was then tested on 3 different browsers:
* Google Chrome
* Internet Explorer
* Mozilla Firefox

The site was also tested for fast user learning by asking 3 different people to use the site and figure out the game, then asking
them how they felt about how easy it was to find. The reaction was generally good across all the testers, a note to make the difficulty
setting easier to find was noted and will be implemented at a later date

## Deployment
Github pages
This site was deployed using Github pages.
As the site was created in github originally and then worked on in Gitpod, a repository had already been created, then once the 
site was mostly complete, the code was pushed to the github repository.
I then went into the github repository, clicked on settings, scrolled down to the Github pages section and selected master branch 
in the Source dropdown. this deploys the site 
and when it updates, provides a link to the site.

If you would like to edit or improve this website, type the following into your development evironment terminal after ensuring you are
in the correct folder:
git clone "https://github.com/Matte-gtr/simon-2.0"
This will copy all of the files into you workspace and allow you to edit them as you see fit.

#### Credits
youtube - video hosting
Freecodecame - examples and explanations of using multiple functions 
w3schools - General learning material and descriptions
freesound.org - sounds used in the game
Codepen - sounds used in the game

#### photo credits:
Steve Griffith - Background Image

#### Content
Ultraboardgames.com - Information for clear coverage of the rules of the simon game were sourced on Wikipedia

The inspiration for this site primarily came from the ACDC band website.