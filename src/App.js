import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './componenets/Header';
import Post from './componenets/Post';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material/node';
import { Routes, Route } from 'react-router-dom';
import PostView from './pages/PostView';
import { InitialData } from './store/actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function App() {

  const dispatch = useDispatch()

  const data = useSelector(state => state)
  console.log(data)
  useEffect(() => {
    dispatch(InitialData())
    console.log(data)
  }, [])
  useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <div className="App">

      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<Post />} />
        <Route path='/post/:id' element={<PostView data={data} />} />

      </Routes>
    </div>
  );
}

export default App;
