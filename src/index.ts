import express, { Response, Request } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['lajdhdfkjhasf'] }));
app.use(AppRouter.getInstance());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
