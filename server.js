const express = require('express')
const app = express();

const route = require('./routes/route')

app.use('/api', route)

app.get('/', (req, res) => {
    res.status(200).send('hii msg is printed')
})
app.get("/*", (req, res) => {
    res.send("API NOT Found");
});

app.listen(8080, () => {
    console.log("App is listen on 8080")
})