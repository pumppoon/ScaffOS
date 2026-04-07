import { config } from './config';

const app = express();
const PORT = config.port;

app.use(bodyParser.json());

// Placeholder for routes
app.get('/', (req, res) => {
  res.send('Order Engine is running');
});

app.listen(PORT, () => {
  console.log(`Order Engine listening on port ${PORT}`);
});