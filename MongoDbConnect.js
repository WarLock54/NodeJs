import { config } from "dotenv";
import { MongoClient } from "mongodb";
var url = "mongodb://localhost:27017";

// eğer yeni database eklenmesi istersem 
// var url = "mongodb://localhost:27017/newdb"; bunu yazman gerek

MongoClient.connect(url,function(err,db){
    if(err) throw err;
   
    console.log("MongoDb bağlandı")
    console.log(db);
    


    // collection oluştur
    db.createCollection('users',function(err,res){
        if(err) throw err;
        console.log("yeni koleksiyon oluşturuldu.")
        console.log(res);
        db.close();

    })
})

//mongoose bağlantısı
import { Mongoose } from "mongoose";
Mongoose.connect('mongodb://localhost:27017/database_name');
var DB = Mongoose.connection;

db.on('error',console.error.bind(console,"bağlanamadı"));

// şema tanımlama 
var BookSchema = mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number
  });
  var book1 = new Book({ name: 'Introduction to Mongoose', price: 10, quantity: 25 });

  // modele göre şema belirle 
  var Book = mongoose.model('Book', BookSchema, 'bookstore');
 
  // documents array
  var books = [{ name: 'Mongoose Tutorial', price: 10, quantity: 25 },
                  { name: 'NodeJS tutorial', price: 15, quantity: 5 },
                  { name: 'MongoDB Tutorial', price: 20, quantity: 2 }];

  // save multiple documents to the collection referenced by Book Model
  Book.collection.insert(books, function (err, docs) {
    if (err){ 
        return console.error(err);
    } else {
      console.log("Multiple documents inserted to Collection");
    }
  });