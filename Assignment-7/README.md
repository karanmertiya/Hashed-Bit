# React Assignment - IPL Points Table

This project is a React application built for Assignment 7 that dynamically fetches and displays the IPL Season 2022 points table.

## Features and Implementation Details

- **Live Data Fetching**: Uses React's `useEffect` hook to asynchronously fetch live JSON data from the provided mock API endpoint (`https://my-json-server.typicode.com/FreSauce/json-ipl/data`).
- **Data Sorting**: Implements custom JavaScript sorting to arrange the fetched teams in strictly **ascending order based on their NRR (Net Run Rate)**.
- **Dynamic Rendering**: Maps the sorted JSON data into a clean, structured HTML `<table>`.
- **Modern Styling**: Includes custom CSS to give the table a modern look, featuring a dark header (`#0d2c54`), striped alternating rows for readability, and hover effects on rows.

## Table Columns Displayed
1. **No** (Rank/ID)
2. **Team** (Name of the Franchise)
3. **Matches** (Total Matches Played)
4. **Won** (Matches Won)
5. **Lost** (Matches Lost)
6. **Tied** (Matches Tied)
7. **NRR** (Net Run Rate)
8. **Points** (Total Points)

## How to Run Locally
1. Ensure Node.js is installed.
2. Run `npm install` to install Vite and React dependencies.
3. Run `npm run dev` to start the local development server.
4. Open the provided `localhost` link in your browser to view the table!
