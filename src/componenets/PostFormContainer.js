import { Box, Button, Modal, Typography } from '@material-ui/core';
import React from 'react'
import PostForm from './PostForm';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const PostFormContainer = ({open,handleClose}) => {
   
    return (
        <div>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                   <PostForm/>
                </Box>
            </Modal>
        </div>
    )
}

export default PostFormContainer