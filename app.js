let express = require('express');
let app = express();
const bodyParser = require('body-parser');
const requestLogger = require('./src/utility/requestlogger');
const userRouter = require('./src/router/userrouter');
const adminRouter = require('./src/router/adminrouter');
const errorLogger = require('./src/utility/errorlogger');
const cors = require('cors');

const PORT_NUM = 3000;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(requestLogger);
app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.use(errorLogger);

app.listen(PORT_NUM);
console.log("Dev Server Started at Port 3000");


