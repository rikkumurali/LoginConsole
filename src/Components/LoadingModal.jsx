import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: '#fff',
    borderRadius: '15px',
    p: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
};

const LoadingModal = ({open, modalText}) => {
    return (
        <>
            <Modal
                open={open}
            >
                <Box sx={style}>
                    <HourglassBottomIcon color="primary" />
                    <Typography color={'#8e6ed5'} variant="body2" sx={{mt: 1}}>
                        {modalText}
                    </Typography> 
                </Box>
            </Modal>
        </>
    )
}

export default LoadingModal