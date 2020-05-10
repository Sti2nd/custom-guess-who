# Custom guess who game

It's as easy as 1, 2, 3.

1. Name the image file the same as your friend
2. Add the image to the folder `/src/faces`.
3. Print the resulting web page from your browser (CTRL + P)!
   - In Chrome in the print dialog, choose "More settings" and check the checkbox "Background graphics".

## Preparation

Before doing the above steps you need to find images of the persons you want in your game!

1. Find 24 images of someone
2. For the best result you want to cut the image to the person's head.
   1. *(Optional)* To fill the image field (to avoid white stripes on the sides of the image) use the ratio `121:98` when cutting.

## Will this work for me

You should double check that the sizes of the cards matches the sizes of your game. Sizes for this project:

- Face card: 32mm x 35mm
- Secret card: 77mm x 45mm

You can change the sizes by changing the CSS inside the components.

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
