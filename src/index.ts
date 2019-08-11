import express, { Response, Request } from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['lajdhdfkjhasf'] }));
app.use(router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
