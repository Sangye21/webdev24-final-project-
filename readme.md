# Top 5 Socccer League Stats

## League Table and Top Scorers for each League

This project is a web application that displays the standings of Europe's top 5 football leagues, and their top scorers. Users can navigate between the league tables and top scorers pages for each league.

## Prerequisites

- Node.js (v14 or higher recommended)
- npm (Node Package Manager)

## Installation

## API - football-data

The API key used for this project is located in the index.js file under the variable: const API_KEY = '9506b895a12d4004ad68580ccfdb70cf';

You can also obtain a free API key from football-data.org by making an account and replace the placeholder YOUR_API_KEY_HERE in the index.js file with your actual API key.

Project Structure

project-root/
│
├── public/
│ ├── images/
│ │ ├── league/
│ │ │ ├── PL.png
│ │ │ ├── PD.png
│ │ │ └── ...
│ │ ├── flags/
│ │ │ ├── england.png
│ │ │ ├── spain.png
│ │ │ └── ...
│ │ ├── players/
│ │ │ ├── pl/erling-haaland.png
│ │ │ └── ...
│ │ ├── logo.png
│ ├── styles.css
│
├── views/
│ ├── homepage.ejs
│ ├── top_scorers.ejs
│ └── league_table.ejs
│
├── index.js
├── package.json
└── README.md

## Running the Project

After cloning the repo,
On terminal, run "npm install" to install dependencies from the package.json file.

To start the server,
On terminal, run "node index.js"
Open your web browser and go to http://localhost:3000.

## Routes

Homepage: Displays the top 5 leagues and top scorers.

URL: /
Template: homepage.ejs
League Table: Displays the standings of the selected league.

URL: /league/:id
Template: league_table.ejs
Top Scorers: Displays the top scorers of the selected league.

URL: /competition/:id
Template: top_scorers.ejs
API Usage
The application uses the football-data.org API to fetch league
