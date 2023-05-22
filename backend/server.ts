import cors from 'cors';
import express, { Express, Request, Response } from 'express';

import { Todo } from '../types';

const app: Express = express();
const port = 3001;

app.use(cors());

const sampleData = [
    {id: 1, title: "牛乳を買う", completed: true},
    {id: 2, title: "本を読む", completed: false},
    {id: 3, title: "腹筋をする", completed: false},
];

let todoList: Todo[] = sampleData;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.get("/todo_list", (req: Request, res: Response) => {
    res.json(todoList);
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});