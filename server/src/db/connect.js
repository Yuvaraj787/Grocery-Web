const mongoose = require("mongoose");
// Middleware
// const db = 'mongodb+srv://grocery-webapp:grocery-webapp@cluster0.oioedos.mongodb.net/grocery-webapp?retryWrites=true&w=majority'
const db  = 'mongodb+srv://yuvarajv787:73gmMLbHk0DvV8pG@cluster0.ngvc3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// Connect to MongoDB using the connection string
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection: ${e}`);
});

// mongodb://localhost:27017