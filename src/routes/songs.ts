import express, { Request, Response } from 'express';

const router = express.Router();
const songs = [
    {
        Genre: "Jaz",
        type: "Instrumental"
    },
    {
        Genre: "Beat",
        type: "Accoustic"
    }
];

router.get('/', (req: Request, res: Response) => res.send(songs));

router.post('/', (req: Request, res: Response) => {
    const song = req.body;

    songs.push(song);

    res.send(`Song with the info Genre: ${song.Genre} and Type: ${song.type} is added to DB`);
});

export default router;
