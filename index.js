const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');
const cors = require('cors');
require('./fetch/getPronote').default;
//if warning deprecated, add these line:
// const mongoose = require('mongoose');

// mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());
app.use(cors()); //acces granted, neo. `{origin: 'url'}` to restrict access
app.use('/users', postsRoutes);

app.listen(5500, () => console.log('Api is running on port 5500'));

app.use(main())