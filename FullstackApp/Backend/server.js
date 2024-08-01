// require('dotenv').config()

import express from 'express';

const app = express()
app.use(express.static('dist'))        //middleware

const PORT = process.env.PORT || 3000;

app.get('/',(req, res)=>{
      res.send("hello wrld sfsvsf")
})

app.get('/api/jokes',(req, res)=>{
    const jokes =[
        {
            id : 1,
            title : 'joke one',
            description : 'arg ar aerb aet stedn wryk6ktem '
        },
        {
            id : 2,
            title : 'joke two',
            description : 'wrg erqetyjkil9; ertn stedn wryk6ktem '
        },
        {
            id : 3,
            title : 'joke three',
            description : 'we wtwdthg nd n gn wryk6ktem '
        },
        {
            id : 4,
            title : 'joke four',
            description : 'uopupio; gdbxgb fbf aet stedn wryk6ktem '
        },
        {
            id : 5,
            title : 'joke five',
            description : 'eff ag sbzb fbaet stedn wryk6ktem '
        }
    ]
    res.send(jokes);
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  }) 