import React from 'react'
import CommentForm from './CommentForm'
import Comments from './Comments'

const CommentsContainer = () => {
  return (
    <div style={{display:'flex'}}>
        <Comments />
        <CommentForm/>    
    </div>
  )
}

export default CommentsContainer