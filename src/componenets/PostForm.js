import { Input, InputAdornment, InputLabel } from '@material-ui/core'
import { useFormik } from 'formik'
import React from 'react'

const PostForm = () => {
    const formik = useFormik ({
        initialValues:{
            title:''
        },
        onSubmit: (values) =>{
            formik.resetForm()
        },
        
    })
  return (
    <div>
        <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
            value={formik.values.comment}
            onChange={formik.handleChange}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            fullWidth
          />
    </div>
  )
}

export default PostForm