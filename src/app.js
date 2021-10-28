let express = require('express');
let app = express();
const bodyParser = require('body-parser');
const requestLogger = require('./utility/requestlogger');
const userRouter = require('./router/userrouter');
const managerrouter  = require('./router/managerRequestrouter')
const bookingrouter = require('./router/BookingSearchrouter');
const errorLogger = require('./utility/errorlogger');
const cors = require('cors');

const PORT_NUM = 3000;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(requestLogger);
app.use('/user', userRouter);
app.use('/manager',managerrouter)
app.use('/booking', bookingrouter);
app.use(errorLogger);

app.listen(PORT_NUM);
console.log("Dev Server Started at Port 3000");
