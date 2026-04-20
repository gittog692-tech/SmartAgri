const express = require('express');
const cors = require("cors");

const db = require('./db');

const authRoutes = require('./routes/authRoutes');
const marketRoutes = require('./routes/marketRoutes');
const cropRoutes = require('./routes/cropRoutes');
const schemeRoutes = require('./routes/schemeRoutes');
const communityRoutes = require('./routes/communityRoutes');

const app = express();   // ✅ create app FIRST

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());         // ✅ now this works
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/market', marketRoutes);
app.use('/api/recommend-crop', cropRoutes);
app.use('/api/schemes', schemeRoutes);
app.use('/api/community', communityRoutes);

app.get('/api/weather-advice', (req, res) => {
    const { weather } = req.query;
    let advice = "Maintain regular watering and monitor for pests.";
    
    if (weather === 'Rainy') {
        advice = "Ensure proper drainage to prevent root rot. Avoid fertilizer application right before heavy rain.";
    } else if (weather === 'Sunny') {
        advice = "Increase irrigation frequency. Consider shade nets for sensitive crops.";
    } else if (weather === 'Cold') {
        advice = "Protect sensitive crops from frost. Reduce watering frequency.";
    }

    res.json({ advice });
});
app.get('/', (req, res) => {
    res.send('SmartAgri Backend is running 🚀');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
