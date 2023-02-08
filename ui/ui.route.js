// import express from 'express';
// // import { editor, home } from './ui.controller';

// const uiRoute = express.Router();

// uiRoute.get('/', (req, res) => {
//   // const pages = await listPages();
//   res.render('home', { title: 'Webpage Builder'})});

// uiRoute.get('/editor', (req,res)=>{
//   res.render('editor', { title: 'Webpage Builder' });
// });
// uiRoute.all('*', (req, res) => {
//   res.render('404');
// });

// export default uiRoute;


import express from 'express';
import { editor, home } from './ui.controller';

const uiRoute = express.Router();

uiRoute.get('/', home);
uiRoute.get('/editor/:pageId', editor);
uiRoute.all('*', (req, res) => {
  res.render('404');
});

export default uiRoute;
