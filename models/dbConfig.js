const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost:27017/JDO-copilot',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) console.log('Error connecting to database' + err); 
        else console.log('MongoDB connected as aweirdwhale');
        }
)