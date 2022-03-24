import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './componenets/Header';
import Post from './componenets/Post';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material/node';
import {Routes, Route} from 'react-router-dom';
import PostView from './pages/PostView';

function App() {
  return (
    <div className="App">
      {/* <Grid container spacing={2}>
        <Grid item>
        </Grid>
        <Grid item>
               </Grid>
      </Grid>
      <Stack spacing={2}>
      
      <Post/> 
      <Post/> 
      <Post/> 
      </Stack> */}
    <ResponsiveAppBar/>
    <Routes>
      <Route path='/' element={<Post />}/>
      <Route path='/post/:id' element={<PostView />}/>

    </Routes>
    </div>
  );
}

export default App;
