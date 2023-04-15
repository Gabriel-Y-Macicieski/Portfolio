require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser")
var ejs = require("ejs");
var mongoose = require("mongoose");
count=0;

mongoose.connect(process.env.DATABASE_KEY);

var app = express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))

const mensagemSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    email: String,
    mensagem: String
});

const Mensagem = mongoose.model("Mensagen",mensagemSchema);

app.get("/",function(req,res){
    res.render("index");
})

app.get("/contatos",function(req,res){
    res.render("contatos");
})

app.post("/contatos",function(req,res){
    
    var newMsg = new Mensagem({
        id:count,
        nome: req.body.names,
        email: req.body.mail,
        mensagem: req.body.mensagem
    })
    console.log(req.body.names)
    newMsg.save();
    res.redirect("/");
    count += 1;
})

app.get("/autor",function(req,res){
    res.render("autor");
})

app.get("/projetos",function(req,res){
    res.render("projects");
})

app.get("/projetos/p1",function(req,res){
    res.render("model");
})

app.listen("3000",function(){
    console.log("servidor rodando na porta 3000")
})