const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const Reg = require("./models/reg");

const app = express();
const port = process.env.PORT || 3000;


mongoose
  .connect(
    `mongodb+srv://eddie05:westmec@first-cluster.sazscse.mongodb.net/TaskManagerMDB`
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(`Error connecting to mongoDB:`, err);
  });

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static('./public'));

app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) =>{
    const regs = await Reg.find();
    res.render('members', { regs });
}) 


app.get('/reg', async (req, res) => {
  const regs = await Reg.find();
  res.render('index', { regs });
});

app.post('/reg', async (req, res) => {
  const reg = new Reg({
    name: req.body.mName,
    age: req.body.uAge,
    gender: req.body.uGen,
    email: req.body.uEmail,
    address: req.body.uAddy
  });
  await reg.save();
  res.redirect('/');
});

app.get('/edit/:id', async (req, res) =>{
  const ed = await Reg.findById(req.params.id);
  res.render('edit', { ed });
});

app.post('/edit/:id', async (req,res) =>{
  await Reg.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/');
});

app.get('/delete/:id', async (req, res) => {
  const del = await Reg.findById(req.params.id);
  del.deleteOne();
  res.redirect('/');
});

app.listen(port, () =>{
  console.log(`Server is running on port ${port}`);
});
