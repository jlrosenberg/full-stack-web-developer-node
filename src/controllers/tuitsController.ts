import posts from '../data/tuits'
import * as tuitsDao from '../daos/tuitsDao';
let tuits = posts;

const findAllTuits = async (req, res) => {
  const tuits = await tuitsDao.findAllTuits()
  res.json(tuits);
}


 const createTuit = async (req, res) => {
  const newTuit = req.body;
  // newTuit._id = (new Date()).getTime()+'';
  newTuit.likes = 0;
  newTuit.stats = {
    likes: 0,
    comments: 0,
    retuits: 0,
  };
  newTuit.handle = 'handle'
  newTuit.postedBy = {
    username: 'someUsername'
  }
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
 }

 const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.sendStatus(200);
 }

 
 const updateTuit = async (req, res) => {
   console.log("here")
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  console.log(updatedTuit)
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
  res.sendStatus(200);
 }
 

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findAllTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}
