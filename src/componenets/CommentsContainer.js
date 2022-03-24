import { Card, makeStyles } from '@material-ui/core'
import React from 'react'
import CommentForm from './CommentForm'
import Comments from './Comments'
const useStyles = makeStyles((theme) => ({
  card: {
      width: "100%",
      marginRight: "8rem",
      marginLeft: "8rem",
      marginBottom: "1rem",
      borderRadius: "1.250rem",

  },

  text: {
      textAlign: "left"
  },
  title:{
    marginLeft:"1rem"
  }

}))
const CommentsContainer = () => {
  const classes = useStyles()

  return (
    <div style={{display:'flex',flexDirection:"column"}}>
      <Card className={classes.card}>
        <h3 className={classes.title}>Comments</h3>
      <Comments />
      <div >
      <CommentForm/>
      </div>
        
      </Card>
            
    </div>
  )
}

export default CommentsContainer