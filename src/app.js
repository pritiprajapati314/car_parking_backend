let express = require('express');
let app = express();
const bodyParser = require('body-parser');
const requestLogger = require('./utility/requestlogger');
const userRouter = require('./router/userrouter');
const errorLogger = require('./utility/errorlogger');

const PORT_NUM = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(requestLogger);
app.use('/user', userRouter);
app.use(errorLogger);

app.listen(PORT_NUM);
console.log("Dev Server Started at Port 3000");
