# Custom Guess Who game

Generate cards ready to be printed out and used in a Guess Who game. Simply provide images, and the code does the rest!

![Screenshot of the code in action](./docs/assets/chrome_screenshot.png)

## Steps to create a custom Guess Who game

Follow these steps to create your own custom guess who game!

1. Buy a copy of the game [Guess Who?](https://en.wikipedia.org/wiki/Guess_Who%3F)
2. Find 24 images of someone you want to have in your game.
3. For the best result you want to cut the images to the person's head.
   - Tip: Cropping can be done in many applications, like the built in Photos app in Windows. An app that supports setting the aspect ratio when cropping is [GIMP](https://www.gimp.org/).
   - *(Optional)* To avoid white stripes on the sides of the image (to fill the image field in the card) use the ratio `121:98` when cutting.
4. Name the image files the name of the persons.
5. Clone this repository and run the web app with `npm start`
6. Add the images to the folder `/src/faces`
7. Print the resulting web page from your browser (CTRL + P)
   - In Chrome in the print dialog, choose "More settings" and check the checkbox "Background graphics".
   - Tip: the cards will work best if they are stiffer than regular printer paper. To achieve this you can use a thicker paper, photopaper or laminating the printer paper. You can also simply glue printer paper onto thicker paper if your printer cannot print it.
8. Cut out the cards and play with them!

## Will this work for me

You should double check that the sizes of the cards matches the sizes of your game. Sizes hard coded in this repo are:

- Face card: 32mm x 35mm
- Secret card: 77mm x 45mm

You can change the sizes by changing the CSS inside the components FaceCard and SecretCard.

Currently the code are written to only handle .png, .jpg and .svg files.

## Quirks

Since CSS doesn't support page breaks inside Flexbox or CSS Grid I have hard coded that there are four pages. One for player 1 face cards (with blue colours), one for player 2 face cards (with red colours), and two pages for the secret cards (with yellow colours).

## Dev stuff

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.
