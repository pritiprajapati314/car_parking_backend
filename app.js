let express = require('express');
let app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const requestLogger = require('./src/utility/requestlogger');
const userRouter = require('./src/router/userrouter');
const locationrouter = require('./src/router/location')
const vehiclerouter = require('./src/router/uservehicle');
const errorLogger = require('./src/utility/errorlogger')

const PORT_NUM = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(requestLogger);
app.use('/user', userRouter);
app.use('/api/userpage/location',locationrouter);
app.use('/uservehicle',vehiclerouter);
app.use(errorLogger);
app.use(cors());

app.listen(PORT_NUM,()=>{
    console.log(`Dev Server Started at Port ${PORT_NUM}`);
});

