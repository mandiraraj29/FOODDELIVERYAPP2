const DB_CONNECTION = 'mongodb://localhost:27017/foodApp'
const SECRET_KEY = '123456'
mongoose.connect(DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database successfully");
  })
  .catch(err => console.log(err));
