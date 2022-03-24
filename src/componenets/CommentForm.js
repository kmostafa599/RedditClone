import React from 'react'
import {useFormik} from 'formik'
import { Button } from '@material-ui/core'


const CommentForm = () => {

    const formik = useFormik ({
        initialValues:{
            comment:''
        },
        onSubmit: (values) =>{
            formik.resetForm()
        },
        
    })
  return (
    <div style={{}}>
        
        <form style={{width:"100%"}} onSubmit={formik.handleSubmit}>
        <textarea name="comment" id="comment" cols="30" rows="10"></textarea>

      <div>
      <Button type='submit' vairant='contained'  onClick={formik.handleSubmit}  style={{ borderRadius: "15px", color: "#ffff", backgroundColor: "#E11D00", border: "none", boxShadow: "none" ,}}  >
        Comment
        </Button>
      </div>
       
     </form>
    </div>
  )
}

export default CommentForm