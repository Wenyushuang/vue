const express = require('express')
const app = express()
app.use(express.static(__dirname)) //
app.listen(3000)
const arr = []
for(let i = 0;i<=29;i++) {
    arr.push(`http://localhost:3000/images/${i}.jpeg`)
}
app.get('/api/img', (req, res) => {
    res.json(res) //返回一个数字
})