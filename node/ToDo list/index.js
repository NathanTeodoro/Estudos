var express = require("express");
var {MongoClient, ServerApiVersion} = require("mongodb");
var cors = require("cors");
const multer = require("multer");
var mongoose = require("mongoose")

const app = express();
app.use(cors());

mongoose.connect('mongodb+srv://admim:SW2CiTq4BcwMImyu@admin.drgzguy.mongodb.net/?retryWrites=true&w=majority&appName=admin' , {dbName:"todolistdb"});

const SVschema = new mongoose.Schema({
    id: Number,
    note: String,
},
{collection: 'todolistcollection'})

async function getnotes(){
    const gt = mongoose.model("todolistcollection", SVschema)
    const getn = await gt.find({}).exec();
    console.log(getn)
    return JSON.parse(getn) 
}

async function add(){
    

    const SV = mongoose.model("todolistcollection",SVschema)
        
    idn = await SV.where({}).countDocuments().exec();
    const SVdb = new SV({
        id:idn+1,
        note:"+ contato com DEUS"
    })
    
    SVdb.save();

}

async function del(){
    const del = mongoose.model("todolistcollection", SVschema)
    dl = await del.deleteOne({id:this.id})
}

app.listen(5038,()=>{
    console.log("foi")
})


app.get('/api/todolist/getnotes',async(request,response)=>{
    const gt = mongoose.model("todolistcollection", SVschema)
    const getn = await gt.find({}).exec();
    console.log(getn)
    response.send(getn)
    
})


app.post('/api/todolist/addnotes',async(request,response)=>{ 
    
    const SV = mongoose.model("todolistcollection",SVschema)
        
idn = await SV.where({}).countDocuments().exec();
 const SVdb = new SV({
    id:idn+1,
    note:request.body.newNotes
})

SVdb.save();
})
