# React Assignment - Movie Booking App

This project is a React-based Movie Booking application built as part of Assignment 8. 

## Pages and Functionality

The application uses `react-router-dom` to implement seamless navigation across four distinct pages:

### 1. Home Page (`/`)
- Displays a catalog of 16 movies.
- Features dummy images and genres for each movie.
- Structured neatly into a responsive **4x4 grid layout**.
- Clicking on any movie card routes the user to that specific movie's details page.

### 2. Movie Details Page (`/movie/:id`)
- Displays the selected movie's specific details (title, genre, large image, and description).
- Includes a prominent **Book Seat** button that takes the user to the booking form for that movie.

### 3. Booking Form Page (`/book/:id`)
- Presents a form requesting the user's **Name**, **Email**, and **Mobile Number**.
- Form inputs are validated (marked as `required`).
- Upon clicking Submit, the application generates a random alphanumeric Booking ID and navigates to the confirmation screen.

### 4. Confirmation Page (`/confirmation`)
- Displays a success message indicating the seat has been booked.
- Shows the newly generated **Random Booking ID**.
- Recaps the entered details: Movie Title, Name, Email, and Mobile.
- Provides a button to return to the Home page to start over.

## Running Locally
To test this application:
1. `npm install`
2. `npm run dev`
