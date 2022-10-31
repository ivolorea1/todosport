const mongoose = require('mongoose');

const uri = 'mongodb://0.0.0.0:27017/admin';


async function connect() {
  try { 
    await mongoose.connect(uri);
    console.log("connected to mongo db");
  }catch(error) {
    console.error(error);
  }
}
connect();

mongoose.connection.on('open', ()=> {
  console.log('database is connected to', uri);
})
mongoose.connection.on('error', err => {
  console.log('database is connected to', err);
})
