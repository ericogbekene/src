const express = require('express');
const setRoutes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

setRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});