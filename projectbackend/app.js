const express=require('express')
const app=new express()
const cors=require('cors')
app.use(cors())
const PORT=5000
 const BookModel=require('./model/Booksdata')
require('./connection')
app.use(express.json())
// app.post('/addmovie',async (req,res)=>{
//     try {
//         var item=req.body
//         const datasave= new movieModel(item)
//         const saveddata=await datasave.save()
//         res.send('post succesful')
//     } catch (error) {
//         console.log(error)
//     }
// })
app.get("/books",async (req,res)=>{
    try {
        const data=await BookModel.find()
        res.send(data)
    } catch (error) {
        res.send('Data not found')
        
    }
})
app.delete('/books/:id', (req, res) => {
    const { id } = req.params;

    BooksData.findByIdAndDelete(id)
        .then(() => {
            res.json({ message: 'Book deleted successfully' });
        })
        .catch((err) => {
            res.status(500).json({ error: 'Error deleting book' });
        });
});