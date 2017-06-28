const express = require('express')
const app = express()
const models = require('./models')
var bodyParser = require('body-parser')

var mustacheExpress = require('mustache-express');

app.engine('mustache', mustacheExpress());
app.set('views', 'views');
app.set('view engine', 'mustache');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const ToDoList = models.ToDoList.build({
  title: 'take a nap',
  descreption: 'lie down and close ur eyes',
  priority: '1'
}
,{
  title: 'change oil',
  descreption: 'u know how',
  priority: '3'
}
)
console.log("testing on where i am");
models.ToDoList.findAll().then(function(todos){
  console.log(todos);
})



app.listen(3000, function () {
  console.log('express online yay')
});
