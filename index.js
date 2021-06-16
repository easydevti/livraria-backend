const express = require('express');


const app = express();


app.get('/', (req, res) => {

    res.json({
        success: 'Ola Mundo =)'
    })
})


app.listen(process.env.PORT || 5000);