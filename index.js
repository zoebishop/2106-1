const express = require('express')
const app = express()
const port = 1503

let students = [];
let student = {
	firstname: 'Zoe',
	lastname: 'Bishop'
}
students.push(student);

app.get('/', (req, res) => {
  res.send(students)
})

app.listen(port, () => {
  console.log(`Example app listening at http://math.seattleacademy.org:${port}`)
})