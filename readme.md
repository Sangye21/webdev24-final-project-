# Top 5 Soccer League Stats

## League Table and Top Scorers for each League

This project is a web application that displays the standings of Europe's top 5 football leagues, and their top scorers. Users can navigate between the league tables and top scorers pages for each league.

## Resources Used

Used the API to get the league table standings and relevant data, top ten scorers of each league, and team crests.
Used the web to get images for the players, flag images, and the home logo.

## Prerequisites

- Node.js (v14 or higher recommended)
- npm (Node Package Manager)

## API - football-data

The API used for this project is: https://www.football-data.org/

The API key used for this project is located in the index.js file under the variable: const API_KEY = '9506b895a12d4004ad68580ccfdb70cf';

You can also obtain a free API key from football-data.org by making an account and replace the placeholder YOUR_API_KEY_HERE in the index.js file with your actual API key.

To get the league standings, I used the sub(resource): Competition/Standings which has the url: /v4/competitions/{id}/standings

To get the top scorers for each league, I used the sub(resource): Competition/(Top)/Scorers which has the url: /v4/competitions/{id}/scorers

## Running the Project

After cloning the repo,

On terminal, run "npm install" to install dependencies from the package.json file.

To start the server, On terminal, run "node index.js".

Open your web browser and go to http://localhost:3000.

## Routes

##

URL: /

Template: homepage.ejs

Homepage: Displays the top 5 leagues and top scorers.

##

URL: /league/:id

Template: league_table.ejs

League Table: Displays the standings of the selected league.

##

URL: /competition/:id

Template: top_scorers.ejs

Top Scorers: Displays the top scorers of the selected league.
