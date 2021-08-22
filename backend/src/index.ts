import express from "express"; 
import mongoose from "mongoose";
import assignmentRoutes from './routes/assignment.route';

const app = express();


mongoose.connect("mongodb+srv://admin:YeJYeFhk5m85GIlt@cluster0-5tqle.mongodb.net/ezCorrectDB?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected to MongoDB cloud");
    })
    .catch((error) => {
        console.log("Connection failed")
        console.error(error);
    });

app.use(express.urlencoded({extended: false})).use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next();
})

app.use('/api/assignments', assignmentRoutes);


app.listen(4000, () => {
    console.log("Hola bandola we are listening on port 4000");
})

export default app;