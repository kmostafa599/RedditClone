import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './componenets/Header';
import Post from './componenets/Post';
import Grid from '@mui/material/Grid'
import { Stack } from '@mui/material/node';
function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item>
        </Grid>
        <Grid item>
               </Grid>
      </Grid>
      
      <Stack spacing={2}>
      <ResponsiveAppBar/>
      <Post/> 
      </Stack>
    </div>
  );
}

export default App;
