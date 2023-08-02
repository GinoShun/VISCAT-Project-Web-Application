const express = require('express');
const app = express();
const path = require('path');


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', userRoutes);

app.listen(8000, () => {
    console.log('listening on port 8000!');
});


app.use('*', (req, res) => {
    res.status(400);
    res.json({ error: `Cannot ${req.method} ${req.originalUrl}` });
});