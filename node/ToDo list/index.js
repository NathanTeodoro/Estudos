var express = require("express");
const bodyParser = require('body-parser');
var {MongoClient, ServerApiVersion} = require("mongodb");
var cors = require("cors");
var mongoose = require("mongoose")

const app = express();
app.use(cors());
app.use(bodyParser());

mongoose.connect('mongodb+srv://admim:SW2CiTq4BcwMImyu@admin.drgzguy.mongodb.net/?retryWrites=true&w=majority&appName=admin' , {dbName:"todolistdb"});

const SVschema = new mongoose.Schema({
    id: Number,
    note: String,
},
{collection: 'todolistcollection'})
//
//const DLschema = new mongoose.Schema({
//    id: Number
//},
//{collection: 'todolistcollection'})


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

app.listen(5038,()=>{
    console.log("foi")
})


app.get('/api/todolist/getnotes',async(request,response)=>{
    const gt = mongoose.model("todolistcollection", SVschema)
    const getn = await gt.find({}).exec();
    response.send(getn)
})


app.post('/api/todolist/addnotes',async(request,response)=>{ 
    const SV = mongoose.model("todolistcollection",SVschema)    
    idn = await SV.where({}).countDocuments().exec();
    notetext = request.body.newNote
     const SVdb = new SV({
        id:idn+1,
        note:notetext
})
console.log(notetext)
SVdb.save();
})

app.delete('/api/todolist/del',async(request,response)=>{
    const del = mongoose.model("todolistcollection", SVschema)
    idvalue = request.query.id
    console.log(idvalue)
    await del.findByIdAndDelete({ _id: idvalue })
    
})

app.put('/api/todolist/edit',async(request,response)=>{
    const edit = mongoose.model("todolistcollection", SVschema)
    note = request.body.edit
    filter = {_id : note._id}
    update = { note: note.editNote }
    console.log(note)
    await edit.findOneAndUpdate(filter, update)
    
})