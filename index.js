import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;
const API_KEY = '9506b895a12d4004ad68580ccfdb70cf'; // API key for accessing the football data API

// Set up EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define route to render the homepage with list of competitions
app.get('/', (req, res) => {
    // List of football competitions
    const competitions = [
        { id: 'PL', name: 'Premier League' },
        { id: 'PD', name: 'La Liga' },
        { id: 'SA', name: 'Serie A' },
        { id: 'BL1', name: 'Bundesliga' },
        { id: 'FL1', name: 'Ligue 1' }
    ];
    res.render('homepage', { competitions: competitions });
});

// Define route to handle competition selection for top scorers
app.get('/competition/:id/scorers', async (req, res) => {
    try {
        const competitionId = req.params.id;

        // Make a request to the API with the competition ID and API key in the headers
        const response = await axios.get(`https://api.football-data.org/v4/competitions/${competitionId}/scorers`, {
            headers: { 'X-Auth-Token': API_KEY }
        });
        const data = response.data.scorers; 

        // Preprocess image paths
        data.forEach(player => {
            const playerName = player.player.name.toLowerCase().replace(/ /g, '-');
            player.imagePath = `/images/${competitionId}/${playerName}.png`; // Adjusted image path
        });

        // Render the top scorers page with the retrieved data
        res.render('top_scorers', { leagueName: response.data.competition.name, competitionName: competitionId, data: data });
    } catch (error) {
        console.error('Error fetching data from API:', error);
        res.status(500).send('Error fetching data from API');
    }
});

// Define route to handle competition selection for league standings
app.get('/competition/:id', async (req, res) => {
    try {
        const competitionId = req.params.id; // Get the competition ID from the request parameters

        // Make a request to the API with the competition ID and API key in the headers
        const response = await axios.get(`https://api.football-data.org/v4/competitions/${competitionId}/standings`, {
            headers: { 'X-Auth-Token': API_KEY }
        });
        const standings = response.data.standings[0].table; // Assuming the API returns standings in the first element

        // Render the 'league_table' view with the retrieved data and league name
        res.render('league_table', { leagueName: response.data.competition.name, standings: standings });
    } catch (error) {
        console.error('Error fetching data from API:', error);
        res.status(500).send('Error fetching data from API');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
