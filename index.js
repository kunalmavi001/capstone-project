import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("//", (req, res) => {
    res.render("index.ejs");
    });

    
app.get ("/essay", (req, res) => {
    res.render("essay.ejs");
    });
    
app.get ("/books", (req,res) => {
    res.render("books.ejs");
});    

app.listen(port , () => {
    console.log(`Server Running on port ${port} `);
});