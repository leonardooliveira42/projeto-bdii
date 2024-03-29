var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
const database = require('./oracle/database.js');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Rota para cada endpoint
var unidadeRouter = require('./routes/unidade');
var professorRouter = require('./routes/professores');
var alunoRouter = require('./routes/alunos');
var grupoRouter = require('./routes/grupos');
var salasRouter = require('./routes/salas');
var estilosRouter = require('./routes/estilos');
var apresentacoesRouter = require('./routes/apresentacoes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

app.use(logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//Unidade escolar 
app.use('/unidade', unidadeRouter);
// Professores 
app.use('/professor', professorRouter);
// alunos 
app.use('/aluno', alunoRouter);
// grupos
app.use('/grupo', grupoRouter);
// salas
app.use('/salas', salasRouter);
// estilos de danca
app.use('/estilos', estilosRouter);
// apresentacoes
app.use('/apresentacao', apresentacoesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(() => {
   database.Connect(); 
});

module.exports = app;
