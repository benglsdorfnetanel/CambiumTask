const express = require('express');
const app = express();
const port = process.env.Port || 3000;
const cors = require('cors');
const morgan = require('morgan');
const copyPaste = require('./API/Routers/copyPaste');

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/copypaste",copyPaste);

app.listen(port,()=>{
    console.log(`app is up listen ${port}`);
})