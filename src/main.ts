import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import songs from './routes/songs';

const main = express();
const PORT = 5000;

main.use(bodyParser.json());
main.use('/songs', songs);

main.get('/', (req: Request, res: Response) => res.send('homepage'));
main.listen(PORT, () => console.log(`Server running on Port: http://localhost:${PORT}`));
