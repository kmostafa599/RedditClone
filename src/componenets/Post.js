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
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CommentIcon from '@mui/icons-material/Comment';
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    card: {
        width: "100%",
        marginRight: "8rem",
        marginLeft: "8rem",
        marginBottom: "1rem",
    },
    openPost: {
        marginLeft: 'auto',
    },
    text: {
        textAlign: "left"
    },

}))
export default function Post() {

    const classes = useStyles()
    return (
        <div style={{ display: "flex", flexDirection: "vertical", }}>


            <Card className={classes.card} >
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                    }

                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />

                <CardContent>
                    <Typography variant="h6" color="text" className={classes.text} >
                        What would you have done differently if you ran Jurassic Park?

                    </Typography>

                    <Typography variant="body2" color="text" className={classes.text} >
                        Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.

                        Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be???
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <ThumbUpIcon />
                        <div style={{ size: "2" }}>
                            44
                        </div>
                    </IconButton>
                    <IconButton aria-label="share">
                        <ThumbDownIcon />
                        <div style={{ size: "2" }}>
                            1
                        </div>
                    </IconButton>
                    <IconButton aria-label="add to favorites">
                        <CommentIcon />
                        <div style={{ size: "2" }}>
                            100
                        </div>
                    </IconButton>
                    <div className={classes.openPost} >
                        <Link to='/post/2'>
                            <label htmlFor='openPost'>Open post</label>
                            <IconButton id='openPost' >
                                <ArrowForwardIcon />
                            </IconButton>
                        </Link>
                    </div>


                </CardActions>

            </Card>
        </div>
    );
}