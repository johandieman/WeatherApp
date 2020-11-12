let app = require('express')();
let cors = require('cors');
const helmet = require('helmet');
let port = process.env.PORT || 3000;
require('dotenv').config();

app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
    
});

app.use('/api', (req, res, next) => {
    
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});