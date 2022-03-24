import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
import { Box, Button, makeStyles } from '@material-ui/core'
import Divider from '@mui/material/node/Divider';
import CommentsContainer from '../componenets/CommentsContainer';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    marginRight: "8rem",
    marginLeft: "8rem",
    marginBottom: "1rem",
    borderRadius: "1.250rem",
    boxShadow: "none"

  },

  text: {
    textAlign: "left"
  },

}))
const Comments = () => {
  const classes = useStyles()

  return (
    <div>
      <Divider />

      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500], marginBottom: "3rem" }} aria-label="recipe">
            R
          </Avatar>
        }

        titleTypographyProps={{ variant: 'h7', marginBottom: "0.5rem" }}
        title="Kareem Mostafa"
        subheaderTypographyProps={{ variant: "h7" }}
        subheader="Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.

                        Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be…
                    "
      />


      <Typography sx={{ mb: 1.5, marginLeft: "4.5rem" }} color="text.secondary">
        4d ago {bull} <Button sx={{ mb: 1.5, marginLeft: "4.5rem",textTransform:"none"}}  >reply</Button>
      </Typography>
      <Typography>

        
      </Typography>




      <Divider />

<CardHeader
  avatar={
    <Avatar sx={{ bgcolor: red[500], marginBottom: "3rem" }} aria-label="recipe">
      R
    </Avatar>
  }

  titleTypographyProps={{ variant: 'h7', marginBottom: "0.5rem" }}
  title="Kareem Mostafa"
  subheaderTypographyProps={{ variant: "h7" }}
  subheader="Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.

                  Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be…
              "
/>


<Typography sx={{ mb: 1.5, marginLeft: "4.5rem" }} color="text.secondary">
  4d ago {bull} <Button sx={{ mb: 1.5, marginLeft: "4.5rem" }}>reply</Button>
</Typography>
<Typography>

  
</Typography>


    </div>
  )
}

export default Comments