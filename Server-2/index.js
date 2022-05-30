var express = require('express')
var {MongoClient} = require('mongodb')
var cors = require('cors')
var url = "mongodb+srv://kitsmern:kitsmern@cluster0.q2sq4.mongodb.net/?retryWrites=true&w=majority"
var app = express()

var port =9009
app.use(cors())

app.get('/json',(req,res)=>{
     res.send({"name":"Kabir","city":"Delhi"})
})

app.get('/db',(req,res)=>{
     MongoClient.connect(url,(error,cluster)=>{
              if(error){
                  res.send("Error while connecting with the cluster")
              } else {
             var dbRef=cluster.db('user')
             var collectionRef=dbRef.collection('usercoll')
                collectionRef.find().toArray((error,success)=>{
                     if(error){
                         res.send("error while getting the data from collection")
                     } else {
                         res.send(success)
                     }
                })
              }
     })
})

app.listen(port,()=>{
    console.log("Server started")
})
