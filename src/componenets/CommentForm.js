import React from 'react'
import {useFormik} from 'formik'

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
    <div>
        <input type='text-area' />
    </div>
  )
}

export default CommentForm