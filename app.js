const express = require('express')
const cors = require('cors')

const app = express()
app.use(cor())

const PORT = process.env.PORT || 3001;

app.get('/api/v1/info', (req, res) => {
    const currentDatetime = new Date().toISOString();
    const resp = {
        email: 'thelma101@gmail.com',
        current_datetime: currentDatetime,
        github_url: 'https://github.com/Thelma101/stage0-publicAPI'
    }
    res.status(200).json(resp);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})