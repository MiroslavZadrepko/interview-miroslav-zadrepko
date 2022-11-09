import expres from 'express';
import cors from 'cors';
    
const app = expres();
const PORT = 5000;

app.use(cors())
app.use(expres.json());

app.get('/', (req, res) => {
    res.status(200).json('get works')
})

app.listen(PORT, () => {
    console.log(`live on ${PORT}`);
})