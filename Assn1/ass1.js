const fs = require("fs");
const http=require("http");
const PORT=8000;
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{'content-type':'text/html'});
        res.write("<center><u> </u><h2>.....File Handling Assignment ........</h2></center>");
        res.write("<center><div><a href='./createFile'><button                   >Create</button></a><br><div><br></center>")
        res.write("<center><div><a href='./readdata'><button>Read Data</button></a><div><br></center>")
        res.write("<center><div><a href='./delete'><button>Delete Data</button></a><div><br></center>")
        res.write("<center><div><a href='./append'><button>Append Data</button></a><div><br></center>")
    }
    
    else if(req.url=="/createFile"){
       if(fs.existsSync("notes.txt")){
        res.end("File Alreadt Exist");
       }

       else{
        fs.writeFile('notes.txt',"Hello Rutuja welcome to the Neosoft",(err)=>{
            if(err) throw err
            else res.end('file Created');
        })
       }
    }


    else if(req.url=="/readdata"){
        if(fs.existsSync("notes.txt")){
            let data=fs.readFileSync("notes.txt");
            res.end(data.toString());
        }
        else{
            res.end("file Does Not Exists");
        }
    }

    else if(req.url=="/delete"){
        if(fs.existsSync("notes.txt")){
            if(fs.unlinkSync("notes.txt")){
                res.end("File Deleted")
            }
            else{
                 res.end("File deleted");
             }
        }
        else{node
            res.end("File Does not Exixt To delete");
        }
    }

    else if(req.url=="/append"){
        if(fs.readFileSync("notes.txt")){
            fs.appendFile("notes.txt","----data Added",(err)=>{
                if(err) throw err
                else res.end("Data Updated")
            })
        }
        else{
            res.end("File Does not exist")
        }
    }
    else{
        res.end("Invlaid Request")
    }
})


server.listen(PORT,(err)=>{
    if(err) throw err
    else{
        console.log(`server works on ${PORT}`)
    }
})
console.log("")