# Drawing Rectangles on the Image Uploaded

I have created a client-side website with two pages: Upload and Results. The Upload page should allow users to select an image and click a "Go" button. Upon clicking, the image dimensions are sent to a function in the ApiClient class (refer to the provided link). This function returns an array of rectangles, where each rectangle is defined by its xMin, yMin, xMax, and yMax properties.

It involves drawing these rectangles on the original image and displaying the modified image on the Results page. I have used Javascript library i.e, ReactJS to complete the assignment. 

It is conceivable that rectangles may not be immediately visible upon the initial loading of the website, as they could potentially extend beyond the boundaries of the images. Given the random nature of these rectangles, upon refreshing the website, visibility may occur if the rectangles happen to fall within the bounds of the image.


## Implementation

This assignment has been developed using the React.js framework. React.js is a JavaScript library for building user interfaces, and it was chosen for its component-based architecture, which provides a modular and efficient way to create interactive applications.


## Available Scripts
## Prerequisites

Make sure you have Node.js and npm installed on your machine.

## Getting Started

To run the assignment locally, follow these steps:

1. Clone the repository:
    ```bash
    gh repo clone Sahdev-rajput/Sahdev_Rajput_Assignment
    # OR, if you don't have GitHub CLI installed
    # git clone https://github.com/Sahdev-rajput/Sahdev_Rajput_Assignment.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Sahdev_Rajput_Assignment
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the application:
    ```bash
    npm start
    ```

Now you can access the assignment at [http://localhost:3000](http://localhost:3000) in your web browser.

## Technologies Used

- React.js
- Ant Design (An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprise.)





