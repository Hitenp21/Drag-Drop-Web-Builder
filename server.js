import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import uiRoute from './ui/ui.route';
import pageRoute from './page/page.route';
import assetRoute from './assets/assets.route';
import projectRoute from './project/project.route';
import renderHtml from './render/render.controller';

const app = express();
app.use(express.json());
const corsOptions = {
    origin: function (origin, callback) {
      callback(null, true);
    },
  };
  
  corsOptions.credentials = true;
  app.use(cors(corsOptions));
  


app.use('/resources', express.static(path.join(__dirname, 'public')));
app.set('views', `views`);
app.set('view engine', 'hbs');

mongoose.set('strictQuery', false);
const mongoUri = 'mongodb://127.0.0.1:27017/webpage_builder';
mongoose.connect(
  mongoUri,
  {
    // useCreateIndex: true,
    // useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log('Connected to MongoDB');
  },
);
app.use('/pages',pageRoute)
app.use('/',uiRoute);

// app.use('/api/projects', projectRoute);
// app.use('/api/assets', assetRoute);
app.get('/:pageId?', renderHtml);

// app.get('/',(req,res)=>{
//     res.render('home') 
// }) 
const PORT = process.env.APP_PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
