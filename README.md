# Drawing Rectangles on the image uploaded

I have created a client-side website with two pages: Upload and Results. The Upload page should allow users to select an image and click a "Go" button. Upon clicking, the image dimensions are sent to a function in the ApiClient class (refer to the provided link). This function returns an array of rectangles, where each rectangle is defined by its xMin, yMin, xMax, and yMax properties.

It involves drawing these rectangles on the original image and displaying the modified image on the Results page. I have used Javascript library i.e, ReactJS to complete the assignment. 

It is conceivable that rectangles may not be immediately visible upon the initial loading of the website, as they could potentially extend beyond the boundaries of the images. Given the random nature of these rectangles, upon refreshing the website, visibility may occur if the rectangles happen to fall within the bounds of the image.

## Available Scripts

## Installation

To set up and install the required dependencies for this project, follow these steps:

1. **Clone the Repository:**
Ensure GitHub CLI is installed on your machine. You can download it [here](https://github.com/cli/cli/releases).

Run the following commands in the integrated terminal to clone the repository:

gh repo clone Sahdev-rajput/Sahdev_Rajput_Assignment
cd Sahdev_Rajput_Assignment



In the project directory, you can run:

### `npm install`
To install the required dependencies for this project


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



